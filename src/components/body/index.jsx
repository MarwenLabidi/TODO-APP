import { forwardRef, useState, useEffect } from "react";
import Main from "../main/index";
import {
        StyledBody,
        StyledContainerMenuButtonSectionbuttons,
        StyledMenuButton,
        StyledMenuButtonSection,
} from "../../setup/styled_components/styled_component";
import { motion, useAnimationControls } from "framer-motion";
import { playSound } from "../../utils/utils";
import { isMobile } from "react-device-detect";
const variants = {
        desktopfirst: { x: 30 },
        mobilefirst: { x: 40 },
        desktop: { x: 120 },
        mobile: { x: 138 },
};

const Body = ({ theme, setMainPostion }, ref) => {
        const [isMenuOpen, setIsMenuOpen] = useState(false);
        const controls = useAnimationControls();
        const { refMenuButton } = ref.current;

        useEffect(() => {
                isMenuOpen === true
                        ? controls.start(
                                  isMobile ? "mobilefirst" : "desktopfirst"
                          )
                        : controls.start(isMobile ? "mobile" : "desktop");
        }, [isMenuOpen]);
        return (
                <StyledBody>
                        <Main
                                setMainPostion={setMainPostion}
                                theme={theme}
                                ref={ref}
                        />
                        <p className='note'>Drag and drop to reorder list</p>
                        <StyledContainerMenuButtonSectionbuttons
                                ref={refMenuButton}
                                variants={variants}
                                animate={controls}
                                onClick={(e) => {
                                        if (
                                                e.target.textContent !=
                                                        "install" &&
                                                e.target.type != "checkbox"
                                        ) {
                                                setIsMenuOpen(!isMenuOpen);
                                                playSound("/sounds/menu.mp3");
                                        }
                                }}>
                                <StyledMenuButton aria-label='menu'>
                                        <svg
                                                xmlns='http://www.w3.org/2000/svg'
                                                fill='none'
                                                viewBox='0 0 24 24'
                                                h={1.5}
                                                stroke='currentColor'
                                                className='menuIcon'>
                                                <path
                                                        strokeLinecap='round'
                                                        strokeLinejoin='round'
                                                        d='M3.75 9h16.5m-16.5 6.75h16.5'
                                                />
                                        </svg>
                                </StyledMenuButton>
                                <StyledMenuButtonSection>
                                        <motion.button
                                        
                                                onClick={() =>{
                                                        playSound(
                                                                "/sounds/buttons.mp3"
                                                        );
                                                        (function installApp(){
                                                                console.log('installing');
                                                                installPromptEvent.prompt();

                                                        })()
                                                }
                                                }
                                                whileTap={{ scale: 0.9 }}>
                                                install
                                        </motion.button>
                                </StyledMenuButtonSection>
                        </StyledContainerMenuButtonSectionbuttons>
                </StyledBody>
        );
};

export default forwardRef(Body);
