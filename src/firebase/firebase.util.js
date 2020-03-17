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

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;