// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCh6luB-fyEyAG-sVOk258QcMQSEEM0h-o",
  authDomain: "photowallet-e58b8.firebaseapp.com",
  projectId: "photowallet-e58b8",
  storageBucket: "photowallet-e58b8.firebasestorage.app",
  messagingSenderId: "284057091785",
  appId: "1:284057091785:web:07ee88fd8ae5dd4b201718",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
