import { createContext, useState, useEffect } from "react";
export const authFireBaseContext = createContext();
import { getAuth, onAuthStateChanged } from "firebase/auth";

export const AuthFireBaseContextProvider = ({ children }) => {
        const [currentUser, setCurrentUser] = useState(null);
        const auth = getAuth();

        useEffect(() => {
                onAuthStateChanged(auth, (user) => {
                        if (user) {
                                // User is signed in,
                                setCurrentUser({
                                        displayName: user.displayName,
                                        photoURL: user.photoURL,
                                });
                        } else {
                                // User is signed out
                                setCurrentUser(null);
                        }
                });
        });
        return (
                <authFireBaseContext.Provider value={[currentUser, setCurrentUser]}>
                        {children}
                </authFireBaseContext.Provider>
        );
};
