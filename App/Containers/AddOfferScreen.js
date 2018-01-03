import React, { Component } from 'react';
import { ScrollView, Text, KeyboardAvoidingView, TextInput, Button, View,
  Picker, TouchableOpacity, Image, Platform } from 'react-native';
import { connect } from 'react-redux';
import { Images } from '../Themes';
import { StackNavigator, NavigationActions } from 'react-navigation';
import firebase from 'react-native-firebase';
import RNGooglePlaces from 'react-native-google-places';
import ImagePicker from 'react-native-image-crop-picker';
import I18n from '../I18n/i18n';
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'

// Styles
import styles from './Styles/AddOfferScreenStyle';

const resetAction = NavigationActions.back({});

class AddOfferScreen extends Component {

  static navigationOptions = {
    title: I18n.t('addOfferScreen.title'),
    marginRight: 56
  };

  constructor(props) {
    super(props);
    this.state = {
      label: 'Label',
      price: 0,
      volume: 0,
      metric: "ml",
      type: "can",
      place: {name : I18n.t('addOfferScreen.wizard.stageBeerOfferLocation.inputPlaceHolder')},
      picture: null,
      stage: 0
    };
    this.offersRef = firebase.database().ref("/offers");
  }

  onPressAddOffer () {
    if (this.state.stage == 5) {
      let offerObject = {
        label: this.state.label,
        price: this.state.price,
        volume: this.state.volume,
        metric: this.state.metric,
        type: this.state.type,
        createdAt: firebase.database.ServerValue.TIMESTAMP
      }

      if (this.state.place.placeID) {
        offerObject.placeID = this.state.place.placeID;
        firebase.database().ref("/places/" + offerObject.placeID).set(this.state.place);
      }

      let offerKey = this.offersRef.push(offerObject).key;

      if (this.state.picture != null) {
        this.uploadImage(this.state.picture.uri, offerKey);
      }
      this.props.navigation.dispatch(resetAction);
    } else {
      this.setState({stage: this.state.stage + 1});
    }
  }

  onPressBack () {
    this.setState({stage: this.state.stage - 1});
  }

  openSearchModal() {
    let self = this;
    RNGooglePlaces.openPlacePickerModal().then((place) => {
      self.setState({place:place});
    }).catch(error => console.log(error.message));
  }

  openImagePicker() {
    ImagePicker.openCamera({
      width: 800,
      height: 800,
      cropping: true
    }).then(image => {
      let source = { uri: image.path };
      console.log(image);
      this.setState({
        picture: source
      });
    });

  }

  uploadImage(uri, offerKey, mime = 'image/jpg') {
    const imageRef = firebase.storage().ref('offersPictures').child(offerKey);
    imageRef.put(uri, { contentType: mime });
  }

  render () {
    return (
      <View style={styles.container}>
        {(this.state.stage == 0) &&
          <View style={styles.stage}>
            <Text style={styles.stageTitle}>
              {I18n.t('addOfferScreen.wizard.stageBeerLabel.title')}
            </Text>
            <TextInput
              ref='LabelInput'
              style={styles.stageField}
              placeholder= {I18n.t('addOfferScreen.wizard.stageBeerLabel.inputPlaceHolder')}
              onChangeText={(value) => this.setState({label: value})}
              returnKeyType="next"
              onSubmitEditing={(event) => console.log('next')}
            />
          </View>
        }
        {(this.state.stage == 1) &&
          <View style= {styles.stage}>
            <Text style={styles.stageTitle}>
              {I18n.t('addOfferScreen.wizard.stageBeerPrice.title')}
            </Text>
            <TextInput
              ref='PriceInput'
              style={styles.stageField}
              placeholder= {I18n.t('addOfferScreen.wizard.stageBeerPrice.inputPlaceHolder')}
              keyboardType="numeric"
              onChangeText={(value) => this.setState({price: value})}
              returnKeyType="next"
              onSubmitEditing={(event) => console.log('next')}
            />
          </View>
        }
        {(this.state.stage == 2) &&
          <View style= {styles.stage}>
            <Text style={styles.stageTitle}>
              {I18n.t('addOfferScreen.wizard.stageBeerVolume.title')}
            </Text>
            <View style={styles.volumeInputContainer}>
              <TextInput
                ref='VolumeInput'
                style={styles.volumeInput}
                placeholder= {I18n.t('addOfferScreen.wizard.stageBeerVolume.inputPlaceHolder')}
                keyboardType="numeric"
                onChangeText={(value) => this.setState({volume: value})}
                returnKeyType="next"
              />
              <Picker
                ref='MetricInput'
                style={styles.volumeMetric}
                selectedValue={this.state.metric}
                onValueChange={(itemValue, itemIndex) => this.setState({metric: itemValue})}>
                <Picker.Item label="ML" value="ml" />
                <Picker.Item label="Liter" value="lt" />
              </Picker>
            </View>

          </View>
        }
        {(this.state.stage == 3) &&
          <View style= {styles.stage}>
            <Text style={styles.stageTitle}>
              {I18n.t('addOfferScreen.wizard.stageBeerContainerType.title')}
            </Text>
            <Picker
              ref='TypeInput'
              style={styles.stageField}
              selectedValue={this.state.type}
              onValueChange={(itemValue, itemIndex) => this.setState({type: itemValue})}>
              <Picker.Item label="Can" value="can" />
              <Picker.Item label="Bottle" value="bottle" />
              <Picker.Item label="Cup" value="cup" />
            </Picker>
          </View>
        }
        {(this.state.stage == 4) &&
          <View style={styles.stage}>
            <TouchableOpacity
              style={styles.stage}
              onPress={() => this.openSearchModal()}>
              <Text style={styles.stageTitle}>
                {I18n.t('addOfferScreen.wizard.stageBeerOfferLocation.title')}
              </Text>
              <TextInput
                ref='LocationInput'
                style={styles.stageField}
                placeholder= {I18n.t('addOfferScreen.wizard.stageBeerOfferLocation.inputPlaceHolder')}
                editable={false}
                value={this.state.place.name}/>
            </TouchableOpacity>
          </View>
        }
        {(this.state.stage == 5) &&
          <View  style={styles.stage}>
            <TouchableOpacity
              style={styles.stage}
              onPress={() => this.openImagePicker()}
            >
              <Text style={styles.stageTitle}>
                {I18n.t('addOfferScreen.wizard.stageBeerOfferPicture.title')}
              </Text>
              {this.state.picture == null ? (
                <TextInput
                  ref='PictureInput'
                  style={styles.stageField}
                  placeholder= {I18n.t('addOfferScreen.wizard.stageBeerOfferPicture.inputPlaceHolder')}
                  editable={false}
                />
              ) : (
                <Image source={this.state.picture} style={styles.picture} />
              )}
            </TouchableOpacity>
          </View>
        }
        <View style={styles.addButtonContainer}>
          {(this.state.stage > 0) &&
            <Button
              onPress={this.onPressBack.bind(this)}
              title="Back"
              color="#595959"
              style={styles.addButton}
              accessibilityLabel="Back"
            />
          }
          {this.state.stage < 5 &&
            <Button
              onPress={this.onPressAddOffer.bind(this)}
              title="Next"
              color="#f39c12"
              style={styles.addButton}
              accessibilityLabel="Next"
            />
          }
          {this.state.stage == 5 &&
            <Button
              onPress={this.onPressAddOffer.bind(this)}
              title="Add Offer"
              color="#f39c12"
              style={styles.addButton}
              accessibilityLabel="Add a new Offer"
            />
          }

        </View>

      </View>
    )
  }
}

const mapStateToProps = (state) => {
  return {
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddOfferScreen)
