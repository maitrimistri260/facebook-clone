import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBUjzEg96HpYzByfVOWtSUF-WUpYcg2qNU",
  authDomain: "facebook-4bf29.firebaseapp.com",
  projectId: "facebook-4bf29",
  storageBucket: "facebook-4bf29.appspot.com",
  messagingSenderId: "110845458633",
  appId: "1:110845458633:web:6904e419f9285bf1943518",
  measurementId: "G-MRLL9KRXZW"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();



export {auth, provider};
export default db;