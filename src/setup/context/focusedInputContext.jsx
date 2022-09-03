import { createContext, useState } from "react";
export const FocusedInputContext = createContext();

export const FocusedInputContextProvider = ({ children }) => {
        const [focusedInput, setFocusedInput] = useState(false);
        return (
                <FocusedInputContext.Provider
                        value={[focusedInput, setFocusedInput]}>
                        {children}
                </FocusedInputContext.Provider>
        );
};
