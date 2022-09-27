import React,{useContext} from "react";
import { StyledHeader } from "../../setup/styled_components/styled_component";
import { FocusedInputContext } from "../../setup/context/focusedInputContext.jsx";

const Header = ({ toggleTheme,icon }) => {
        const [focusedInput, setFocusedInput] = useContext(FocusedInputContext);
        return (
                <StyledHeader icon={icon}  width={ (focusedInput===false) ? 32 : 50 }
                >
                        <header>
                                <h1>TODO</h1>
                                <div>
                                <button className="Moon"  onClick={toggleTheme}></button>
                                <button className="Sun"  onClick={toggleTheme}></button>
                                </div>
                        </header>
                </StyledHeader>
        );
};

export default Header;
