import {useContext,forwardRef} from "react";
import { StyledHeader, StyledLoginButton } from "../../setup/styled_components/styled_component";
import { FocusedInputContext } from "../../setup/context/focusedInputContext.jsx";
import { playSound } from "../../utils/utils";

const Header = ({ toggleTheme,icon },ref) => {
        const [focusedInput, setFocusedInput] = useContext(FocusedInputContext);
        const { refDarkModeButton, refLoginButton } = ref.current;

        return (
                <StyledHeader icon={icon}  width={ (focusedInput===false) ? 32 : 50 } >
                        <header>
                                <h1>TODO</h1>
                                <div ref={refDarkModeButton}>
                                <button className="Moon"  onClick={()=>{playSound('/sounds/switch-darkmode.mp3','/sounds/morning.mp3');toggleTheme();}}></button>
                                <button className="Sun"  onClick={()=>{playSound('/sounds/switch-darkmode.mp3','/sounds/night.mp3');toggleTheme();}}></button>
                                </div>
                                <StyledLoginButton ref={refLoginButton} animate={{y:20, opacity: 1, transition: { duration: 1, delay: 1 } }} initial={{y:-35, opacity: 0 }}  onClick={()=>playSound('/sounds/buttons.mp3')} whileTap={{ scale: 0.9 }} >Login</StyledLoginButton>

                        </header>
                </StyledHeader>
        );
};

export default forwardRef(Header);
