// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCjsiuLRKrAFQLwtKE6rR0YLtXz0j1xFnU",
    authDomain: "independent-sports-photography.firebaseapp.com",
    projectId: "independent-sports-photography",
    storageBucket: "independent-sports-photography.appspot.com",
    messagingSenderId: "419447312130",
    appId: "1:419447312130:web:4f1c15b2553537d45d3c1b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;