import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDfq8gU9tdJG5b_Hxgta5lQ5Y--ypbWkvk",
  authDomain: "text-block-4b1ab.firebaseapp.com",
  projectId: "text-block-4b1ab",
  storageBucket: "text-block-4b1ab.appspot.com",
  messagingSenderId: "900881811474",
  appId: "1:900881811474:web:44de8a82c9dbc0935c70cb",
};

console.log(firebase, "firebase");

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();

export { auth };
