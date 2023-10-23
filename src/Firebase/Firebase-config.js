// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCV4tGQ1-jsX4f22oe0RB_mGPRlEAuCQko",
  authDomain: "otpsm-d1d2d.firebaseapp.com",
  projectId: "otpsm-d1d2d",
  storageBucket: "otpsm-d1d2d.appspot.com",
  messagingSenderId: "291444729742",
  appId: "1:291444729742:web:e0856123e975521b61a6df",
  measurementId: "G-DGY49TM49C"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const authentication =getAuth(app)