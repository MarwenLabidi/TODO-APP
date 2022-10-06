import { forwardRef, useState, useEffect } from "react";
import Main from "../main/index";
import {
        StyledBody,
        StyledContainerMenuButtonSectionbuttons,
        StyledMenuButton,
        StyledMenuButtonSection,
} from "../../setup/styled_components/styled_component";
import { useAnimationControls } from "framer-motion";

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
                                initial={{ x: 200 }}
                                animate={controls}
                                onClick={() => setIsMenuOpen(!isMenuOpen)}>
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
                                        <button> voice controll</button>
                                        <button>install</button>
                                </StyledMenuButtonSection>
                        </StyledContainerMenuButtonSectionbuttons>
                </StyledBody>
        );
};

export default forwardRef(Body);
