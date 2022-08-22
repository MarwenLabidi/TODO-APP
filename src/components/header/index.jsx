import React from "react";
import {StyledHeader} from "../../setup/styled_components/styled_component";

const Header = ({toggleTheme}) => {
    return <StyledHeader>
        <h1>TODO</h1>
        <button onClick={toggleTheme}>change theme</button>
    </StyledHeader>;
};

export default Header;
