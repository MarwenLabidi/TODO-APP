//TODO? get style varriale from css global style
let root = document.querySelector(":root");
let bodyLightTheme = getComputedStyle(root).getPropertyValue("--clr_Very_Light_Gray");
let bodyDarkTheme = getComputedStyle(root).getPropertyValue("--clr_Very_Dark_Blue");

export const lightTheme = {
        body: bodyLightTheme,
        text: "#363537",
        toggleBorder: "#FFF",
        gradient: "linear-gradient(#39598A, #79D7ED)",
};

export const darkTheme = {
        body: bodyDarkTheme,
        text: "#FAFAFA",
        toggleBorder: "#6B8096",
        gradient: "linear-gradient(#091236, #1E215D)",
};
