import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { GoogleAuthProvider,getAuth } from "firebase/auth";


const firebaseConfig = {
        apiKey:import.meta.env.VITE_API_KEY ,
        authDomain: "todo-app-97ae2.firebaseapp.com",
        projectId: "todo-app-97ae2",
        storageBucket: "todo-app-97ae2.appspot.com",
        messagingSenderId: "540711457418",
        appId:import.meta.env.VITE_APP_ID ,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const provider = new GoogleAuthProvider();
export const auth = getAuth();

