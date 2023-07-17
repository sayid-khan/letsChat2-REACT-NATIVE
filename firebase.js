import * as firebase from "firebase";
import "firebase/auth";
import "firebase/storage";

var firebaseConfig = {
  apiKey: "AIzaSyA4XF-W8ksj-TNDHGrSEzaP2Z7ofbEEIx8",
  authDomain: "let-s-chat-78d79.firebaseapp.com",
  projectId: "let-s-chat-78d79",
  storageBucket: "let-s-chat-78d79.appspot.com",
  messagingSenderId: "529640592073",
  appId: "1:529640592073:web:49d1404d8f0f17f5307318",
};

// Initialize Firebase
let app;
if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app();
}

const db = app.firestore();
const auth = firebase.auth();

export { db, auth };
