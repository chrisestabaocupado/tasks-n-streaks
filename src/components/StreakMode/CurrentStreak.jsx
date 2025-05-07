import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFire } from "@fortawesome/free-solid-svg-icons";

const CurrentStreak = ({ streak }) => {
  return (
    <div className="flex flex-col">
      <span className="text-light-text-secondary dark:text-dark-text-secondary text-sm">
        Racha actual
      </span>
      <div className="flex flex-row items-center gap-2">
        <FontAwesomeIcon className="text-red-400" icon={faFire} />
        <h2 className="text-light-text-primary dark:text-dark-text-primary text-lg">
          {streak}
        </h2>
      </div>
    </div>
  );
};

export { CurrentStreak };
