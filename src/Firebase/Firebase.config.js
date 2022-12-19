// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCvhkJgH2Hcd24BTfl2O-HhA1Z1gn_2bEo",
    authDomain: "antituity-project.firebaseapp.com",
    projectId: "antituity-project",
    storageBucket: "antituity-project.appspot.com",
    messagingSenderId: "781794170142",
    appId: "1:781794170142:web:7c9e80abc919738aaae50f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;