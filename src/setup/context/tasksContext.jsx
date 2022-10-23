import { createContext, useState } from "react";
export const TasksContext = createContext();

export const TasksContextProvider = ({ children }) => {
        const [Tasks, setTask] = useState([]); // [{ID,Description,Completed}]

        return (
                <TasksContext.Provider
                        value={[Tasks, setTask]}>
                        {children}
                </TasksContext.Provider>
        );
};
