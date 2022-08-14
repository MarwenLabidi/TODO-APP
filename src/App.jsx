import React from "react";
import Header from "./components/header/Header";
import Body from "./components/body/Body";
import GlobalStyle from "./setup/styled_components/GlobalStyle";
import {DarkModeContext} from "./setup/context/DarkModeContext";
//TODO create custom hooks useDarkMode
//get the system prefer theme and set it to local storage
//update the theme in the context from the local storage
// create the functionality to toggle the theme using theme provider
const App = () => {
    return (
        <>
            <GlobalStyle />
            <Header />
            <Body />
        </>
    );
};

export default App;
