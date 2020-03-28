import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyBXWxAPteNRA9gYTVCXguk8y5CnRLc_Pcw',
  authDomain: 'react-e-commerce-76665.firebaseapp.com',
  databaseURL: 'https://react-e-commerce-76665.firebaseio.com',
  projectId: 'react-e-commerce-76665',
  storageBucket: 'react-e-commerce-76665.appspot.com',
  messagingSenderId: '83481155695',
  appId: '1:83481155695:web:53a16e4a272150e010159a',
  measurementId: 'G-H7LYF6W3PX',
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
        ...additionalData,
      })
    } catch(error) {
      console.log('error creating user', error.messsage)
    }
  }
  return userRef;
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;