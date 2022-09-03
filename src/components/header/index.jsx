import React,{useContext} from "react";
import { StyledHeader } from "../../setup/styled_components/styled_component";
import { FocusedInputContext } from "../../setup/context/focusedInputContext.jsx";

const Header = ({ toggleTheme }) => {
        const [focusedInput, setFocusedInput] = useContext(FocusedInputContext);
        return (
                <StyledHeader width={ (focusedInput===false) ? 32 : 50 }
                >
                        <header>
                                <h1>TODO</h1>
                                <button onClick={toggleTheme}></button>
                        </header>
                </StyledHeader>
        );
};

export default Header;
