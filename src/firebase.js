// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDPI7o9dWn58v6rkpa-1iaSEBEz_vzQZGA",
  authDomain: "todo-app-2857c.firebaseapp.com",
  projectId: "todo-app-2857c",
  storageBucket: "todo-app-2857c.appspot.com",
  messagingSenderId: "942800675011",
  appId: "1:942800675011:web:9019592646c93effab8276"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)