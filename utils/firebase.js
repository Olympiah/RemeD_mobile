// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDlx_mSK2G_FGXLduPxJjEGv9BzcZTCRQ8",
    authDomain: "remed-mobile-2.firebaseapp.com",
    projectId: "remed-mobile-2",
    storageBucket: "remed-mobile-2.appspot.com",
    messagingSenderId: "323902630557",
    appId: "1:323902630557:web:2388358f1ec8df73d78274"
  };

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore(app);
const storage = getStorage();
const auth = getAuth(app);

export { app, db, storage, auth };
