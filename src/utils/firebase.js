// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD-SyKvPlWykXJJzeq7v7eH8Lt3Rxj2XpQ",
  authDomain: "netflixgpt-b2dcb.firebaseapp.com",
  projectId: "netflixgpt-b2dcb",
  storageBucket: "netflixgpt-b2dcb.firebasestorage.app",
  messagingSenderId: "996118473133",
  appId: "1:996118473133:web:8cac447c545d5e04441924",
  measurementId: "G-FT53YEPDHW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();