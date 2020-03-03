import firebase from 'firebase/app'
import 'firebase/firestore'


  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyAFngiu_b0z1gq41EWukGMpg2urDQGbcc8",
    authDomain: "react-test-d19be.firebaseapp.com",
    databaseURL: "https://react-test-d19be.firebaseio.com",
    projectId: "react-test-d19be",
    storageBucket: "react-test-d19be.appspot.com",
    messagingSenderId: "423746224017",
    appId: "1:423746224017:web:0dac823b54fe0f52c7a430"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase