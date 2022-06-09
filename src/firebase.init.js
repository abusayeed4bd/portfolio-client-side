// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCgOpfnAmzhAHRBxBI-u-xD9wyCnZIw0o8",
    authDomain: "abusayeed-ibrahim.firebaseapp.com",
    projectId: "abusayeed-ibrahim",
    storageBucket: "abusayeed-ibrahim.appspot.com",
    messagingSenderId: "566252184887",
    appId: "1:566252184887:web:f651511774e4249a35a6b2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;