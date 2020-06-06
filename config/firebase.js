import firebase from 'firebase';
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";

var firebaseConfig = {
  apiKey: "AIzaSyDv47wzgEL8_77bCXhh8u0AA0uHjNm_ndM",
  authDomain: "anonibus-b0657.firebaseapp.com",
  databaseURL: "https://anonibus-b0657.firebaseio.com",
  projectId: "anonibus-b0657",
  storageBucket: "anonibus-b0657.appspot.com",
  messagingSenderId: "112746655340",
  appId: "1:112746655340:web:920d0f0ff47532858a7249"
};

export default !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();