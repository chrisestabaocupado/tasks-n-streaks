import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { getCurrentWeek, analyzeLogs } from "../../utils/calendarUtils";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { CurrentStreak } from "./CurrentStreak";
import { LongestStreak } from "./LongestStreak";
import { DropdownHabit } from "../Dropdown/DropdownHabit";
import { WeekButtons } from "./WeekButton";
import { faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { faEllipsisVertical } from "@fortawesome/free-solid-svg-icons";

const HabitCard = ({ habitData }) => {
  const analyzedLogs = analyzeLogs(habitData.logs);
  const weekData = analyzedLogs.weekData;
  const [showDetails, setShowDetails] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  // week data to construct buttons
  const week = getCurrentWeek();
  return (
    <div className="flex flex-col border border-light-accent hover:border-light-border dark:border-dark-accent dark:hover:border-dark-border rounded-lg max-w-md gap-4 p-4 hover:shadow-sm transition-all duration-300 ease-in-out">
      <div className="flex flex-row justify-between items-center">
        <span className="flex flex-row gap-2 items-center">
          <h2 className="w-full wrap-anywhere text-light-text-primary dark:text-dark-text-primary text-lg">
            {habitData.title}
          </h2>
        </span>
        <div className="flex flex-row gap-2 items-center">
          <span>
            <button
              onClick={() => setShowDropdown((prev) => !prev)}
              className="text-sm py-1 px-3 rounded-lg text-light-text-secondary hover:text-light-primary hover:bg-light-accent dark:text-dark-text-secondary dark:hover:bg-dark-secondary dark:hover:text-dark-text-secondary hover:cursor-pointer transition-colors duration-300 ease-in-out"
            >
              <FontAwesomeIcon icon={faEllipsisVertical} />
            </button>
            {showDropdown && <DropdownHabit id={habitData.id} setShowDropdown={setShowDropdown}></DropdownHabit>}
          </span>
          <button
            onClick={() => setShowDetails((prev) => !prev)}
            className="text-sm py-1 px-2 rounded-lg text-light-text-secondary hover:text-light-primary hover:bg-light-accent dark:text-dark-text-secondary dark:hover:bg-dark-secondary dark:hover:text-dark-text-secondary hover:cursor-pointer transition-colors duration-300 ease-in-out"
          >
            <FontAwesomeIcon icon={showDetails ? faChevronUp : faChevronDown} />
          </button>
        </div>
      </div>

      {showDetails && (
        <>
          <div className="flex flex-row justify-between items-center">
            <CurrentStreak streak={analyzedLogs.currentStreak}></CurrentStreak>
            <LongestStreak streak={analyzedLogs.longestStreak}></LongestStreak>
          </div>
          <div className="flex flex-col gap-3">
            <span>Últimos días:</span>
            <WeekButtons id={habitData.id} week={week} weekData={weekData}></WeekButtons>
          </div>
        </>
      )}
    </div>
  );
};

export { HabitCard };
