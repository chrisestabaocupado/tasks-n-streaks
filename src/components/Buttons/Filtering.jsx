import { faFilter } from "@fortawesome/free-solid-svg-icons";
import { RectangleButton } from "./RectangleButton";
import { DropdownFilter } from "../Dropdown/DropdownFilter";
import { useContext } from "react";
import { FilterContext } from "../FiltersAndSorts/FilterContext";
import { SortContext } from "../FiltersAndSorts/SortContext";

const Filtering = () => {
  const { showFilterOptions, setShowFilterOptions } = useContext(FilterContext);

  return (
    <span>
      <RectangleButton
        icon={faFilter}
        text="Filtrar"
        onClick={() => {
          setShowFilterOptions((prev) => !prev);
        }}
      ></RectangleButton>
      {showFilterOptions && <DropdownFilter></DropdownFilter>}
    </span>
  );
};

export { Filtering };
