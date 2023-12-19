// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBfS9vpOM-fYE7zlCeDCYSBUAGcTooaBxk",
    authDomain: "capogrossi-restaurant-data.firebaseapp.com",
    projectId: "capogrossi-restaurant-data",
    storageBucket: "capogrossi-restaurant-data.appspot.com",
    messagingSenderId: "43154210021",
    appId: "1:43154210021:web:f9d8b6c020e668ae13680c",
    measurementId: "G-XP5JX3B3S6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);