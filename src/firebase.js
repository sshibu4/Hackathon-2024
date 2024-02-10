// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyDsi9-_CrxWKmj20cF7iw_Tf7kwt4mJr80",
  authDomain: "hackathon-project-f9861.firebaseapp.com",
  projectId: "hackathon-project-f9861",
  storageBucket: "hackathon-project-f9861.appspot.com",
  messagingSenderId: "757392042825",
  appId: "1:757392042825:web:ca676efc136d19b71e4898",
  measurementId: "G-EJ6EM296TK"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth()