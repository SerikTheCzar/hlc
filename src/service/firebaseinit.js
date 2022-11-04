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