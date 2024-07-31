// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore,collection } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyANZ6fpp-GMYeviVC-l8TVen7sB-vvX6fs",
  authDomain: "konnect-2-8536d.firebaseapp.com",
  projectId: "konnect-2-8536d",
  storageBucket: "konnect-2-8536d.appspot.com",
  messagingSenderId: "1092463425232",
  appId: "1:1092463425232:web:4fc4ccf87f3040f60b10d5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db= getFirestore(app)
export const rolesCollection=collection(db,"users")