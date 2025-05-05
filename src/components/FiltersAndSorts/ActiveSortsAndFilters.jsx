import { useContext } from "react";
import { RenderingContext } from "../Utils/RenderingContext";
import { Filters } from "./Filters";
import { Sorts } from "./Sorts";

const ActiveSortsAndFilters = () => {
  const {
    sortCriterion,
    filterCriterion,
    setFilterCriterion,
    setSortCriterion,
  } = useContext(RenderingContext);
  return (
    (sortCriterion.criterion !== "none" ||
      filterCriterion.criterion !== "none") && (
      <div className="flex flex-row gap-5">
        {sortCriterion.criterion !== "none" && (
          <Sorts
            sortCriterion={sortCriterion}
            setSortCriterion={setSortCriterion}
          ></Sorts>
        )}
        {filterCriterion.criterion !== "none" && (
          <Filters
            filterCriterion={filterCriterion}
            setFilterCriterion={setFilterCriterion}
          ></Filters>
        )}
      </div>
    )
  );
};

export { ActiveSortsAndFilters };
