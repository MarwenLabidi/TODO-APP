import styled from "styled-components";

export const StyledHeader = styled.div`
        /* display: flex; */
        /* justify-content:center; */
        /* align-items: start; */
        background: ${({ theme }) => theme.backgroundImageHeader};
        color: var(--clr_Very_Light_Gray);
        backface-visibility: hidden;
        background-size: cover;
        height: 32vh;
        transition: all 0.5s ease-in-out;
        header {
                * {
                        margin-top: 5vh;
                }
                h1 {
                        font-family: var(--ff_Josefin);
                        letter-spacing: 8px;
                        font-size: 3rem;
                        /* font-weight: var(--ff_bold); */
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
        transition: all 0.5s ease-in-out;
        p:last-child {
                position: fixed;
                bottom: 10%;
                left: 50%;
                transform: translate(-50%, -50%);
        }
`;

export const StyledMain = styled.div`
        background-color: blue;
        width: 60vw;
        margin: 0 auto;
        @media (max-width: 900px) {
                width: 85vw;
        }
`;

export const StyledMainInputSectionOne = styled.div`
        background-color: black;
`;
export const StyledMainListSection = styled.div`
        background-color: pink;
        max-height: 40vh;
        overflow-y: scroll;
        scroll-behavior: smooth;
        transition: all 0.5s ease-in-out;
`;
export const StyledMainFooterSection = styled.div`
        background-color: yellow;
        display: flex;
        justify-content: space-between;
        margin: 20px;
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
        }
        .allActiveComplete + button {
                &:hover {
                        cursor: pointer;
                }
        }
`;