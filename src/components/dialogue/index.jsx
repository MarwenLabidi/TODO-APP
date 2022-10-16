import styled from "styled-components";
import { motion } from "framer-motion";
import { createPortal } from "react-dom";
import { forwardRef } from "react";

const Dialogue = ({ },ref) => {
        return createPortal(
                <StyledDialogue ref={ref}>
                        <p>This is a dialog!</p>
                        <button id='close'>Close Dialog!</button>
                </StyledDialogue>,
                document.body
        );
};

export default forwardRef(Dialogue);

const StyledDialogue = styled(motion.dialog)`
        width: 400px;
        height: 400px;
        margin:auto ;
        padding: 0;
        position: fixed;
        inset: 0;
        z-index: var(--layer-important);
        &::backdrop {
                background-color: ${({ theme }) => theme.text};
                opacity: 0.5;
        }
        &:not([open]) {
                pointer-events: none;
                opacity: 0;
        }
`;
