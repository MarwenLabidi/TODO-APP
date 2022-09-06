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
                                        <Body />
                                </>
                        </ThemeProvider>
                </FocusedInputContextProvider>
        );
};

export default App;

//TODO? make the font decrease if its long
//TODO? use auto animate library
//TODO? add a custom hook useSound to play the sound when the task is completed or when  you add new task or chage theme
//TODO? add sound control buttom to the app
//TODO? do unit test and component test with Playwright
//TODO? add linter and eslint
//TODO? use github action for ci cd pipeline
//TODO? accesibility
//TODO? make it a progressive web app
