import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { AuthFireBaseContextProvider } from "./setup/context/authFireBaseContext";

ReactDOM.createRoot(document.getElementById("root")).render(
        <React.StrictMode>
                <AuthFireBaseContextProvider>
                        <App />
                </AuthFireBaseContextProvider>
        </React.StrictMode>
);
