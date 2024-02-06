// firebase.js
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';
import 'firebase/compat/storage';
// import { useEffect, useState } from 'react';

// require('dotenv').config();
const firebaseConfig = {
   apiKey: "AIzaSyAI6-TkzIVAfxjKq-Qq6Z9oEibc1hFsLBo",
  authDomain: "dr-amina.firebaseapp.com",
  projectId: "dr-amina",
  storageBucket: "dr-amina.appspot.com",
  messagingSenderId: "988275447318",
  appId: "1:988275447318:web:934cf298f6cf4bf2bd8737",
  measurementId: "G-073K35HBX4"
};

firebase.initializeApp(firebaseConfig);



export const auth = firebase.auth();
export const firestore = firebase.firestore();
export const storage = firebase.storage();

// export const useAuth = () => {
//   const [currentUser, setCurrentUser] = useState(null);

//   useEffect(() => {
//     const unsubscribe = firebase.auth().onAuthStateChanged(user => {
//       setCurrentUser(user);
//     });

//     return () => unsubscribe();
//   }, []);

//   return { currentUser };
// };

export default firebase;



  // apiKey: "AIzaSyAI6-TkzIVAfxjKq-Qq6Z9oEibc1hFsLBo",
  // authDomain: "dr-amina.firebaseapp.com",
  // projectId: "dr-amina",
  // storageBucket: "dr-amina.appspot.com",
  // messagingSenderId: "988275447318",
  // appId: "1:988275447318:web:934cf298f6cf4bf2bd8737",
  // measurementId: "G-073K35HBX4"


