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
//FIXME? make the scrol snap and evry scrol with spesific amount of pixels to hide all the task and fix the scroll when you add task too
//FIXME? change the opacity of the task if its not fully display
//FIXME?add grow and shrink animation when you check or uncheck the check box and animation to the task
//TODO? use framer motion for animations: a nimate ad delete task shake input when you write
//TODO? input shaking  animation
//TODO? MOVE MAIN SECTION A LITLE BIT TO THE TOP
// TODO? DARK MODE ANIMATION SUN GO DOWN moon come from the top 
//TODO? costum cursor
//TODO? drag and drop funtionality fom one place
//TODO? add a custom hook useSound to play the sound when the task is completed or when  you add new task or chage theme
//TODO? add sound control buttom to the app https://www.youtube.com/watch?v=wzWcaLkCy1w
//TODO? accesibility
//TODO? add linter and eslint
//TODO? do unit test and component test with Playwright
//TODO? use github action for ci cd pipeline
//TODO? make it a progressive web apppp and add instal button
//TODO? enable offline cache firestore : https://cloud.google.com/firestore/docs/manage-data/enable-offline#:~:text=Firestore%20supports%20offline%20data%20persistence,and%20query%20the%20cached%20data.
