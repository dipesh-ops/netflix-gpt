// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyApM1kcCc-Xx-L1oLAGKQ4V4W5AG2pNXCc",
  authDomain: "netflixgpt-13a21.firebaseapp.com",
  projectId: "netflixgpt-13a21",
  storageBucket: "netflixgpt-13a21.firebasestorage.app",
  messagingSenderId: "191242658154",
  appId: "1:191242658154:web:e9b3ebcf949e475d72c513",
  measurementId: "G-W6Q5PM1EVY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);