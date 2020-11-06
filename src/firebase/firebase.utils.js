import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyChhrwYJs6q6uV7zbjMubV-qpsEsouSapE",
    authDomain: "spree-db-12e5f.firebaseapp.com",
    databaseURL: "https://spree-db-12e5f.firebaseio.com",
    projectId: "spree-db-12e5f",
    storageBucket: "spree-db-12e5f.appspot.com",
    messagingSenderId: "774687589187",
    appId: "1:774687589187:web:f680388c394c3ddb43e5f6",
    measurementId: "G-1W07QTTMMV"
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account' });
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;