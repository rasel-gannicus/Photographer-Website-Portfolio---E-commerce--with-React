
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.REACT_APP_apiKey,
  authDomain: "photographer-portfolio-98b67.firebaseapp.com",
  projectId: "photographer-portfolio-98b67",
  storageBucket: "photographer-portfolio-98b67.appspot.com",
  messagingSenderId: "1024891189118",
  appId: "1:1024891189118:web:c824c8daa501d67a4d252f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;