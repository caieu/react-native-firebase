import React, { Component } from 'react'
// import PropTypes from 'prop-types';
import { View, Text, Image } from 'react-native'
import styles from './Styles/BeerListItemStyle'
import { Images } from '../Themes'

export default class BeerListItem extends Component {
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

  render () {

    let beer = this.props.item;

    return (
      <View style={styles.container}>
        <Image source={Images.launch} style={styles.image} resizeMode='cover'/>
        <Text><Text style={styles.label}>{beer.label}</Text><Text  style={styles.quantity}> {beer.volume}{beer.metric}</Text></Text>
        <Text style={styles.price}>Menor preço: R${beer.price}</Text>
      </View>
    )
  }
}
