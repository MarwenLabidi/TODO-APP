import styled, { css, keyframes } from "styled-components";
import { motion } from "framer-motion";

const sunAnimation = keyframes`
        0% {
                transform: rotate(0deg);
        }
        50% {
                transform: rotate(360deg);
        }
        100% {
                transform: rotate(0deg);
        }
`;

const moonAnimation = keyframes`
        0% {
                transform: rotate(0deg);
        }
        50% {
                transform: rotate(-30deg);
        }
        100% {
                transform: rotate(0deg);
        }
`;

export const StyledHeader = styled(motion.div)`
        background: ${({ theme }) => theme.backgroundImageHeader};
        color: var(--clr_Very_Light_Gray);
        backface-visibility: hidden;
        background-size: cover;
        height: 250px;
        transition: all 0.5s ease-in-out;
        header {
                padding-top: 25px;
                h1 {
                        font-family: var(--ff_Josefin);
                        letter-spacing: 8px;
                        font-size: 3rem;
                        margin: 0;

                        @media (max-width: 900px) {
                                font-size: 2rem;
                        }
                }
                display: flex;
                margin: 0 auto;
                width: 60vw;
                justify-content: space-between;
                align-items: center;
                @media (max-width: 900px) {
                        width: 85vw;
                }
        }
        div {
                position: relative;
                height: 60px;
                width: 60px;
                margin: 0;
        }
        button {
                transition: all 0.5s ease-in-out;
                outline: none;
                height: 40px;
                width: 40px;
                @media (max-width: 900px) {
                        height: 30px;
                        width: 30px;
                }
                border: none;
                position: absolute;
                top: 10px;
                right: 0;
                &:hover {
                        cursor: pointer;
                }
        }
        .Moon {
                background: url("/images/icon-moon.svg") no-repeat;
                background-size: cover;

                ${(props) =>
                        props.icon == "light" &&
                        css`
                                pointer-events: none;
                                top: 250px;
                        `}
                ${(props) =>
                        props.icon == "dark" &&
                        css`
                                animation: ${moonAnimation} 5s infinite both
                                        linear;
                        `}
        }
        .Sun {
                background: url("/images/icon-sun.svg") no-repeat;
                background-size: cover;

                ${(props) =>
                        props.icon == "dark" &&
                        css`
                                pointer-events: none;
                                top: -250px;
                        `}
                ${(props) =>
                        props.icon == "light" &&
                        css`
                                animation: ${sunAnimation} 9s both infinite
                                        ease-in-out;
                        `}
        }
        /* cursor:none; */
`;

export const StyledBody = styled(motion.div)`
        transition: all 0.5s ease-in-out;
        background-color: ${({ theme }) => theme.body};
        color: ${({ theme }) => theme.text};
        height: 68vh;
        text-align: center;
        .note {
                margin-top: -75px;
        }
        @media (max-width: 650px) {
                .note {
                        margin-top: -65px;
                }
        }
        /* cursor: none; */
`;

