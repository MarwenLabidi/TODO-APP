import {forwardRef} from "react";
import Main from "../main/index";
import { StyledBody, StyledMenuButton } from "../../setup/styled_components/styled_component";

const Body = ({ theme },ref) => {
    return (
        <StyledBody >
            <Main
                theme={theme}
                ref={ref}
            />
            <p className='note'>Drag and drop to reorder list</p>
            <StyledMenuButton>
            </StyledMenuButton>
        </StyledBody>
    );
};

export default forwardRef(Body) ;
