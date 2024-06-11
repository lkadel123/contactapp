// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBSDude-bSZT2UTRAmcRzhDL2Ds-ABmQbo",
  authDomain: "contact-app-5158f.firebaseapp.com",
  projectId: "contact-app-5158f",
  storageBucket: "contact-app-5158f.appspot.com",
  messagingSenderId: "393938008785",
  appId: "1:393938008785:web:7e9a43c672821ab65023f0"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);