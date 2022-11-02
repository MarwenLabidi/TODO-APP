import Header from "./components/header";
import Body from "./components/body";
import GlobalStyle from "./setup/styled_components/GlobalStyle";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "./setup/styled_components/theme.js";
import { useDarkMode } from "./setup/Hooks/useDarkMode.js";
import { authFireBaseContext } from "./setup/context/authFireBaseContext";
import Cursor from "./components/cursor/index";
import { useRef } from "react";
import useElementPosition from "./setup/Hooks/useElemetPosition";
import { isBrowser } from "react-device-detect";
import { useState, useContext } from "react";
import {
        StyledProfileMenu,
        StyledLoginButton,
} from "./setup/styled_components/styled_component";
import { FocusedInputContextProvider } from "./setup/context/focusedInputContext";
import { useFirebase } from "./setup/Hooks/useFirebase";
import { playSound } from "./utils/utils";
import { AnimatePresence } from "framer-motion";

const App = () => {
        const [theme, toggleTheme] = useDarkMode();
        const [currentUser, setCurrentUser] = useContext(authFireBaseContext);
        const [, , , signOutF] = useFirebase();

        const themeMode = theme === "light" ? lightTheme() : darkTheme();
        const refMain = useRef();
        const refDarkModeButton = useRef();
        const startMainPostion = useElementPosition(refMain);
        const [mainPostion, setMainPostion] = useState(startMainPostion);
        const darkModeButtonPosition = useElementPosition(refDarkModeButton);
        const refFooter = useRef();
        const refLoginButton = useRef();
        const refMenuButton = useRef();
        const refContainerForMainFooter = useRef({
                refMain,
                refFooter,
                refMenuButton,
        });
        const refContainerForLoginDarkModeButton = useRef({
                refDarkModeButton,
                refLoginButton,
        });
        const footerPosition = useElementPosition(refFooter);
        const loginButtonPosition = useElementPosition(refLoginButton);
        const menuButtonPosition = useElementPosition(refMenuButton);
        const refProfileMenu = useRef();

        return (
                <FocusedInputContextProvider>
                        <ThemeProvider theme={themeMode}>
                                <>
                                        <GlobalStyle />
                                        {isBrowser && (
                                                <Cursor
                                                        mainPostion={
                                                                mainPostion
                                                        }
                                                        darkModeButtonPosition={
                                                                darkModeButtonPosition
                                                        }
                                                        footerPosition={
                                                                footerPosition
                                                        }
                                                        loginButtonPosition={
                                                                loginButtonPosition
                                                        }
                                                        menuButtonPosition={
                                                                menuButtonPosition
                                                        }
                                                />
                                        )}
                                        <Header
                                                icon={theme}
                                                toggleTheme={toggleTheme}
                                                ref={
                                                        refContainerForLoginDarkModeButton
                                                }
                                                refProfileMenu={refProfileMenu}
                                        />
                                        <Body
                                                theme={theme}
                                                ref={refContainerForMainFooter}
                                                setMainPostion={setMainPostion}
                                        />
                                        <AnimatePresence>
                                                {currentUser && (
                                                        <StyledProfileMenu
                                                                exit={{
                                                                        x: 250,
                                                                }}
                                                                transition={{
                                                                        duration: 0.5,
                                                                }}
                                                                ref={
                                                                        refProfileMenu
                                                                }>
                                                                <img
                                                                        src={
                                                                                currentUser.photoURL
                                                                                        ? currentUser.photoURL
                                                                                        : "/logos/metamask.svg"
                                                                        }
                                                                        alt='profile-photo'
                                                                />
                                                                <h3>
                                                                        {currentUser.displayName
                                                                                ? currentUser.displayName
                                                                                : currentUser.email.split('').slice(0, 10).join("")+'...'}
                                                                </h3>
                                                                <StyledLoginButton
                                                                        onClick={() => {
                                                                                playSound(
                                                                                        "/sounds/buttons.mp3"
                                                                                );
                                                                                setTimeout(
                                                                                        () => {
                                                                                                signOutF();
                                                                                        },
                                                                                        400
                                                                                );
                                                                        }}
                                                                        whileTap={{
                                                                                scale: 0.9,
                                                                        }}>
                                                                        Logout
                                                                </StyledLoginButton>
                                                        </StyledProfileMenu>
                                                )}
                                        </AnimatePresence>
                                </>
                        </ThemeProvider>
                </FocusedInputContextProvider>
        );
};

export default App;
