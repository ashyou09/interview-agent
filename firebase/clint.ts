
import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDeOAEvrRUQRrVZ5f_YtTIYrU3gzyyGokE",
  authDomain: "prepwise-d9bab.firebaseapp.com",
  projectId: "prepwise-d9bab",
  storageBucket: "prepwise-d9bab.firebasestorage.app",
  messagingSenderId: "536380822765",
  appId: "1:536380822765:web:8e313cf234a62d177f68e4",
  measurementId: "G-GP9GRQ1J78"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
export const auth = getAuth(app);
export const db = getFirestore(app);