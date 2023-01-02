import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCWqwpulP8NZ8nP2s89LoibB6eIN1t-P8Q",
  authDomain: "clone-3802e.firebaseapp.com",
  projectId: "clone-3802e",
  storageBucket: "clone-3802e.appspot.com",
  messagingSenderId: "49569534886",
  appId: "1:49569534886:web:55c41c409525dfe11fb567",
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
export const db = firebaseApp.firestore();
export const auth = firebase.auth();
