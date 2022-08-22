import React from "react";
import Header from "./components/header";
import Body from "./components/body";
import GlobalStyle from "./setup/styled_components/GlobalStyle";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "./setup/styled_components/theme.js";
import { useDarkMode } from "./setup/Hooks/useDarkMode.js";

const App = () => {
        const [theme, toggleTheme] = useDarkMode();
        const themeMode = theme === "light" ? lightTheme() : darkTheme();
        return (
                <ThemeProvider theme={themeMode}>
                        <>
                                <GlobalStyle />
                                <Header toggleTheme={toggleTheme} />
                                <Body />
                        </>
                </ThemeProvider>
        );
};

export default App;

//TODO? save task in the firebase and in  the local storage if there is no internet and if the internet is back send data from local storage and clear local storage and get the data from fire base or local storage if there is no internet
//TODO? create a custom hook useFirebase to get the data from firebase and save it in the local storage if there is no internet
//TODO? create a custom hook useLocalStorage to get the data from local storage and save it in the firebase if there is no internet
//TODO? use two image if there is no internet if there is internet fetch to unsplash api
//TODO? change the image when  you change the theme
//TODO? use auto animate library
//TODO? add a custom hook useSound to play the sound when the task is completed or when  you add new task or chage theme
//TODO? add sound control buttom to the app
//TODO? add motion control buttom to the app to clear all the data : use tensorflow model
//TODO? add a custom hook useTensorflow to use the tensorflow model to clear all the data
//TODO? make it a progressive web app
//TODO? do unit test and component test with Playwright
//TODO? use github action for ci cd pipeline
//TODO? add linter and eslint
//TODO? accesibility
