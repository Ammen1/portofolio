// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-blog-cabf1.firebaseapp.com",
  projectId: "mern-blog-cabf1",
  storageBucket: "mern-blog-cabf1.appspot.com",
  messagingSenderId: "625503574436",
  appId: "1:625503574436:web:b56584bd440cc9d6990931",
  measurementId: "G-ZYSZEPD53M",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
