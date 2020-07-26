import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyDFifOjJYXQiSsELKSSuuJU-WeSVno_0sU",
    authDomain: "easybuy-db.firebaseapp.com",
    databaseURL: "https://easybuy-db.firebaseio.com",
    projectId: "easybuy-db",
    storageBucket: "easybuy-db.appspot.com",
    messagingSenderId: "284844978251",
    appId: "1:284844978251:web:58b09502ae5dc19f1b1dce",
    measurementId: "G-F1P87NPXPL"
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GithubAuthProvider();
  provider.setCustomParameters({prompt: 'select_account'});
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;