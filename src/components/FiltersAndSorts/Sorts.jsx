import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark, faArrowUp, faArrowDown, faQuestion } from "@fortawesome/free-solid-svg-icons";

const Sorts = ({setSortCriterion, sortCriterion }) => {
  return (
    <div className="border border-dashed text-light-accent hover:text-light-border border-light-accent hover:border-light-border dark:text-dark-text-secondary dark:hover:text-dark-text-primary dark:border-dark-accent dark:hover:border-dark-border rounded-lg px-2 py-1 text-sm flex flex-row gap-2 items-center">
      <span
        className="cursor-pointer"
        onClick={() => setSortCriterion({ criterion: "none", order: "asc" })}
      >
        <FontAwesomeIcon icon={faCircleXmark}></FontAwesomeIcon>
      </span>
      <span>
        {sortCriterion.criterion === "title"
          ? "Por titulo"
          : sortCriterion.criterion === "completed"
          ? "Por estado"
          : setSortCriterion({ criterion: "none", order: "asc" })}
      </span>
      <span className="text-[10px]">
        {sortCriterion.order === "asc" ? (
          <FontAwesomeIcon icon={faArrowUp}></FontAwesomeIcon>
        ) : sortCriterion.order === "desc" ? (
          <FontAwesomeIcon icon={faArrowDown}></FontAwesomeIcon>
        ) : (
          <FontAwesomeIcon icon={faQuestion}></FontAwesomeIcon>
        )}
      </span>
    </div>
  );
};


export { Sorts };