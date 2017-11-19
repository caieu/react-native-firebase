import React, { Component } from 'react'
import { ScrollView, Text, KeyboardAvoidingView, TextInput, Button } from 'react-native'
import { connect } from 'react-redux'
import firebase from 'react-native-firebase';
import { StackNavigator, NavigationActions } from 'react-navigation'
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'

// Styles
import styles from './Styles/AddOfferScreenStyle'

const resetAction = NavigationActions.reset({
  index: 0,
  actions: [
    NavigationActions.navigate({ routeName: 'HomeScreen'})
  ]
})

class AddOfferScreen extends Component {

  static navigationOptions = {
    title: 'Add a Offer',
  };

  constructor(props) {
    super(props);
    this.state = {
      label: 'Label',
      price: 0,
      volume: 0,
      metric: "ml",
      type: "can",
    };
    this.offersRef = firebase.database().ref("/offers");
  }

  onPressAddOffer () {
    this.offersRef.push(this.state);
    this.props.navigation.dispatch(resetAction);
  }

  render () {
    return (
      <ScrollView style={styles.container}>
        <KeyboardAvoidingView behavior='position'>
          <TextInput
            style={styles.field}
            placeholder= "Label"
            onChangeText={(value) => this.setState({label: value})}
          />
          <TextInput
            style={styles.field}
            placeholder= "Price"
            onChangeText={(value) => this.setState({price: value})}
          />
          <TextInput
            style={styles.field}
            placeholder= "Volume"
            onChangeText={(value) => this.setState({volume: value})}
          />
          <TextInput
            style={styles.field}
            placeholder= "Metric"
            onChangeText={(value) => this.setState({metric: value})}
          />
          <TextInput
            style={styles.field}
            placeholder= "Type"
            onChangeText={(value) => this.setState({type: value})}
          />
          <Button
            onPress={this.onPressAddOffer.bind(this)}
            title="Add Offer"
            color="#841584"
            style={styles.addButton}
            accessibilityLabel="Add a new Offer"
          />
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

export default connect(mapStateToProps, mapDispatchToProps)(AddOfferScreen)
