
// Firebase App (the core Firebase SDK) is always required and must be listed first
import * as firebase from "firebase/app";

// Add the Firebase products that you want to use
import "firebase/auth";
import "firebase/firestore";

// TODO: Replace the following with your app's Firebase project configuration
var firebaseConfig = {
  apiKey: "apiKey",
  authDomain: "scrumtools-eef41.firebaseapp.com",
  databaseURL: "https://scrumtools-eef41.firebaseio.com"
};

class Fb {
  // Initialize Firebase
  constructor() {
    firebase.initializeApp(firebaseConfig);
    const database = firebase.database();
  }

  
}

export default new Fb();