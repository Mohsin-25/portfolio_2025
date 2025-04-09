// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDd6_aJtQ7eQFOqusaE_WIk8K0snkdQfww",
  authDomain: "react-portfolio-4e786.firebaseapp.com",
  projectId: "react-portfolio-4e786",
  storageBucket: "react-portfolio-4e786.appspot.com",
  messagingSenderId: "120037762722",
  appId: "1:120037762722:web:4e3b273b48d6dfc7a159fb",
  measurementId: "G-47J6L2B69V",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const db = getFirestore();
