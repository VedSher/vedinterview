import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";



const firebaseConfig = {
  apiKey: "AIzaSyA7duJqlTkSP6wV52fWT5GhLMtdJD7xYXM",
  authDomain: "vedinterview-3067e.firebaseapp.com",
  projectId: "vedinterview-3067e",
  storageBucket: "vedinterview-3067e.firebasestorage.app",
  messagingSenderId: "718810188346",
  appId: "1:718810188346:web:4a2b6f907fef971ea74303",
  measurementId: "G-QLNBQ6JKFW"
};

const app = !getApps.length ? initializeApp(firebaseConfig) : getApp();


export const auth = getAuth(app);
export const db = getFirestore(app);