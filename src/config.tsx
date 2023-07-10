// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAj1WuRBgli6srEqC2Itd71H_xAptILN0o",
  authDomain: "pitrogreensystem.firebaseapp.com",
  projectId: "pitrogreensystem",
  storageBucket: "pitrogreensystem.appspot.com",
  messagingSenderId: "6129272287",
  appId: "1:6129272287:web:edf84c23ff8bf59d5a306a",
  measurementId: "G-EWN3V5QBFK"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);