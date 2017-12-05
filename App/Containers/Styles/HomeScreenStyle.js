import { StyleSheet } from 'react-native'
import { ApplicationStyles, Metrics } from '../../Themes/'

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  headerTitle: {
    alignSelf:'center',
    textAlign: 'center',
    fontSize: 20,
    fontWeight: '100',
    color: "#ffffff"
  }
})
