import firebase from 'firebase/app'; // <-- This must be first
import 'firebase/auth';
import 'firebase/storage';
import 'firebase/firestore';
import { useEffect, useState } from 'react';


export const useAuth = () => {
  const [token] = useState();
  console.log("hello world");
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

  console.log("work");
  firebase.auth()
  .createCustomToken("uid")
  .then((customToken) => {
    token = customToken;
    console.log(customToken);
    // Send token back to client
  })
  .catch((error) => {
    console.log('Error creating custom token:', error);
  });

return token;
}

export const fb = {
  
};