import React from "react";
import {StyledHeader} from "../../setup/styled_components/styled_component";

const Header = ({toggleTheme}) => {
    return <StyledHeader>
        <header>
            <h1>TODO</h1>
            <button onClick={toggleTheme}></button>
        </header>
        
    </StyledHeader>;
};

export default Header;
