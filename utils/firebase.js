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
    apiKey: "AIzaSyBKoW1yry__OFzpbRc3to7kF3dvNHhj8MA",
    authDomain: "remd-2b719.firebaseapp.com",
    projectId: "remd-2b719",
    storageBucket: "remd-2b719.appspot.com",
    messagingSenderId: "298037604089",
    appId: "1:298037604089:web:7e292dcf9c6bfa3580fc28"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore(app);
const storage = getStorage(app);
const auth = getAuth(app);

export { app, db, storage, auth };
