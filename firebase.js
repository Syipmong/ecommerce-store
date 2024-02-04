// Import the functions you need from the SDKs you need
import {firebase} from 'firebase/app';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAI6-TkzIVAfxjKq-Qq6Z9oEibc1hFsLBo",
  authDomain: "dr-amina.firebaseapp.com",
  projectId: "dr-amina",
  storageBucket: "dr-amina.appspot.com",
  messagingSenderId: "988275447318",
  appId: "1:988275447318:web:934cf298f6cf4bf2bd8737",
  measurementId: "G-073K35HBX4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const firestore = firebase.firestore()
