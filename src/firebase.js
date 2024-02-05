// firebase.js

import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
   apiKey: "AIzaSyAI6-TkzIVAfxjKq-Qq6Z9oEibc1hFsLBo",
  authDomain: "dr-amina.firebaseapp.com",
  projectId: "dr-amina",
  storageBucket: "dr-amina.appspot.com",
  messagingSenderId: "988275447318",
  appId: "1:988275447318:web:934cf298f6cf4bf2bd8737",
  measurementId: "G-073K35HBX4"
};

const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);

export { firestore };



  // apiKey: "AIzaSyAI6-TkzIVAfxjKq-Qq6Z9oEibc1hFsLBo",
  // authDomain: "dr-amina.firebaseapp.com",
  // projectId: "dr-amina",
  // storageBucket: "dr-amina.appspot.com",
  // messagingSenderId: "988275447318",
  // appId: "1:988275447318:web:934cf298f6cf4bf2bd8737",
  // measurementId: "G-073K35HBX4"


