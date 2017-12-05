import { StackNavigator, NavigationActions } from 'react-navigation'
import OfferDetailScreen from '../Containers/OfferDetailScreen'
import AddOfferScreen from '../Containers/AddOfferScreen'
import HomeScreen from '../Containers/HomeScreen'
import LaunchScreen from '../Containers/LaunchScreen'

import styles from './Styles/NavigationStyles'

// Manifest of possible screens
const PrimaryNav = StackNavigator({
  OfferDetailScreen: { screen: OfferDetailScreen },
  AddOfferScreen: { screen: AddOfferScreen },
  HomeScreen: { screen: HomeScreen },
  LaunchScreen: { screen: LaunchScreen }
}, {
  // Default config for all screens
  initialRouteName: 'HomeScreen',
  navigationOptions: {
    headerStyle: styles.header,
    headerTitleStyle: styles.headerTitle
  }
})

export default PrimaryNav
