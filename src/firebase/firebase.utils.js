import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyChhrwYJs6q6uV7zbjMubV-qpsEsouSapE',
  authDomain: 'spree-db-12e5f.firebaseapp.com',
  databaseURL: 'https://spree-db-12e5f.firebaseio.com',
  projectId: 'spree-db-12e5f',
  storageBucket: 'spree-db-12e5f.appspot.com',
  messagingSenderId: '774687589187',
  appId: '1:774687589187:web:f680388c394c3ddb43e5f6',
  measurementId: 'G-1W07QTTMMV'
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }
  return userRef;
};

export const addCollectionAndDocuments = async (
  collectionKey,
  objectsToAdd
) => {
  const collectionRef = firestore.collection(collectionKey);

  const batch = firestore.batch();
  objectsToAdd.forEach(obj => {
    const newDocRef = collectionRef.doc();
    batch.set(newDocRef, obj);
  });

  return await batch.commit();
};


export const convertCollectionsSnapshotToMap = (collections) => {
  const trasnformedCollection = collections.docs.map(doc => {
    const  { title, items } = doc.data();

    return {
      routName: encodeURI(title.toLowerCase()),
      id: doc.id,
      title,
      items
    };
  });

  console.log(trasnformedCollection)
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
