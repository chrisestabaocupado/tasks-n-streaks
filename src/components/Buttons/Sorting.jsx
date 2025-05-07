import { RectangleButton } from "./RectangleButton";
import { useContext } from "react";
import { DropdownSort } from "../Dropdown/DropdownSort";
import { faSort } from "@fortawesome/free-solid-svg-icons";
import { SortContext } from "../FiltersAndSorts/SortContext";
import { FilterContext } from "../FiltersAndSorts/FilterContext";

const Sorting = () => {
  const { showSortOptions, setShowSortOptions } = useContext(SortContext);

  return (
    <span>
      <RectangleButton
        icon={faSort}
        text="Ordenar"
        onClick={() => {
          setShowSortOptions((prev) => !prev);
        }}
      ></RectangleButton>
      {showSortOptions && <DropdownSort></DropdownSort>}
    </span>
  );
};

export { Sorting };
