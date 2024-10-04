// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyARJvSgbiOBKQwcOh5pYfX5xlRkKs1bLHA",
  authDomain: "member-management-91b45.firebaseapp.com",
  projectId: "member-management-91b45",
  storageBucket: "member-management-91b45.appspot.com",
  messagingSenderId: "406877946374",
  appId: "1:406877946374:web:e4c690ce0603ea04e1b987",
  measurementId: "G-JQ1PS81Z2Z"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const storage = getStorage(app) ; 
const googleProvider = new GoogleAuthProvider();

export { storage, googleProvider };