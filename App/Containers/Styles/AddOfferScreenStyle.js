import { StyleSheet } from 'react-native'
import { ApplicationStyles, Metrics } from '../../Themes/'

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  inputRow: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  labelField: {
    margin: Metrics.baseMargin,
    flex: 1,
    textAlign: 'right',
    fontSize: 14,
    fontWeight: 'bold',
    color: '#000000'
  },
  inputField: {
    margin: Metrics.baseMargin,
    flex: 5
  },
  addButton: {
    margin: Metrics.baseMargin
  }
})
