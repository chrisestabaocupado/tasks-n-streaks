import { createContext, useReducer, useEffect, useState } from "react";
import { streaksReducer, initStreaks } from "../../utils/streaksLocalStorage";

const StreakModeContext = createContext(null);

const StreakModeProvider = ({ children }) => {
  const [streaks, streaksDispatch] = useReducer(streaksReducer, initStreaks());
  const [isStreakModeOn, changeIsStreakModeOn] = useState(false);

  useEffect(() => {
    localStorage.setItem("streaks", JSON.stringify(streaks.list));
  }, [streaks.list]);
  return (
    <StreakModeContext.Provider
      value={{ streaks, streaksDispatch, isStreakModeOn, changeIsStreakModeOn }}
    >
      {children}
    </StreakModeContext.Provider>
  );
};

export { StreakModeContext, StreakModeProvider };
