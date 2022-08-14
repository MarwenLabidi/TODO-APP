import React from "react";
import Header from "./components/header/Header";
import Body from "./components/body/Body";
import GlobalStyle from "./setup/styled_components/GlobalStyle";

const App = () => {
    return (
        <>
            <GlobalStyle />
            <div>App</div>
            <Header />
            <Body />
        </>
    );
};

export default App;
