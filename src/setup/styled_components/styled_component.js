import styled from "styled-components";
import { motion } from "framer-motion";

export const StyledHeader = styled(motion.div)`
        background: ${({ theme }) => theme.backgroundImageHeader};
        color: var(--clr_Very_Light_Gray);
        backface-visibility: hidden;
        background-size: cover;
        height: 32vh;
        transition: all 0.5s ease-in-out;
        @media (max-width: 900px) {
                height: ${(props) => props.width + "vh"};
        }
        header {
                * {
                        margin-top: 5vh;
                }
                h1 {
                        font-family: var(--ff_Josefin);
                        letter-spacing: 8px;
                        font-size: 3rem;
                        @media (max-width: 900px) {
                                font-size: 2rem;
                        }
                }
                display: flex;
                justify-content: space-between;
                width: 60vw;
                margin: 0 auto;
                @media (max-width: 900px) {
                        width: 85vw;
                }
        }
        button {
                outline: none;
                background: ${({ theme }) => theme.iconDarkMode} no-repeat
                        center bottom;
                background-size: cover;
                height: 2.5rem;
                width: 2.5rem;
                border: none;
                &:hover {
                        cursor: pointer;
                }
        }
`;

export const StyledBody = styled(motion.div)`
        background-color: ${({ theme }) => theme.body};
        color: ${({ theme }) => theme.text};
        height: 68vh;
        text-align: center;
        p:last-child {
                margin-top: -10vh;
        }
        @media (max-width: 650px) {
                p:last-child {
                        margin-top: 15px;
                }
        }
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
                height: 8vh;
                border-radius: 10px;
                font-size: 1.5rem;
                font-family: var(--ff_Josefin);
                border: none;
                outline: none;
                text-indent: 30px;
                background-color: ${({ theme }) => theme.input};
                color: ${({ theme }) => theme.text};
                @media (max-width: 900px) {
                        height: ${(props) => props.width + "vh"};
                }
        }
        button {
                position: absolute;
                right: 0;
                height: 100%;
                min-width: 3.3rem;
                border-radius: 10px;
                background: ${({ theme }) => theme.gradiant};
                width: 8vh;
                &:hover {
                        cursor: pointer;
                }
                font-weight: bold;
        }
`;
export const StyledMainListSection = styled(motion.div)`
        max-height: 40vh;
        overflow-y: auto;
        overflow-x: hidden;
        scroll-behavior: smooth;

        ul {
                padding: 0;
                border-radius: 10px;
                div{
                        perspective: 500;
                }

        }
        li {
                padding: 1rem;
                border-top: 1px solid ${({ theme }) => theme.text};
                background-color: ${({ theme }) => theme.input};
                display: flex;
                gap: 20px;
                align-items: center;
                margin-bottom: 5px;
                border-radius: 10px;
        }
        li > input[type="checkbox"] {
                appearance: none;
                position: relative;
                width: 6vh;
                min-width: 45px;
                min-height: 45px;
                height: 6vh;
                @media (max-width: 900px) {
                        height: ${(props) => props.width + "vh"};
                }
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
                border: 3px solid yellow; /* creates padding around scroll thumb */
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
                        height: 8vh;
                        @media (max-width: 900px) {
                                height: ${(props) => props.width + "vh"};
                        }
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
