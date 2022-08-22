import styled from "styled-components";

export const StyledHeader = styled.div`
        display: flex;
        background-color: red;
        height: 32vh;
`;

export const StyledBody = styled.div`
        background-color: green;
        height: 68vh;
        text-align: center;
`;

export const StyledMain = styled.div`
        background-color: blue;
        width: 45%;
        margin: 0 auto;
        @media (max-width: 768px) {
                width: 90%;
        }
        /* TODO? translate it to the top a little bit */
`;

export const StyledMainInputSectionOne = styled.div`
        background-color: black;
`;
export const StyledMainListSection = styled.div`
        background-color: pink;
`;
export const StyledMainFooterSection = styled.div`
        background-color: yellow;
`;
