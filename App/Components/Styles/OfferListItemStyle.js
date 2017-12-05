import { StyleSheet } from 'react-native'
import { Metrics, Colors } from '../../Themes'

export default StyleSheet.create({
  offerContainer: {
    flexDirection: 'column',
    flex: 1,
    height: Metrics.screenHeight / 3,
    margin: Metrics.baseMargin,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 5
  },
  offerContainerTouchable : {
    backgroundColor: 'transparent'
  },
  pictureContainer: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 2
  },
  picture: {
    width: Metrics.screenWidth - (Metrics.baseMargin * 2) - Metrics.borderWidth,
    height: '100%'
  },
  infoContainer: {
    flex: 1,
    backgroundColor: Colors.themeSecondary,
    flexDirection: 'column',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center'
  },
  label: {
    flex: 1,
    fontWeight: '500',
    fontSize: 20,
    color: 'white',
    textAlign: 'center'
  },
  price: {
    flex: 1,
    fontWeight: '200',
    fontSize: 16,
    color: 'white',
    textAlign: 'center'
  }
})
