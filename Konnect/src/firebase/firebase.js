import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCBngW8qX86bpKKBSM6ZTFETMzcKxcN1XI",
  authDomain: "konnect-49dac.firebaseapp.com",
  projectId: "konnect-49dac",
  storageBucket: "konnect-49dac.appspot.com",
  messagingSenderId: "132740175081",
  appId: "1:132740175081:web:0dfca423885d3cc1664c78"
  };

const app = initializeApp(firebaseConfig);
const auth = getAuth(app)



export { app, auth };
