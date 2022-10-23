import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { AuthFireBaseContextProvider } from "./setup/context/authFireBaseContext";
import { TasksContextProvider } from "./setup/context/tasksContext";

ReactDOM.createRoot(document.getElementById("root")).render(
        <React.StrictMode>
                <TasksContextProvider>
                        <AuthFireBaseContextProvider>
                                <App />
                        </AuthFireBaseContextProvider>
                </TasksContextProvider>
        </React.StrictMode>
);
