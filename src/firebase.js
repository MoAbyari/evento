/* eslint-disable */
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore ,  collection } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB5WbOzcAcqiFILvclRgy9rRi7FnoxsXCI",
  authDomain: "evento-62696.firebaseapp.com",
  projectId: "evento-62696",
  storageBucket: "evento-62696.appspot.com",
  messagingSenderId: "322017023577",
  appId: "1:322017023577:web:e6d5ad309827ba7a210348",
  measurementId: "G-FWZF3HRQCS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app)
const usersColRef = collection(db, 'users')
export default usersColRef