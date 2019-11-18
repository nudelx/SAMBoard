import firebase from 'firebase/app';
import cred from './fbcred.json'
const fbConnect = () => {
  firebase.initializeApp(cred)
  firebase
    .auth()
    .signInAnonymously()
    .catch(function(error) {
      console.log(error)
    })
}

export default fbConnect
