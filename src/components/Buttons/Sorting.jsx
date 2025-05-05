import { RectangleButton } from "./RectangleButton";
import { DropdownSort } from "../Dropdown/DropdownSort";
import { faSort } from "@fortawesome/free-solid-svg-icons";
import { useContext } from "react";
import { RenderingContext } from "../Utils/RenderingContext";

const Sorting = () => {
  const { setShowSortOptions, setShowFilterOptions, showSortOptions } =
    useContext(RenderingContext);
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
