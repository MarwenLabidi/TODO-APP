import { useEffect, useState } from "react";
import { db } from "../utils/firebase";
import { collection, getDocs, doc, setDoc} from "firebase/firestore";

export const useFirebase = () => {
        const [Data, setData] = useState({});

        const getDataFromFirebase = async () => {
                const result = [];
                const collectionRef = collection(db, "DATA-COLLECTION");
                const docSnap = await getDocs(collectionRef);
                const subColRef = collection(
                        db,
                        "DATA-COLLECTION",
                        "dZk8lNLGnOXQYnBVEeqG",
                        "TASKS"
                );
                const qSnap = await getDocs(subColRef);
                // docSnap.then((data) => {
                docSnap.forEach((doc) => {
                        result.push(doc.data());
                });
                // });
                // qSnap.then((data) => {
                qSnap.forEach((doc) => {
                        result.push(Object.values(doc.data()));
                });
                // });
                return result;
        };
        const setTasksData = async (tasks) => {
                // Add a new document in collection "cities"
                await setDoc(
                        doc(
                                db,
                                "DATA-COLLECTION",
                                "dZk8lNLGnOXQYnBVEeqG",
                                "TASKS",
                                "ikSuf7C2BtzgQzgQkSBj"
                        ),
                        {
                                0: tasks, // array
                        }
                );
        };
        const setThemeData = async (value) => {
                // Add a new document in collection "cities"
                await setDoc(
                        doc(db, "DATA-COLLECTION", "dZk8lNLGnOXQYnBVEeqG"),
                        {
                                DarkMode: value,
                        }
                );
        };
};
