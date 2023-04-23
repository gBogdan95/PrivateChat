import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: "privatechat-3e9fe.firebaseapp.com",
    projectId: "privatechat-3e9fe",
    storageBucket: "privatechat-3e9fe.appspot.com",
    messagingSenderId: "938752127735",
    appId: "1:938752127735:web:40fe94030afb6ab14d59f2"
  };

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore(app);
