// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD6Pc--BjHtofNdmUo7BobtOp63FC_PN7w",
  authDomain: "react-hackathon-1.firebaseapp.com",
  projectId: "react-hackathon-1",
  storageBucket: "react-hackathon-1.appspot.com",
  messagingSenderId: "22837875918",
  appId: "1:22837875918:web:e8531be5493cf85290ac9f",
  measurementId: "G-XZQ7EPK3Q1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app;