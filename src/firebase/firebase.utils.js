import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyC8-Hv96Z_ZZU5n71ACDEq9izUkCqpucXo",
  authDomain: "crwm-db-c2477.firebaseapp.com",
  databaseURL: "https://crwm-db-c2477.firebaseio.com",
  projectId: "crwm-db-c2477",
  storageBucket: "crwm-db-c2477.appspot.com",
  messagingSenderId: "753987634065",
  appId: "1:753987634065:web:a9e46c73cc65a9c1481030",
  measurementId: "G-26EV3ST1N7",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
