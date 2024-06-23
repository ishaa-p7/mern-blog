// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-blog-cdcae.firebaseapp.com",
  projectId: "mern-blog-cdcae",
  storageBucket: "mern-blog-cdcae.appspot.com",
  messagingSenderId: "36255689682",
  appId: "1:36255689682:web:967b447e04d6733c25360b"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);