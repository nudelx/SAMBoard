import * as firebase from 'firebase'


const fbConnect = () => {
  var config = {
    auth: "AIzaSyCDrjqOVXidkdekquE4MumZAkR9sY5VP94",
    apiKey: "AIzaSyCDrjqOVXidkdekquE4MumZAkR9sY5VP94",
    authDomain: "sam-esd-status.firebaseapp.com",
    databaseURL: "https://sam-esd-status.firebaseio.com",
    storageBucket: "sam-esd-status.appspot.com"
  };
  firebase.initializeApp(config);
  firebase.auth().signInAnonymously().catch(function(error) {
    console.log(error);
  });
}


export default fbConnect
