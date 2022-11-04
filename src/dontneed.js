//import firebase from 'firebase/app'; // <-- This must be first
import 'firebase/auth';
import 'firebase/storage';
import 'firebase/firestore';

try {
  firebase.initializeApp({
    apiKey: "AIzaSyCwYCjJs1ORktVIG85LVGuLmHDQKFlEJZ0",
    authDomain: "hermes-superchat.firebaseapp.com",
    databaseURL: "https://hermes-superchat-default-rtdb.firebaseio.com",
    projectId: "hermes-superchat",
    storageBucket: "hermes-superchat.appspot.com",
    messagingSenderId: "2041104259",
    appId: "1:2041104259:web:4164082fcdae22cc2ad8b6"
  });
} catch (error) {
  if (!/already exists/u.test(error.message)) {
    console.error('Firebase admin initialization error', error.stack);
  }
}

// Passing off firebase.auth() instead of firebase.auth
// allows us to share the same instance of Firebase throughout
// the entire app whenever we import it from here.

export const fb = {
  auth: firebase.auth(),
  storage: firebase.storage(),
  firestore: firebase.firestore(),
};