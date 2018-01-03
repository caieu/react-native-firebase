export default {
  addOfferScreen : {
    title: "Add a Offer",
    errorMessages: {
      labelNotFound : {
        title: "Label not Found",
        message: "You need to set a beer label for this offer."
      },
      priceNotSet : {
        title: "Price not set",
        message: "You need to set a price for this offer."
      },
      volumeNotSet : {
        title: "Volume not set",
        message: "You need to set a net volume for this offer."
      },
      placeNotSet : {
        title: "Place not set",
        message: "You need to set a place for this offer."
      },
      photoNotSet : {
        title: "Photo not take",
        message: "You need to take a photo to prove this offer."
      },
    },
    wizard : {
      stageBeerLabel: {
        title : 'What is the beer label name?',
        inputPlaceHolder : "Beer Label, ex: Budweiser"
      },
      stageBeerPrice: {
        title : 'What is the price of this beer offer?',
        inputPlaceHolder : "Something like 2.99"
      },
      stageBeerVolume: {
        title : 'What is the net volume of beer?',
        inputPlaceHolder : "Ex: 12, 350..."
      },
      stageBeerContainerType: {
        title : 'What kind of beer container?'
      },
      stageBeerOfferLocation: {
        title : 'Where did you find this beer offer?',
        inputPlaceHolder : "Touch here to select a place"
      },
      stageBeerOfferPicture: {
        title : 'Take or add a photo to show the offer',
        inputPlaceHolder : "Touch here to select a photo"
      },
    }
  }
};
