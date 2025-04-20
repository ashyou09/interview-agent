
import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDnkWZWNOmceTbr_6sfMDWhtg7LY_k6f8k",
  authDomain: "prepwise-b1669.firebaseapp.com",
  projectId: "prepwise-b1669",
  storageBucket: "prepwise-b1669.firebasestorage.app",
  messagingSenderId: "128487773829",
  appId: "1:128487773829:web:8a4d63ba853c4b6703bbec",
  measurementId: "G-R8T84ZX10L"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
export const auth = getAuth(app);
export const db = getFirestore(app);