import { StyleSheet } from 'react-native'
import { Metrics, Colors } from '../../Themes'

export default StyleSheet.create({
  container: {
    flex: 1
  },
  picture: {
    width: Metrics.screenWidth - (Metrics.baseMargin * 2) - Metrics.borderWidth,
    height: '100%'
  },
})
