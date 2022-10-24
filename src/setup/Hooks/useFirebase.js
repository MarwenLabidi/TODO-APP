import { useEffect, useState } from "react";
import { db, provider, auth } from "../../utils/firebase";
import { collection, getDocs, doc, setDoc } from "firebase/firestore";
import { GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";

export const useFirebase = () => {
        const getDataFromFirebase = async (currentUser) => {
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
                docSnap.forEach((doc) => {
                        // console.log('doc1: ', doc);
                        result.push(doc.data());
                });
                qSnap.forEach((doc) => {
                        // console.log("doc2: ", doc);
                        // console.log('currentUser.uid: ', currentUser.uid);
                        if (doc.id === currentUser.email) {
                                result.push(Object.values(doc.data()));
                                // console.log('result: ', result);
                        }
                });
                return result;
        };
        const setTasksData = async (tasks, currentUser) => {
                // Add a new document in collection "cities"
                
                await setDoc(
                        doc(
                                db,
                                "DATA-COLLECTION",
                                "dZk8lNLGnOXQYnBVEeqG",
                                "TASKS",
                                currentUser.email 
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
        const setDataToFirebase = async (tasks, value, currentUser) => {
                await setTasksData(tasks, currentUser);
                await setThemeData(value);
        };
        const singInWithGoogle = async () => {
                signInWithPopup(auth, provider)
                        .then((result) => {
                                // This gives you a Google Access Token. You can use it to access the Google API.
                                const credential =
                                        GoogleAuthProvider.credentialFromResult(
                                                result
                                        );
                                const token = credential.accessToken;
                                // The signed-in user info.
                                const user = result.user;
                                // ...
                        })
                        .catch((error) => {
                                // Handle Errors here.
                                const errorCode = error.code;
                                const errorMessage = error.message;
                                // The email of the user's account used.
                                const email = error.customData.email;
                                // The AuthCredential type that was used.
                                const credential =
                                        GoogleAuthProvider.credentialFromError(
                                                error
                                        );
                                // ...
                        });
        };
        const signOutF = async () => {
                signOut(auth)
                        .then(() => {
                                // Sign-out successful.
                                console.log(`you signed out`);
                        })
                        .catch((error) => {
                                console.log("error: ", error);
                                // An error happened.
                        });
        };

        return [
                getDataFromFirebase,
                setDataToFirebase,
                singInWithGoogle,
                signOutF,
        ];
};
