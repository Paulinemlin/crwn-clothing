import firebase from 'firebase/compat/app'
import 'firebase/compat/firestore'
import 'firebase/compat/auth'


const config = {
    apiKey: "AIzaSyC4EFb_VZ-eWma4LkjaFI9fahgocp1l5DU",
    authDomain: "crwn-db-71a41.firebaseapp.com",
    projectId: "crwn-db-71a41",
    storageBucket: "crwn-db-71a41.appspot.com",
    messagingSenderId: "769565990591",
    appId: "1:769565990591:web:c83e81417da707dff0300a",
    measurementId: "G-HVFH46JCG2"
  }

  firebase.initializeApp(config)

  export const auth = firebase.auth()
  export const firestore = firebase.firestore()


  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt : 'select_account'});

  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;