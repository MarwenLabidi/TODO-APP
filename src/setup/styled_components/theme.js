export const lightTheme = () => {
        let clr_Very_Light_Gray = "hsl(0, 0%, 98%)";
        let Very_Light_Grayish_Blue = "hsl(236, 33%, 92%)";
        let Light_Grayish_Blue = "hsl(233, 11%, 84%)";
        let Dark_Grayish_Blue = "hsl(236, 9%, 61%)";
        let Very_Dark_Grayish_Blue = "hsl(235, 19%, 35%)";
        let clr_Very_Dark_Blue = "hsl(235, 21%, 11%)";

        return {
                body: clr_Very_Light_Gray,
                text: clr_Very_Dark_Blue,
                toggleBorder: "white",
                gradient: "linear-gradient(#39598A, #79D7ED)",
                backgroundImageHeader: "url(/images/bg-desktop-light.jpg)",
                iconDarkMode: "url(/images/icon-sun.svg)",
                gradiant: "linear-gradient(#39598A, #79D7ED)",
                input: Very_Light_Grayish_Blue,
        };
};
export const darkTheme = () => {
        let clr_Very_Dark_Blue = "hsl(235, 21%, 11%)";
        let clr_Very_Dark_Desaturated_Blue = "hsl(235, 24%, 19%)";
        let clr_Light_Grayish_Blue = "hsl(234, 39%, 85%)";
        let clr_Light_Grayish_Blue_hover = "hsl(236, 33%, 92%)";
        let clr_Dark_Grayish_Blue = "hsl(234, 11%, 52%)";
        let clr_Very_Dark_Grayish_Blue_100 = "hsl(233, 14%, 35%)";
        let clr_Very_Dark_Grayish_Blue_200 = "hsl(237, 14%, 26%)";
        let clr_Very_Light_Gray = "hsl(0, 0%, 98%)";

        return {
                body: clr_Very_Dark_Blue,
                text: clr_Very_Light_Gray,
                toggleBorder: "black",
                gradient: "linear-gradient(#091236, #1E215D)",
                backgroundImageHeader: "url(/images/bg-desktop-dark.jpg)",
                iconDarkMode: "url(/images/icon-moon.svg)",
                gradiant: "linear-gradient(hsl(192, 100%, 67%), hsl(280, 87%, 65%))",
                input: clr_Very_Dark_Grayish_Blue_100,
        };
};