export const StyledMain = styled(motion.div)`
        width: 60vw;
        margin: 0 auto;
        @media (max-width: 900px) {
                width: 85vw;
        }
        /* z-index:5; */
`;
export const StyledMainInputSectionOne = styled(motion.div)`
        position: relative;
        input {
                width: 100%;
                height: 63px;
                border-radius: 10px;
                font-size: 1.5rem;
                font-family: var(--ff_Josefin);
                border: none;
                outline: none;
                text-indent: 30px;
                background-color: ${({ theme }) => theme.input};
                color: ${({ theme }) => theme.text};
        }
        button {
                position: absolute;
                right: 0;
                height: 100%;
                border-radius: 10px;
                background: ${({ theme }) => theme.gradiant};
                width: 80px;
                &:hover {
                        cursor: pointer;
                }
                font-weight: bold;
        }
`;
export const StyledMainListSection = styled(motion.div)`
        max-height: 45vh;
        overflow-y: auto;
        overflow-x: hidden;
        scroll-behavior: smooth;
        margin: 10px 0;
        scroll-snap-type: y mandatory;

        ul {
                padding: 0;
                border-radius: 10px;
                div {
                        perspective: 500;
                }
        }
        li {
                scroll-snap-align: start;

                padding: 1rem;
                border-top: 1px solid ${({ theme }) => theme.text};
                background-color: ${({ theme }) => theme.input};
                display: flex;
                gap: 20px;
                align-items: center;
                margin-bottom: 5px;
                border-radius: 10px;
        }
        //on drag css selector
        li > input[type="checkbox"] {
                appearance: none;
                position: relative;
                width: 10px;
                height: 10px;
                min-width: 45px;
                min-height: 45px;
                border-radius: 50%;
                background: #f8f7f7;
                border: 2px solid #fff;
                cursor: pointer;
                box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
                &:after {
                        content: "";
                        position: absolute;
                        top: 55%;
                        left: 50%;
                        transform: translate(-50%, -50%);
                        width: 100%;
                        height: 100%;
                        pointer-events: none;
                        background-image: url(/images/icon-check.svg);
                        background-size: contain;
                        background-repeat: no-repeat;
                        opacity: 0;
                }
        }
        li > input[type="checkbox"]:checked {
                background: ${({ theme }) => theme.gradiant};
                &:after {
                        opacity: 1;
                }
        }

        li > label {
                font-size: 3vw;
                font-family: var(--ff_Josefin);
                display: block;
                width: 90%;
                overflow-wrap: break-word;
                align-self: center;
                &:hover {
                        cursor: pointer;
                }
                &:active {
                        cursor: grabbing;
                }
                @media (max-width: 700px) {
                        width: 70%;
                        font-size: 5vw;
                }
        }

        /* costomize scrollbar */
        &::-webkit-scrollbar {
                width: 12px; /* width of the entire scrollbar */
        }
        &::-webkit-scrollbar-track {
                background: none; /* color of the tracking area */
        }
        &::-webkit-scrollbar-thumb {
                background: ${({ theme }) =>
                        theme.gradiant}; /* color of the scroll thumb */
                border-radius: 20px; /* roundness of the scroll thumb */
                border: 3px solid white; /* creates padding around scroll thumb */
        }
`;
export const StyledMainFooterSection = styled(motion.div)`
        background-color: ${({ theme }) => theme.input};
        border-radius: 10px;
        padding: 1rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
        position: relative;
        * {
                color: ${({ theme }) => theme.text};
                outline: none;
                border: none;
                background: none;
        }
        .allActiveComplete {
                padding: 1rem;

                display: flex;
                gap: 20px;
                * {
                        &:hover {
                                cursor: pointer;
                                background-color: ${({ theme }) =>
                                        theme.toggleBorder};
                                border-radius: 10px;
                        }
                        &:focus {
                                cursor: pointer;
                                background-color: ${({ theme }) =>
                                        theme.toggleBorder};
                                border-radius: 10px;
                        }
                }
                @media (max-width: 650px) {
                        background-color: ${({ theme }) => theme.input};
                        position: absolute;
                        bottom: -70px;
                        left: 0;
                        width: 100%;
                        height: 60px;
                        border-radius: 10px;
                        justify-content: center;
                }
        }
        .allActiveComplete + button {
                &:hover {
                        cursor: pointer;
                        background-color: ${({ theme }) => theme.toggleBorder};
                        border-radius: 10px;
                }
                &:focus {
                        cursor: pointer;
                        background-color: ${({ theme }) => theme.toggleBorder};
                        border-radius: 10px;
                }
        }
`;

export const StyledCursor = styled(motion.div).attrs({
        className: "cursorCustom",
})`
        position: absolute;
        left: 0;
        top: 0;
        width: 40px;
        height: 40px;
        border-radius: 50%;
        pointer-events: none;
        z-index: 9999;
        transform: translate(-50%, -50%);
        background-color: ${({ theme }) => theme.text};
        opacity: 0.7;
`;

export const StyledContainerMenuButtonSectionbuttons = styled(motion.div)`
        display: flex;
        position: absolute;
        bottom: 30px;
        right:0px;
        width: 200px;
        height: 100px;
        border-radius: 10px 0 0 10px;
        background-color: ${({ theme }) => theme.text}; 
        z-index: 9999;
        padding-right:10px;
        @media (max-width: 650px) {
                padding-left:10px;
        }
       
`;

export const StyledMenuButton = styled(motion.button)`
        width: 30px;
        height: 100px;
        background-color: ${({ theme }) => theme.text};
        border: none;
        outline: none;
        border-radius: 10px 0 0 10px;
        &:hover {
                cursor: pointer;
        }
        @media (max-width: 650px) {
                width: 20px;
        }
        .menuIcon {
                rotate: 90deg;
                color: ${({ theme }) => theme.invertText};
                width: 38px;
                height: 30px;
                margin-left: -13px;
                @media (max-width: 650px) {
                        margin-left: -14px;
                }
        }
`;
export const StyledMenuButtonSection = styled(motion.div)`
        display: flex;
        align-items: center;
        height: 100px;
        width: 100%;
        button {
                background-color: ${({ theme }) => theme.invertText};
                color: ${({ theme }) => theme.text};
                border-radius: 10px;
                height: 60px;
                font-family: var(--ff_Josefin);
                outine: none;
                border:none;
                &:hover {
                        cursor: pointer;
                }
                margin-left:10px;
        
        }
`;
