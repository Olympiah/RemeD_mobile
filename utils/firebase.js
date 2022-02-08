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
    apiKey: "AIzaSyAtHCPixTqGW6PHz1bs7Blr8_vdQeS-rUo",
    authDomain: "remed-mobile.firebaseapp.com",
    projectId: "remed-mobile",
    storageBucket: "remed-mobile.appspot.com",
    messagingSenderId: "1016753773286",
    appId: "1:1016753773286:web:8151a9f95879f6e545f927",
    measurementId: "G-TDJFXDENMC",
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore(app);
const storage = getStorage();
const auth = getAuth(app);

export { app, db, storage, auth };
