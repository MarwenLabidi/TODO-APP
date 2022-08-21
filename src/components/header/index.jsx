import React from "react";

const Header = ({toggleTheme}) => {
    return <div>
        <h1>TODO</h1>
        <button onClick={toggleTheme}>change theme</button>
    </div>;
};

export default Header;
