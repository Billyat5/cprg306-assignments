// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
 
// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCA_cd1pnGK7kfF5DnwChbJSTYiL90xaqQ",
    authDomain: "cprg306-assignment1.firebaseapp.com",
    projectId: "cprg306-assignment1",
    storageBucket: "cprg306-assignment1.appspot.com",
    messagingSenderId: "1005773561007",
    appId: "1:1005773561007:web:4acd599c4bc7d8d430085a",
    measurementId: "G-WH7CF0HCV4"
  };
 
// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

export const db = getFirestore(app);