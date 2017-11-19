import React, { Component } from 'react'
import { ScrollView, Text, KeyboardAvoidingView, FlatList, View } from 'react-native'
import { connect } from 'react-redux'
import BeerListItem from '../Components/BeerListItem';
import PrimaryNav from '../Navigation/AppNavigation'
import ActionButton from 'react-native-action-button';
import firebase from 'react-native-firebase';
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'

// Styles
import styles from './Styles/HomeScreenStyle'

class HomeScreen extends Component {

  static navigationOptions = {
    title: 'Welcome',
  };

  constructor (props) {
    super(props);
    this.itemsRef = firebase.database().ref("/offers");
    this.state = {data: []};
  }

  listenForItems(itemsRef) {
    itemsRef.on('value', (snap) => {

      // get children as an array
      var items = [];
      snap.forEach((child) => {
        items.push({
          label: child.val().label,
          price: child.val().price,
          volume: child.val().volume,
          metric: child.val().metric,
          type: child.val().type,
          _key: child.key
        });
      });

      this.setState({
        data: items
      });

    });
  }

  componentDidMount() {
    this.listenForItems(this.itemsRef);
  }

  _renderItem = ({item}) => (
    <BeerListItem item={item}>
    </BeerListItem>
  );

  render () {
    const { navigate } = this.props.navigation;

    let dataObject = require('../Fixtures/beers.json');

    return (
      <View style={styles.container}>
        <ScrollView style={styles.container}>
          <KeyboardAvoidingView behavior='position'>
            <FlatList
              //data = {dataObject.data}
              data = {this.state.data}
              renderItem={this._renderItem}
              keyExtractor={item => item._key}
            />
          </KeyboardAvoidingView>
        </ScrollView>
        <ActionButton
          buttonColor = "rgba(231,76,60,1)"
          offsetX = {10}
          offsety = {10}
          onPress = {() => { navigate('AddOfferScreen')}}
        />
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

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen)
