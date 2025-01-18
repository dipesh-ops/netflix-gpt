// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyABCOSAVIcGLloJRLb17_WS3fFcB2fSef0",
  authDomain: "netflixgpt-2025.firebaseapp.com",
  projectId: "netflixgpt-2025",
  storageBucket: "netflixgpt-2025.firebasestorage.app",
  messagingSenderId: "140854384768",
  appId: "1:140854384768:web:e91c3f4ef91d3b75692e65",
  measurementId: "G-143N17W70E"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);