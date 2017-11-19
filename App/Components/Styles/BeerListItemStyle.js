import { StyleSheet } from 'react-native'
import { Metrics } from '../../Themes'

export default StyleSheet.create({
  container: {
    alignItems: 'center',
    height: Metrics.screenHeight / 4,
    margin: Metrics.baseMargin,
    borderStyle: 'solid',
    borderWidth: 2
  },
  image: {
    flex:2
  },
  label: {
    flex: 1,
    fontWeight: 'bold',
    fontSize: 20,
    color: 'black'
  },
  quantity : {
    color: 'black'
  },
  price: {
    flex: 1,
    fontWeight: 'bold',
    fontSize: 16,
    color: 'black'
  }
})
