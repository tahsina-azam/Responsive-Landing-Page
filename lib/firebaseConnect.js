// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCFHZ4dn3lxnG2TXJAJUuiCy5sLLCsRt4Y",
  authDomain: "responsive-landing-page-77585.firebaseapp.com",
  projectId: "responsive-landing-page-77585",
  storageBucket: "responsive-landing-page-77585.appspot.com",
  messagingSenderId: "462690162053",
  appId: "1:462690162053:web:68a867154870e07501e0ec",
  measurementId: "G-GKYJ4ZKGRN",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const imgDb = getStorage(app);

export { imgDb };
