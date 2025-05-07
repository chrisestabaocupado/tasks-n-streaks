import { format } from "date-fns";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { RectangleButton } from "../Buttons/RectangleButton";
import { getDayOfTheWeek } from "../../utils/calendarUtils";
import { faCheck, faX } from "@fortawesome/free-solid-svg-icons";
import { useContext } from "react";
import { StreakModeContext } from "./StreakModeContext";

const WeekButtons = ({ id, week, weekData }) => {
  const { streaksDispatch } = useContext(StreakModeContext);

  const handleClick = (dateStr, currentStatus) => {
    const newStatus = !currentStatus; // Toggle del estado actual
    streaksDispatch({ type: "updateLog", key: id, dateStr, status: newStatus });
  };

  return (
    <div className="flex flex-row w-full justify-between items-center gap-3">
      {week.map((day, index) => {
        const dateStr = format(day, "yyyy-MM-dd");
        const currentStatus = weekData[index];

        return (
          <div
            key={dateStr}
            onClick={() => handleClick(dateStr, currentStatus)}
            className="flex flex-col items-center gap-3"
          >
            <span className="mx-auto text-sm text-light-text-primary dark:text-dark-text-primary">
              {getDayOfTheWeek(day)}
            </span>
            <RectangleButton
              text={
                currentStatus ? (
                  <FontAwesomeIcon className="text-green-400 text-sm" icon={faCheck} />
                ) : (
                  <FontAwesomeIcon className="text-sm" icon={faX} />
                )
              }
            />
          </div>
        );
      })}
    </div>
  );
};

export { WeekButtons };
