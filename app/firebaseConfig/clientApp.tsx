// Import the functions you need from the SDKs you need
import "firebase/firestore";
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
    authDomain: "ai-customer-support-e18ad.firebaseapp.com",
    projectId: "ai-customer-support-e18ad",
    storageBucket: "ai-customer-support-e18ad.appspot.com",
    messagingSenderId: "668067155730",
    appId: "1:668067155730:web:d3ef573afa14d66e22edcb"
  };


// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
