import React, { Component } from 'react'
import { ScrollView, Text, KeyboardAvoidingView, Image } from 'react-native'
import { connect } from 'react-redux'
import OfferPicture from '../Components/OfferPicture'
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'

// Styles
import styles from './Styles/OfferDetailScreenStyle'

class OfferDetailScreen extends Component {

  constructor(props) {
    super(props);
    console.log(props.navigation.state.params.offer);
  }

  render () {
    let offer = this.props.navigation.state.params.offer;
    return (
      <ScrollView style={styles.container}>
        <KeyboardAvoidingView behavior='position'>
          <OfferPicture id={offer._key}/>
          <Text>{offer.label}</Text>
        </KeyboardAvoidingView>
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

export default connect(mapStateToProps, mapDispatchToProps)(OfferDetailScreen)
