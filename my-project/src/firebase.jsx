import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { getFirestore } from "firebase/firestore";

const  KEY = import.meta.env.VITE_FIREBASE_API_KEY;
const  AUTH = import.meta.env.VITE_AUTHDOMAIN;
const  ID = import.meta.env.VITE_PROJECTID;
const  STORAGEBUCKET = import.meta.env.VITE_STORAGEBUCKET;
const  SENDER_ID = import.meta.env.VITE_MESSAGING_SENDER_ID;
const  APP_ID = import.meta.env.VITE_APP_ID
const  MEASUREMENT_ID = import.meta.env.VITE_MEASUREMENT_ID

const firebaseConfig = {
 apiKey: KEY,
  authDomain: AUTH,
  projectId: ID,
  storageBucket: STORAGEBUCKET,
  messagingSenderId: SENDER_ID,
  appId: APP_ID,
  measurementId: MEASUREMENT_ID
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
const db = getFirestore(app);
export { auth, googleProvider, db };