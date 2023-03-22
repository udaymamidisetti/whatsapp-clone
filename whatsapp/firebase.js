import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";
const firebaseConfig = {
  apiKey: "AIzaSyCEmgScNJGjpobib8yveq426DbwH1Z1Aoc",
  authDomain: "whatsapp-9e355.firebaseapp.com",
  projectId: "whatsapp-9e355",
  storageBucket: "whatsapp-9e355.appspot.com",
  messagingSenderId: "942000058040",
  appId: "1:942000058040:web:862454bac98040295e4e4d",
};

const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

const db = app.firestore();
const auth = app.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };
