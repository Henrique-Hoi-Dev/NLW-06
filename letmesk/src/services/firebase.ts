import firebase from 'firebase/app';

import 'firebase/auth';
import 'firebase/database';

// const firebaseConfig = {
//   apiKey: process.env.REACT_APP_API_KEY,
//   authDomain: process.env.REACT_APP_AUTH_DOMAIN,
//   databaseURL: process.env.REACT_APP_DATABASE_URL,
//   projectId: process.env.REACT_APP_PROJECT_ID,
//   storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
//   messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
//   appId: process.env.REACT_APP_APP_ID,
// };

const firebaseConfig = {
  apiKey: 'AIzaSyDY6M4wSGeez_6lltWOBxLEY1wdgskB_hw',
  authDomain: 'letmeask-9bb3c.firebaseapp.com',
  databaseURL: 'https://letmeask-9bb3c-default-rtdb.firebaseio.com',
  projectId: 'letmeask-9bb3c',
  storageBucket: 'letmeask-9bb3c.appspot.com',
  messagingSenderId: '691554413194',
  appId: '1:691554413194:web:205e44d47b3f637cd21b73',
};

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const database = firebase.database();

export { firebase, auth, database };
