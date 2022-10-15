import Header from "./components/header";
import Body from "./components/body";
import GlobalStyle from "./setup/styled_components/GlobalStyle";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "./setup/styled_components/theme.js";
import { useDarkMode } from "./setup/Hooks/useDarkMode.js";
import { FocusedInputContextProvider } from "./setup/context/focusedInputContext";
import Cursor from "./components/cursor/index";
import { useRef } from "react";
import useElementPosition from "./setup/Hooks/useElemetPosition";
import { isBrowser } from "react-device-detect";
import { useState } from "react";

const App = () => {
        const [theme, toggleTheme] = useDarkMode();
        const themeMode = theme === "light" ? lightTheme() : darkTheme();
        const refMain = useRef();
        const refDarkModeButton = useRef();
        const startMainPostion = useElementPosition(refMain);
        const[mainPostion,setMainPostion]=useState(startMainPostion)
        const darkModeButtonPosition = useElementPosition(refDarkModeButton);
        const refFooter = useRef();
        const refLoginButton = useRef();
        const refMenuButton = useRef();
        const refContainerForMainFooter = useRef({
                refMain,
                refFooter,
                refMenuButton,
        });
        const refContainerForLoginDarkModeButton = useRef({
                refDarkModeButton,
                refLoginButton,
        });
        const footerPosition = useElementPosition(refFooter);
        const loginButtonPosition = useElementPosition(refLoginButton);
        const menuButtonPosition = useElementPosition(refMenuButton);

        return (
                <FocusedInputContextProvider>
                        <ThemeProvider theme={themeMode}>
                                <>
                                        <GlobalStyle />
                                        {isBrowser && (
                                                <Cursor
                                                        mainPostion={
                                                                mainPostion
                                                        }
                                                        darkModeButtonPosition={
                                                                darkModeButtonPosition
                                                        }
                                                        footerPosition={footerPosition}
                                                        loginButtonPosition={loginButtonPosition}
                                                        menuButtonPosition={menuButtonPosition}
                                                />
                                        )}
                                        <Header
                                                icon={theme}
                                                toggleTheme={toggleTheme}
                                                ref={
                                                        refContainerForLoginDarkModeButton
                                                }
                                        />
                                        <Body
                                                theme={theme}
                                                ref={refContainerForMainFooter}
                                                setMainPostion={setMainPostion}
                                        />
                                </>
                        </ThemeProvider>
                </FocusedInputContextProvider>
        );
};

export default App;

//TODO? login firebase
//-[]when you first enter a pop up showed to you tell you to log in and the benifits or using local storage
//-[] there is an overlay when you show the pop up or the modal and it depent on the theme the color of overlay
//-[] FIXME : firebase make the document of Tasks Collection Depend of the userName or userId
//-[] look at the figma button the copy css
//-[]add a condition on the login button to show only if your not loged in the profile photo vice versa
//-[]when you click log in pop up showen to u and log in google metamask
//-[]when you log in the log in butto change to photo a name than log out for mobile its only photo and when youclick it it show you a name and log out 
//-[]when you log in and there is data in the app pop up showed to you if you wanna move the data to firestore to the account
//-[]create the security rules of firebase
//-[] meta  mask auth but you should use costom auth to make it interact with firestore https://firebase.google.com/docs/auth/web/custom-auth                           run the admin sdk in a cloud function firebase https://www.youtube.com/watch?v=8JVmWtJLqNU                                             https://firebase.google.com/products/functions?gclid=CjwKCAjwqJSaBhBUEiwAg5W9pw9BM1wdVvmwYFPrW1nA1yayekAP57gM2TTalfNNb-bCiUIgv1l4yBoCxMgQAvD_BwE&gclsrc=aw.ds
//TODO? voice controll feature
//-[]Search how to use audio to read text look for a hook or something
//-[]Use speech recognition hooks
//-[]After 2 second op mic and add text to state
//-[]Useeffect on that state side the useeffect split the text in a table
//-[]Create array of labels rank one and lane rank two
//-[]Rank one : switch ,write,add, check ,all, complete,active,delete, show menu
//-[]Rank two: theme ,task,task,taskcontent,menu
//-[]When you execute write note the app tell you what is your note please use speech api to make text sound
//-[]Use sound effect when you start recording and when you stop
//-[]Inside the use effect check if there is a word from the rank ne array::( if there is check the second rank :: if there is execute action else return
//-[]Create amd action function you just tell her the name of the acttion that's it
//-[]Create every action in a function
//-[]At the end of the use effect rart record again and make the app said task done
//TODO? do unit test and component test with Playwright
//TODO? use github action for ci cd pipeline
//TODO? make it a progressive web apppp and add instal button
//TODO? enable offline cache firestore : https://cloud.google.com/firestore/docs/manage-data/enable-offline#:~:text=Firestore%20supports%20offline%20data%20persistence,and%20query%20the%20cached%20data.
//TODO? accesibility
//-[] Add hiden Link to go to the tasks

//TODO? add linter and eslint by using the extention vscode

//TODO? use lihthosuse to make it faster
//TODO? use mesure Measure page quality tools to make it faster too
//TODO? add gif  mobile version and laptop version to README
//TODO? add screenshot from light house and mesure page to README
