import { faFilter } from "@fortawesome/free-solid-svg-icons";
import { RectangleButton } from "./RectangleButton";
import { DropdownFilter } from "../Dropdown/DropdownFilter";
import { useContext } from "react";
import { FilterContext } from "../FiltersAndSorts/FilterContext";
import { SortContext } from "../FiltersAndSorts/SortContext";

const Filtering = () => {
  const { showFilterOptions, setShowFilterOptions } = useContext(FilterContext);
  const { setShowSortOptions } = useContext(SortContext);

  return (
    <div className="relative z-50 flex flex-col items-start gap-20">
      <RectangleButton
        icon={faFilter}
        text="Filtrar"
        onClick={() => {
          setShowSortOptions(false);
          setShowFilterOptions((prev) => !prev);
        }}
      ></RectangleButton>
      {showFilterOptions && <DropdownFilter></DropdownFilter>}
    </div>
  );
};

export { Filtering };
