import { createContext, useState, useEffect } from "react";
export const authFireBaseContext = createContext();
import { getAuth, onAuthStateChanged } from "firebase/auth";

export const AuthFireBaseContextProvider = ({ children }) => {
        const [currentUser, setCurrentUser] = useState(null);
        const auth = getAuth();

        useEffect(() => {
                onAuthStateChanged(auth, (user) => {
                        if (user) {
                                // console.log('auth: ', auth.currentUser);
                                auth.currentUser
                                        .getIdTokenResult()
                                        .then((idTokenResult) => {
                                                let metaMaskAccount =
                                                        idTokenResult.claims
                                                                .metaMaskAccount;
                                                console.log(
                                                        "metaMaskAccount: ",
                                                        metaMaskAccount
                                                );

                                                let email = user.email;
                                                if (!email) {
                                                        email = metaMaskAccount;
                                                }
                                                // User is signed in,
                                                setCurrentUser({
                                                        displayName:
                                                                user.displayName,
                                                        photoURL: user.photoURL,
                                                        email,
                                                });
                                        })
                                        .catch((error) => {
                                                console.log(error);
                                        });
                        } else {
                                // User is signed out
                                setCurrentUser(null);
                        }
                });
        }, []);
        return (
                <authFireBaseContext.Provider
                        value={[currentUser, setCurrentUser]}>
                        {children}
                </authFireBaseContext.Provider>
        );
};
