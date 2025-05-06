import { createContext } from "react";

const StreakModeContext = createContext(null);

const StreakModeProvider = ({ children }) => {
    return (
        <StreakModeContext.Provider value={{}}>
            {children}
        </StreakModeContext.Provider>
    );
}

export { StreakModeContext, StreakModeProvider }