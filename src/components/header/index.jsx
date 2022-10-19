import { useContext, forwardRef } from "react";
import {
        StyledHeader,
        StyledLoginButton,
        StyledProfileSection,
} from "../../setup/styled_components/styled_component";
import { FocusedInputContext } from "../../setup/context/focusedInputContext.jsx";
import { loginFunction, playSound } from "../../utils/utils";
import Dialogue from "../dialogue";
import { useRef } from "react";

const Header = ({ toggleTheme, icon, refProfileMenu, isLoggedIn }, ref) => {
        const [focusedInput, setFocusedInput] = useContext(FocusedInputContext);
        const { refDarkModeButton, refLoginButton } = ref.current;
        const dialogueRef = useRef();

        return (
                <StyledHeader
                        icon={icon}
                        width={focusedInput === false ? 32 : 50}>
                        <header>
                                <h1>TODO</h1>
                                <div ref={refDarkModeButton}>
                                        <button
                                                className='Moon'
                                                onClick={() => {
                                                        playSound(
                                                                "/sounds/switch-darkmode.mp3",
                                                                "/sounds/morning.mp3"
                                                        );
                                                        toggleTheme();
                                                }}></button>
                                        <button
                                                className='Sun'
                                                onClick={() => {
                                                        playSound(
                                                                "/sounds/switch-darkmode.mp3",
                                                                "/sounds/night.mp3"
                                                        );
                                                        toggleTheme();
                                                }}></button>
                                </div>
                                {!isLoggedIn && (
                                        <StyledLoginButton
                                                ref={refLoginButton}
                                                animate={{
                                                        y: 20,
                                                        opacity: 1,
                                                        transition: {
                                                                duration: 1,
                                                                delay: 1,
                                                        },
                                                }}
                                                initial={{ y: -35, opacity: 0 }}
                                                onClick={() => {
                                                        playSound(
                                                                "/sounds/buttons.mp3"
                                                        );
                                                        loginFunction(
                                                                dialogueRef
                                                        );
                                                }}
                                                whileTap={{ scale: 0.9 }}>
                                                Login
                                        </StyledLoginButton>
                                )}
                                {isLoggedIn && (
                                        <StyledProfileSection>
                                                <button>
                                                        <input
                                                                type='checkbox'
                                                                onChange={(
                                                                        e
                                                                ) => {
                                                                        if (
                                                                                e
                                                                                        .currentTarget
                                                                                        .checked
                                                                        ) {
                                                                                //change the width to 250px
                                                                                if (
                                                                                        window.matchMedia(
                                                                                                "(max-width: 450px)"
                                                                                        )
                                                                                                .matches
                                                                                ) {
                                                                                        refProfileMenu.current.style.width =
                                                                                                "200px";
                                                                                } else {
                                                                                        refProfileMenu.current.style.width =
                                                                                                "250px";
                                                                                }
                                                                        } else {
                                                                                refProfileMenu.current.style.width =
                                                                                        "0px";
                                                                        }
                                                                }}
                                                        />
                                                </button>
                                        </StyledProfileSection>
                                )}
                                <Dialogue ref={dialogueRef} />
                        </header>
                </StyledHeader>
        );
};

export default forwardRef(Header);
