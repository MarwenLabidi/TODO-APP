import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


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
// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);
