import React, { Component } from 'react'
import { ScrollView, Text, KeyboardAvoidingView, TextInput, Button, View,
  Picker, TouchableOpacity, Image, Platform } from 'react-native'
import { connect } from 'react-redux'
import { Images } from '../Themes'
import { StackNavigator, NavigationActions } from 'react-navigation'
import firebase from 'react-native-firebase';
import RNGooglePlaces from 'react-native-google-places'
import ImagePicker from 'react-native-image-picker'
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'

// Styles
import styles from './Styles/AddOfferScreenStyle'

const resetAction = NavigationActions.back({});

class AddOfferScreen extends Component {

  static navigationOptions = {
    title: 'Add a Offer',
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
      place: {name : "Select a Location"},
      picture: null
    };
    this.offersRef = firebase.database().ref("/offers");
  }

  onPressAddOffer () {
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
  }

  openSearchModal() {
    let self = this;
    RNGooglePlaces.openPlacePickerModal().then((place) => {
      self.setState({place:place});
    }).catch(error => console.log(error.message));
  }

  openImagePicker() {
    ImagePicker.showImagePicker(null, (response) => {
      console.log('Response = ', response);
      if (response.didCancel) {
        console.log('User cancelled image picker');
      }
      else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      }
      else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
      }
      else {
        let source = { uri: response.uri };
        console.log(response);
        this.setState({
          picture: source
        });
      }
    });
  }

  uploadImage(uri, offerKey, mime = 'image/jpg') {
    const imageRef = firebase.storage().ref('offersPictures').child(offerKey);
    imageRef.put(uri, { contentType: mime });
  }

  render () {
    return (
      <ScrollView style={styles.container}>
        <View style= {styles.inputRow}>
          <Text style={styles.labelField}>
            Label:
          </Text>
          <TextInput
            ref='LabelInput'
            style={styles.inputField}
            placeholder= "Label"
            onChangeText={(value) => this.setState({label: value})}
            returnKeyType="next"
            onSubmitEditing={(event) => this.refs.PriceInput.focus()}
          />
        </View>
        <View style= {styles.inputRow}>
          <Text style={styles.labelField}>
            Price:
          </Text>
          <TextInput
            ref='PriceInput'
            style={styles.inputField}
            placeholder= "Price"
            keyboardType="numeric"
            onChangeText={(value) => this.setState({price: value})}
            returnKeyType="next"
            onSubmitEditing={(event) => this.refs.VolumeInput.focus()}
          />
        </View>
        <View style= {styles.inputRow}>
          <Text style={styles.labelField}>
            Volume:
          </Text>
          <TextInput
            ref='VolumeInput'
            style={styles.inputField}
            placeholder= "Volume"
            keyboardType="numeric"
            onChangeText={(value) => this.setState({volume: value})}
            returnKeyType="next"
          />
        </View>
        <View style= {styles.inputRow}>
          <Text style={styles.labelField}>
            Metric:
          </Text>
          <Picker
            ref='MetricInput'
            style={styles.inputField}
            selectedValue={this.state.metric}
            onValueChange={(itemValue, itemIndex) => this.setState({metric: itemValue})}>
            <Picker.Item label="ML" value="ml" />
            <Picker.Item label="Liter" value="lt" />
          </Picker>
        </View>
        <View style= {styles.inputRow}>
          <Text style={styles.labelField}>
            Type:
          </Text>
          <Picker
            ref='TypeInput'
            style={styles.inputField}
            selectedValue={this.state.type}
            onValueChange={(itemValue, itemIndex) => this.setState({type: itemValue})}>
            <Picker.Item label="Can" value="can" />
            <Picker.Item label="Bottle" value="bottle" />
            <Picker.Item label="Cup" value="cup" />
          </Picker>
        </View>
        <View>
          <TouchableOpacity
            style= {styles.inputRow}
            onPress={() => this.openSearchModal()}
          >
            <Text style={styles.labelField}>
              Location:
            </Text>
              <TextInput
                ref='LocationInput'
                style={styles.inputField}
                placeholder= "Select a location"
                editable={false}
                value={this.state.place.name}
              />
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity
            style= {styles.pictureRow}
            onPress={() => this.openImagePicker()}
          >
            <Text style={styles.labelField}>
              Picture:
            </Text>
            {this.state.picture == null ? (
              <TextInput
                ref='PictureInput'
                style={styles.inputField}
                placeholder= "Select a picture"
                editable={false}
              />
            ) : (
              <Image source={this.state.picture} style={styles.picture} />
            )}
          </TouchableOpacity>
        </View>
        <Button
          onPress={this.onPressAddOffer.bind(this)}
          title="Add Offer"
          color="#841584"
          style={styles.addButton}
          accessibilityLabel="Add a new Offer"
        />

      </ScrollView>
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
