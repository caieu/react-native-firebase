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
    color: 'black'
  },
  inputField: {
    margin: Metrics.baseMargin,
    flex: 4,
    color: 'black'
  },
  addButton: {
    margin: Metrics.baseMargin
  },
  pictureRow: {
    flex: 4,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  picture: {
    width: 80,
    height: 80,
    resizeMode: "contain",
    margin: Metrics.baseMargin,
    flex: 4
  }
})
