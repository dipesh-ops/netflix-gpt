// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBDz9Gi1CX9d7WJoyTiQJq5lw5EnCoIvYI",
  authDomain: "netflix-gpt-f86f9.firebaseapp.com",
  projectId: "netflix-gpt-f86f9",
  storageBucket: "netflix-gpt-f86f9.firebasestorage.app",
  messagingSenderId: "1001924923208",
  appId: "1:1001924923208:web:1d04e2984e165e35b7ed7d",
  measurementId: "G-7K5NPS3NG9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);