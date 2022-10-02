import {forwardRef} from "react";
import Main from "../main/index";
import { StyledBody } from "../../setup/styled_components/styled_component";

const Body = ({ theme },ref) => {
    return (
        <StyledBody >
            <Main
                theme={theme}
                ref={ref}
            />
            <p>Drag and drop to reorder list</p>
        </StyledBody>
    );
};

export default forwardRef(Body) ;
