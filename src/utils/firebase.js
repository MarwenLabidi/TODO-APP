import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


// TODO? USE VITE ENV VARIABLE
const firebaseConfig = {
        apiKey: "AIzaSyDt_CUl1JWxzr1jrg3p1oMKKAj11hSzqiE",
        authDomain: "todo-app-97ae2.firebaseapp.com",
        projectId: "todo-app-97ae2",
        storageBucket: "todo-app-97ae2.appspot.com",
        messagingSenderId: "540711457418",
        appId: "1:540711457418:web:e048623c4b7f5e90835373",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);