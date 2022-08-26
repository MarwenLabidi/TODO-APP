import styled from "styled-components";

export const StyledHeader = styled.div`
        background: ${({ theme }) => theme.backgroundImageHeader};
        color: var(--clr_Very_Light_Gray);
        backface-visibility: hidden;
        background-size: cover;
        height: 32vh;
        min-height: 200px;
        transition: all 0.5s ease-in-out;
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

export const StyledBody = styled.div`
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

export const StyledMain = styled.div`
        width: 60vw;
        margin: 0 auto;
        @media (max-width: 900px) {
                width: 85vw;
        }
`;

export const StyledMainInputSectionOne = styled.div`
        transform: translateY(-12vh);
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
        }
        button {
                position: absolute;
                right: 0;
                height: 100%;
                width: 3.3rem;
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
export const StyledMainListSection = styled.div`
        transform: translateY(-12vh);
        max-height: 40vh;
        overflow-y: auto;
        scroll-behavior: smooth;
        transition: all 0.5s ease-in-out;
        ul {
                padding: 0;
                border-radius: 10px;
        }
        li {
                padding: 1rem;
                border-bottom: 1px solid ${({ theme }) => theme.text};
                background-color: ${({ theme }) => theme.input};
                display: flex;
                gap: 20px;
        }
        li > input[type="checkbox"] {
                appearance: none;
                position: relative;
                width: 50px;
                height: 50px;
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
                font-size: 1.5rem;
                font-family: var(--ff_Josefin);
                align-self: center;
                &:hover {
                        cursor: pointer;
                }
        }
`;
export const StyledMainFooterSection = styled.div`
        background-color: ${({ theme }) => theme.input};
        border-radius: 10px;
        transform: translateY(-12vh);
        padding: 1rem;
        display: flex;
        justify-content: space-between;
        /* margin-top: 20px; */
        position: relative;
        * {
                color: ${({ theme }) => theme.text};
                outline: none;
                border: none;
                background: none;
        }
        .allActiveComplete {
                display: flex;
                gap: 20px;
                * {
                        &:hover {
                                cursor: pointer;
                        }
                }
                @media (max-width: 650px) {
                        background-color: ${({ theme }) => theme.input};;
                        position: absolute;
                        bottom: -70px;
                        left:0;
                        width: 100%;
                        height: 8vh;
                        border-radius: 10px;
                        justify-content: center;
                }
        }
        .allActiveComplete + button {
                &:hover {
                        cursor: pointer;
                }
        }
`;
