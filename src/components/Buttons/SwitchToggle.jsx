import { useContext } from "react";
import { StreakModeContext } from "../StreakMode/StreakModeContext";
import { faFire } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SwitchToggle = () => {
  const { isStreakModeOn, changeIsStreakModeOn } =
    useContext(StreakModeContext);

  const circleClasses = `transition-all duration-300 duration-300 flex items-center justify-center border border-light-border  dark:border-dark-border dark:bg-dark-primary bg-light-primary w-8 h-full rounded-full z-10 ${
    isStreakModeOn ? "ml-auto" : ""
  }`;

  return (
    <label
      className="relative flex flex-row cursor-pointer w-14 h-9 rounded-full border border-light-border hover:shadow-sm dark:border-dark-accent transition-all duration-300"
      htmlFor="streakModeToggle"
    >
      <input
        aria-label="Activar modo racha"
        id="streakModeToggle"
        className="sr-only"
        type="checkbox"
        checked={isStreakModeOn}
        onChange={() => changeIsStreakModeOn((prev) => !prev)}
      />
      {isStreakModeOn && (
        <div className="z-0 absolute rounded-full w-full h-full bg-light-text-secondary dark:bg-dark-secondary"></div>
      )}
      <span className={circleClasses}>
        {isStreakModeOn && (
          <FontAwesomeIcon
            className="text-light-text-secondary text-sm dark:text-dark-text-secondary"
            icon={faFire}
          ></FontAwesomeIcon>
        )}
      </span>
    </label>
  );
};

export { SwitchToggle };
