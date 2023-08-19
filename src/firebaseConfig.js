// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD05IN0u6LIzFCldJDmdtwF_36MZ3qV1YM",
  authDomain: "portfolio-rishavanand.firebaseapp.com",
  projectId: "portfolio-rishavanand",
  storageBucket: "portfolio-rishavanand.appspot.com",
  messagingSenderId: "1008191903292",
  appId: "1:1008191903292:web:23f175d4d78324ab8d5539",
  measurementId: "G-51QPVX645S"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);