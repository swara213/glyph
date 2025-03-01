// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBfoUH4_DNNZHhG5LRBmsBEm_tR5RtqVcE",
  authDomain: "mern-book-inventory-53ed9.firebaseapp.com",
  projectId: "mern-book-inventory-53ed9",
  storageBucket: "mern-book-inventory-53ed9.appspot.com",
  messagingSenderId: "239620225070",
  appId: "1:239620225070:web:99434b08b729a2507c07bf"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth =  getAuth(app);
export const db = getFirestore(app); // Add this line
