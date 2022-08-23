import { createGlobalStyle } from "styled-components";
const GlobalStyle = createGlobalStyle`
:root {
  	    /* fonts variables  */
        --ff_Josefin:'Josefin Sans', sans-serif;

        /* fonts weight */
        --fw_regular:400;
        --fw_bold:700;

        /* colors variables */

        /* Primary colors */
        --clr_Bright_Blue: hsl(220, 98%, 61%);
        --clr_Background_Gradiant:linear-gradient(hsl(192, 100%, 67%), hsl(280, 87%, 65%));

        /* Light Theme */
        --clr_Very_Light_Gray: hsl(0, 0%, 98%);
        --Very_Light_Grayish_Blue: hsl(236, 33%, 92%);
        --Light_Grayish_Blue: hsl(233, 11%, 84%);
        --Dark_Grayish_Blue: hsl(236, 9%, 61%);
        --Very_Dark_Grayish_Blue: hsl(235, 19%, 35%);

        /* Dark Theme */
        --clr_Very_Dark_Blue: hsl(235, 21%, 11%);
        --clr_Very_Dark_Desaturated_Blue: hsl(235, 24%, 19%);
        --clr_Light_Grayish_Blue: hsl(234, 39%, 85%);
        --clr_Light_Grayish_Blue_hover: hsl(236, 33%, 92%);
        --clr_Dark_Grayish_Blue: hsl(234, 11%, 52%);
        --clr_Very_Dark_Grayish_Blue_100: hsl(233, 14%, 35%);
        --clr_Very_Dark_Grayish_Blue_200: hsl(237, 14%, 26%);

}

body{ 
  font-size:18px;
  };
}
/* Box sizing rules */
*,
*::before,
*::after {
  box-sizing: border-box;
}

/* Remove default margin */
body,
h1,
h2,
h3,
h4,
p,
figure,
blockquote,
dl,
dd {
  margin: 0;
}

/* Remove list styles on ul, ol elements with a list role, which suggests default styling will be removed */
ul,
ol {
  list-style: none;
}

/* Set core root defaults */
html:focus-within {
  scroll-behavior: smooth;
}

/* Set core body defaults */
body {
  min-height: 100vh;
  text-rendering: optimizeSpeed;
  line-height: 1.5;
}

/* A elements that don't have a class get default styles */
a:not([class]) {
  text-decoration-skip-ink: auto;
}

/* Make images easier to work with */
img,
picture {
  max-width: 100%;
  display: block;
}

/* Inherit fonts for inputs and buttons */
input,
button,
textarea,
select {
  font: inherit;
}

/* Remove all animations, transitions and smooth scroll for people that prefer not to see them */
@media (prefers-reduced-motion: reduce) {
  html:focus-within {
  scroll-behavior: auto;
  }
  
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}
`;
export default GlobalStyle;
