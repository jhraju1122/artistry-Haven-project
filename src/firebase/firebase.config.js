 // Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

 // Your web app's Firebase configuration

const firebaseConfig = {

  apiKey: "AIzaSyDvd8eF1NY1qybHY0FYrH3gZcShCQDWMtA",

  authDomain: "artistry-haven-project-d7ec5.firebaseapp.com",

  projectId: "artistry-haven-project-d7ec5",

  storageBucket: "artistry-haven-project-d7ec5.firebasestorage.app",

  messagingSenderId: "1085941496696",

  appId: "1:1085941496696:web:5bd0f021d9b07ca1cce68d"

};



// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)
export default auth;