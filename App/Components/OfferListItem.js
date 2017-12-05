import React, { Component } from 'react'
// import PropTypes from 'prop-types';
import { View, Text, Image, TouchableOpacity, TouchableHighlight } from 'react-native'
import styles from './Styles/OfferListItemStyle'
import { Images } from '../Themes'
import firebase from 'react-native-firebase';
import { StackNavigator, NavigationActions } from 'react-navigation'
import OfferPicture from './OfferPicture'

export default class OfferListItem extends Component {
  // // Prop type warnings
  // static propTypes = {
  //   someProperty: PropTypes.object,
  //   someSetting: PropTypes.bool.isRequired,
  // }
  //
  // // Defaults for props
  // static defaultProps = {
  //   someSetting: false
  // }

  constructor (props) {
    super(props);
    this.itemsRef = firebase.database().ref("/offers").orderByChild('createdAt').limitToLast(10);
  }

  render () {
    let offer = this.props.item;
    return (
      <TouchableHighlight underlayColor={'transparent'}
                          onPress={() => this.props.navigation.navigate("OfferDetailScreen", {offer : offer})}>
        <View style={styles.offerContainer}>
          <View style={styles.pictureContainer}>
            <OfferPicture offerId={this.props.item._key} width="10" height="10"/>
          </View>
          <View style={styles.infoContainer}>
            <Text  style={styles.label}>{offer.label} {offer.volume}{offer.metric}</Text>
            <Text style={styles.price}>R${offer.price}</Text>
          </View>
        </View>
      </TouchableHighlight>
    )
  }
}
