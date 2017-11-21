import React, { Component } from 'react'
import { ScrollView, Text, KeyboardAvoidingView, TextInput, Button, View, Picker } from 'react-native'
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
              <Picker.Item label="Litro" value="lt" />
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
            </Picker>
          </View>
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
