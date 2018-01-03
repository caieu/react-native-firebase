import { StyleSheet } from 'react-native'
import { ApplicationStyles, Metrics } from '../../Themes/'

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  stage: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 2,
    width: '100%'
  },
  stageTitle: {
    margin: Metrics.baseMargin,
    fontSize: 24,
    color: 'black',
    textAlign: 'center'
  },
  stageField: {
    margin: Metrics.baseMargin,
    color: 'black',
    width: '90%',
    fontSize: 18,
    textAlign: 'center'
  },
  volumeInputContainer : {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%'
  },
  volumeInput : {
    flex: 2,
    margin: Metrics.baseMargin,
  },
  volumeMetric : {
    flex: 1,
    margin: Metrics.baseMargin,
  },
  addButtonContainer : {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-around',
    margin: Metrics.baseMargin,
    flex: 1
  },
  pictureRow: {
    flex: 4,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  picture: {
    width: 200,
    height: 200,
    resizeMode: "contain",
    margin: Metrics.baseMargin,
    flex: 4
  }
})
