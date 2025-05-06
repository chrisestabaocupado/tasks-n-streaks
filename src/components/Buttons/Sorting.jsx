import { RectangleButton } from "./RectangleButton";
import { useContext } from "react";
import { DropdownSort } from "../Dropdown/DropdownSort";
import { faSort } from "@fortawesome/free-solid-svg-icons";
import { SortContext } from "../FiltersAndSorts/SortContext";
import { FilterContext } from "../FiltersAndSorts/FilterContext";

const Sorting = () => {
  const { showSortOptions, setShowSortOptions } = useContext(SortContext);
  const { setShowFilterOptions } = useContext(FilterContext);

  return (
    <div className="relative z-50 flex flex-col items-start gap-20">
      <RectangleButton
        icon={faSort}
        text="Ordenar"
        onClick={() => {
          setShowFilterOptions(false);
          setShowSortOptions((prev) => !prev);
        }}
      ></RectangleButton>
      {showSortOptions && <DropdownSort></DropdownSort>}
    </div>
  );
};

export { Sorting };
