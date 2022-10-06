import { forwardRef, useState, useEffect } from "react";
import Main from "../main/index";
import {
        StyledBody,
        StyledContainerMenuButtonSectionbuttons,
        StyledMenuButton,
        StyledMenuButtonSection,
} from "../../setup/styled_components/styled_component";
import {motion, useAnimationControls } from "framer-motion";
import { playSound } from "../../utils/utils";

const Body = ({ theme }, ref) => {
        const [isMenuOpen, setIsMenuOpen] = useState(false);
        const controls = useAnimationControls();

        useEffect(() => {
                (isMenuOpen === true)
                        ? controls.start({ x: 30 })
                        : controls.start({ x: 200 });
        }, [isMenuOpen]);
        return (
                <StyledBody>
                        <Main theme={theme} ref={ref} />
                        <p className='note'>Drag and drop to reorder list</p>
                        <StyledContainerMenuButtonSectionbuttons
                                animate={controls}
                                onClick={(e) =>{if(e.target.textContent!="install"&&e.target.textContent!=" voice controll"){setIsMenuOpen(!isMenuOpen);playSound('/sounds/menu.mp3');}}}
                                >
                                <StyledMenuButton>
                                        <svg
                                                xmlns='http://www.w3.org/2000/svg'
                                                fill='none'
                                                viewBox='0 0 24 24'
                                                strokeWidth={1.5}
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
                                        <motion.button onClick={()=>playSound('/sounds/buttons.mp3')} whileTap={{ scale: 0.9 }}> voice controll</motion.button>
                                        <motion.button onClick={()=>playSound('/sounds/buttons.mp3')} whileTap={{ scale: 0.9 }}>install</motion.button>
                                </StyledMenuButtonSection>
                        </StyledContainerMenuButtonSectionbuttons>
                </StyledBody>
        );
};

export default forwardRef(Body);
