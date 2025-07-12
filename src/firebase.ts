import { initializeApp, getApps, getApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyD1rhpzvC2uxUOZbdxaYA6ZAwRLWmxLPno",
  authDomain: "rewear-7d537.firebaseapp.com",
  projectId: "rewear-7d537",
  storageBucket: "rewear-7d537.firebasestorage.app",
  messagingSenderId: "536883489809",
  appId: "1:536883489809:web:03b10a445c84ad837c55b0",
  measurementId: "G-3BK21TVCDM"
};

const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApp();
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
export const db = getFirestore(app);
export const storage = getStorage(app);
export default app;