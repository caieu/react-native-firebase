import React, { Component } from 'react'
import { ScrollView, Text, KeyboardAvoidingView, Image, View, Linking } from 'react-native'
import { connect } from 'react-redux'
import OfferPicture from '../Components/OfferPicture'
import firebase from 'react-native-firebase';
import Icon from 'react-native-vector-icons/FontAwesome';
import call from 'react-native-phone-call'
import openMap from 'react-native-open-maps';
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'

// Styles
import styles from './Styles/OfferDetailScreenStyle'

class OfferDetailScreen extends Component {

  constructor(props) {
    super(props);

    let offer = this.props.navigation.state.params.offer;

    this.state =  { placeID : offer.placeID,
                    place: {name: "", address : ""} };

    if (offer.placeID) {
      firebase.database().ref('/places/' + offer.placeID).once('value').then((snapshot) => {
        this.setState({place: snapshot.val()});
      });
    }
  }

  callPlace () {
    let args = {
      number : this.state.place.phoneNumber,
      prompt : false
    }
    call(args).catch(console.error);
  }

  openPlace () {
    let url = "https://www.google.com/maps/search/?api=1&query=" +
              this.state.place.latitude + "," + this.state.place.longitude +
              "&query_place_id=" + this.state.place.placeID;

    Linking.canOpenURL(url).then(supported => {
      if (!supported) {
        console.log('Can\'t handle url: ' + url);
      } else {
        return Linking.openURL(url);
      }
    }).catch(err => console.error('An error occurred', err));
}

  render () {
    let offer = this.props.navigation.state.params.offer;

    let place = <View style={styles.placeContainer}></View>;

    let phoneButton = null;

    if (this.state.placeID && this.state.place.phoneNumber) {
      phoneButton =
      <View style={styles.placePhoneOptionContainer}>
        <Icon.Button name="phone-square" size={30} color= "gray"
        backgroundColor="transparent" onPress={this.callPlace.bind(this)}>
        <Text>Call</Text>
        </Icon.Button>
      </View>
    }

    if (this.state.placeID && this.state.place.name) {
      place =
      <View style={styles.placeContainer}>
        <Text style={styles.placeNameText}>{this.state.place.name}</Text>
        <Text style={styles.placeAddressText}>{this.state.place.address}</Text>
        <View style={styles.placeOptionsContainer}>
          <View style={styles.placeMapOptionContainer}>
            <Icon.Button name="map-o" size={30} color= "gray" backgroundColor="transparent" onPress={this.openPlace.bind(this)}>
            <Text>Map</Text>
            </Icon.Button>
          </View>
          {phoneButton}
        </View>
      </View>;
    }

    return (
      <View style={styles.offerDetailContainer}>
        <View style={styles.pictureContainer}>
          <OfferPicture offerId={offer._key} resizeMode="cover"/>
        </View>
        <View style={styles.infoContainer}>
          <Text style={styles.labelText}>{offer.label} <Text style={styles.volumeText}>{offer.volume}{offer.metric}</Text></Text>
          <Text style={styles.priceText}>R${offer.price}</Text>
        </View>
        {place}

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

export default connect(mapStateToProps, mapDispatchToProps)(OfferDetailScreen)
