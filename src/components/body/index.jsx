import React from "react";
import Main from "../main/index";
import {StyledBody} from "../../setup/styled_components/styled_component";

const Body = () => {
    return (
        <StyledBody>
            <Main />
            <p>Drag and drop to reorder list</p>
        </StyledBody>
    );
};

export default Body;
