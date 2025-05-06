import { useContext } from "react";
import { SortContext } from "../FiltersAndSorts/SortContext";
import { FilterContext } from "../FiltersAndSorts/FilterContext";
import { Filters } from "./Filters";
import { Sorts } from "./Sorts";

const ActiveSortsAndFilters = () => {
  const { sortCriterion, setSortCriterion } = useContext(SortContext);
  const { filterCriterion, setFilterCriterion } = useContext(FilterContext);

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
