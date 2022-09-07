import React from "react";
import Header from "./components/header";
import Body from "./components/body";
import GlobalStyle from "./setup/styled_components/GlobalStyle";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "./setup/styled_components/theme.js";
import { useDarkMode } from "./setup/Hooks/useDarkMode.js";
import { FocusedInputContextProvider } from "./setup/context/focusedInputContext";
const App = () => {
        const [theme, toggleTheme] = useDarkMode();
        const themeMode = theme === "light" ? lightTheme() : darkTheme();
        return (
                <FocusedInputContextProvider>
                        <ThemeProvider theme={themeMode}>
                                <>
                                        <GlobalStyle />
                                        <Header toggleTheme={toggleTheme} />
                                        <Body theme={theme} />
                                </>
                        </ThemeProvider>
                </FocusedInputContextProvider>
        );
};

export default App;

//TODO? use auto animate library
//TODO? animate of shaking and sound and practical effect when  you type in the input
//TODO? add a custom hook useSound to play the sound when the task is completed or when  you add new task or chage theme
//TODO? add sound control buttom to the app
//TODO? do unit test and component test with Playwright
//TODO? add linter and eslint
//TODO? use github action for ci cd pipeline
//TODO? accesibility
//TODO? make it a progressive web apppp
//TODO? enable offline cache firestore : https://cloud.google.com/firestore/docs/manage-data/enable-offline#:~:text=Firestore%20supports%20offline%20data%20persistence,and%20query%20the%20cached%20data.
