import * as firebase from 'firebase'
import cred from './fbcred.json'
console.log('firebase', firebase)
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
