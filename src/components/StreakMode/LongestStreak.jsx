import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrophy } from "@fortawesome/free-solid-svg-icons";

const LongestStreak = ({ streak }) => {
  return (
    <div className="flex flex-col">
      <span className="text-light-text-secondary dark:text-dark-text-secondary text-sm">
        Racha más larga
      </span>
      <div className="flex flex-row items-center gap-2">
        <FontAwesomeIcon className="text-amber-300" icon={faTrophy} />
        <h2 className="text-light-text-primary dark:text-dark-text-primary text-lg">
          {streak}
        </h2>
      </div>
    </div>
  );
};

export { LongestStreak };