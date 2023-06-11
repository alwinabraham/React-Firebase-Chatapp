// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC5LzywEMzpYzVXdpW2V3ryQiBB_Y4kYgo",
  authDomain: "fir-chatapp-42e3b.firebaseapp.com",
  projectId: "fir-chatapp-42e3b",
  storageBucket: "fir-chatapp-42e3b.appspot.com",
  messagingSenderId: "957462110462",
  appId: "1:957462110462:web:f583be6c9f10ca0f4b45af"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app)