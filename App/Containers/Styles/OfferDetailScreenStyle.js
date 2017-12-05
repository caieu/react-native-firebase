import { StyleSheet } from 'react-native'
import { ApplicationStyles } from '../../Themes/'
import { Metrics } from '../../Themes'

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  offerDetailContainer : {
    flex: 1,
    flexDirection: 'column'
  },
  pictureContainer : {
    flex: 2,
    width: '100%',
    backgroundColor: "gray",
    alignItems: 'center',
    justifyContent: 'center'
  },
  infoContainer : {
    margin: Metrics.baseMargin
  },
  labelText : {
    fontSize: 30
  },
  volumeText : {
    fontSize: 25
  },
  priceText : {
    fontSize: 20
  },
  placeContainer : {
    flex: 1,
    margin: Metrics.baseMargin
  },
  placeNameText : {
    fontSize: 20
  },
  placeAddressText : {
    fontSize: 15
  },
  placeOptionsContainer : {
    flexDirection: 'row',
    marginTop: Metrics.baseMargin
  },
  placeMapOptionContainer : {
    flex : 1,
    alignItems: 'center',
    justifyContent: 'center',

  },
  placePhoneOptionContainer : {
    flex : 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderLeftWidth: 1,
    borderColor: 'gray'
  },
})
