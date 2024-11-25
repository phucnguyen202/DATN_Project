// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCsFh9CpAiFjv4rPM_HQNoSxI5upYTw0ZQ",
  authDomain: "project-datn-e0b31.firebaseapp.com",
  projectId: "project-datn-e0b31",
  storageBucket: "project-datn-e0b31.firebasestorage.app",
  messagingSenderId: "121973028165",
  appId: "1:121973028165:web:b5ac873124c5fd29fa7a2c",
  measurementId: "G-H2X4NWQXVZ"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app;