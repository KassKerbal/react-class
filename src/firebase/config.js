// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCs83uJGqOHFXbpwjRn2bi6OVN4fVUubFA",
  authDomain: "coderhouse-b746f.firebaseapp.com",
  projectId: "coderhouse-b746f",
  storageBucket: "coderhouse-b746f.appspot.com",
  messagingSenderId: "395043266320",
  appId: "1:395043266320:web:2cd245823511df60114f95",
  measurementId: "G-NRD8D9MRXZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)