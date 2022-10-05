import Header from "./components/header";
import Body from "./components/body";
import GlobalStyle from "./setup/styled_components/GlobalStyle";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "./setup/styled_components/theme.js";
import { useDarkMode } from "./setup/Hooks/useDarkMode.js";
import { FocusedInputContextProvider } from "./setup/context/focusedInputContext";
import Cursor from "./components/cursor/index";
import { useRef } from "react";
import useElementPosition from "./setup/Hooks/useElemetPosition";
import { isBrowser } from "react-device-detect";

const App = () => {
        const [theme, toggleTheme] = useDarkMode();
        const themeMode = theme === "light" ? lightTheme() : darkTheme();
        const refMain = useRef();
        const refDarkModeButton = useRef();
        const mainPostion = useElementPosition(refMain);
        const darkModeButtonPosition = useElementPosition(refDarkModeButton);

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
                                                />
                                        )}
                                        <Header
                                                icon={theme}
                                                toggleTheme={toggleTheme}
                                                ref={refDarkModeButton}
                                        />
                                        <Body theme={theme} ref={refMain} />
                                </>
                        </ThemeProvider>
                </FocusedInputContextProvider>
        );
};

export default App;

//TODO? add a custom hook useSound to play the sound when the task is completed or when  you add new task or chage theme
//TODO? add sound control buttom to the app https://www.youtube.com/watch?v=wzWcaLkCy1w
//TODO? do unit test and component test with Playwright
//TODO? use github action for ci cd pipeline
//TODO? make it a progressive web apppp and add instal button
//TODO? enable offline cache firestore : https://cloud.google.com/firestore/docs/manage-data/enable-offline#:~:text=Firestore%20supports%20offline%20data%20persistence,and%20query%20the%20cached%20data.
//TODO? accesibility
//TODO? Add hiden Link to go to the tasks
//TODO? add linter and eslint
//TODO? use lihthosuse to make it faster
//TODO? use mesure Measure page quality tools to make it faster too
//TODO? add gif  mobile version and laptop version to README
//TODO? add screenshot from light house and mesure page to README
