import { useContext, forwardRef } from "react";
import {
        StyledHeader,
        StyledLoginButton,
        StyledProfileSection,
} from "../../setup/styled_components/styled_component";
import { FocusedInputContext } from "../../setup/context/focusedInputContext.jsx";
import { authFireBaseContext } from "../../setup/context/authFireBaseContext";
import { loginFunction, playSound } from "../../utils/utils";
import Dialogue from "../dialogue";
import { useRef } from "react";
import { useState } from "react";
import { AnimatePresence } from "framer-motion";

const Header = ({ toggleTheme, icon, refProfileMenu }, ref) => {
        const [focusedInput, setFocusedInput] = useContext(FocusedInputContext);
        const [currentUser, setCurrentUser] = useContext(authFireBaseContext);

        const { refDarkModeButton, refLoginButton } = ref.current;
        const dialogueRef = useRef();

        return (
                <StyledHeader
                        icon={icon}
                        width={focusedInput === false ? 32 : 50}>
                        <header>
                                <h1 data-axe-reject={true}>TODO</h1>
                                <div ref={refDarkModeButton}>
                                        <button aria-label='dark mode ' 
                                                className='Moon'
                                                onClick={() => {
                                                        playSound(
                                                                "/sounds/switch-darkmode.mp3",
                                                                "/sounds/morning.mp3"
                                                        );
                                                        toggleTheme();
                                                }}></button>
                                        <button aria-label='white mode ' 
                                                className='Sun'
                                                onClick={() => {
                                                        playSound(
                                                                "/sounds/switch-darkmode.mp3",
                                                                "/sounds/night.mp3"
                                                        );
                                                        toggleTheme();
                                                }}></button>
                                </div>
                                <AnimatePresence>
                                        {!currentUser && (
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
                                                        exit={{
                                                                y: -35,
                                                                opacity: 0,
                                                        }}
                                                        transition={{
                                                                duration: 1,
                                                        }}
                                                        initial={{
                                                                y: -35,
                                                                opacity: 0,
                                                        }}
                                                        onClick={() => {
                                                                playSound(
                                                                        "/sounds/buttons.mp3"
                                                                );
                                                                loginFunction(
                                                                        dialogueRef
                                                                );
                                                        }}
                                                        whileTap={{
                                                                scale: 0.9,
                                                        }}>
                                                        Login
                                                </StyledLoginButton>
                                        )}
                                </AnimatePresence>

                                {currentUser && (
                                        <StyledProfileSection
                                                initial={{
                                                        opacity: 0,
                                                        y: -35,
                                                }}
                                                animate={{
                                                        opacity: 1,
                                                        y: 0,
                                                        transition: {
                                                                duration: 1,
                                                                delay: 1,
                                                        },
                                                }}>
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
                                                                                refProfileMenu.current.style.right =
                                                                                        "0px";
                                                                        } else {
                                                                                //change the width to 250px
                                                                                if (
                                                                                        window.matchMedia(
                                                                                                "(max-width: 450px)"
                                                                                        )
                                                                                                .matches
                                                                                ) {
                                                                                        refProfileMenu.current.style.right =
                                                                                                "-200px";
                                                                                } else {
                                                                                        refProfileMenu.current.style.right =
                                                                                                "-250px";
                                                                                }
                                                                        }
                                                                        playSound(
                                                                                "/sounds/buttons.mp3"
                                                                        );
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
