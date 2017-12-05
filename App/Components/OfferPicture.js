import React, { Component } from 'react'
// import PropTypes from 'prop-types';
import { View, Text, Image } from 'react-native'
import styles from './Styles/OfferPictureStyle'
import firebase from 'react-native-firebase';
import { Images } from '../Themes'

export default class OfferPicture extends Component {
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
    this.state = {img: Images.closeButton};
    let path = "gs://cheapbeer-1b1c8.appspot.com/offersPictures/" + props.offerId;
    firebase.storage().refFromURL(path).getDownloadURL().then((url) => {
      if (url) {
        this.setState({img: {uri: url}});
      }
    }).catch((error) => {
      return;
    });
  }

  render () {
    return (
      <Image  style  = {styles.picture}
              source = {this.state.img}
              resizeMode  = {this.props.resizeMode ? this.props.resizeMode : 'cover'}/>
    )
  }
}
