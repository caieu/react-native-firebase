import { StyleSheet } from 'react-native'
import { ApplicationStyles, Metrics } from '../../Themes/'

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  field: {
    margin: Metrics.baseMargin
  },
  addButton: {
    margin: Metrics.baseMargin
  }
})
