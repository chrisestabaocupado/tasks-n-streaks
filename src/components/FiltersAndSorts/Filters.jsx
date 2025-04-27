import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";

const Filters = ({ setFilterCriterion, filterCriterion}) => {
  return (
    <div className="border border-dashed text-light-accent hover:text-light-border border-light-accent hover:border-light-border dark:text-dark-text-secondary dark:hover:text-dark-text-primary dark:border-dark-accent dark:hover:border-dark-border rounded-lg px-2 py-1 text-sm flex flex-row gap-2 items-center">
      <span
        className="cursor-pointer"
        onClick={() => setFilterCriterion({ criterion: "none", order: "asc" })}
      >
        <FontAwesomeIcon icon={faCircleXmark}></FontAwesomeIcon>
      </span>
      <span>
        {filterCriterion.criterion === "completed"
          ? "Completadas"
          : filterCriterion.criterion === "notCompleted"
          ? "Pendientes"
          : setFilterCriterion({ criterion: "none" })}
      </span>
    </div>
  );
};

export { Filters };
