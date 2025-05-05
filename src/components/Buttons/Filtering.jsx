import { faFilter } from "@fortawesome/free-solid-svg-icons";
import { RectangleButton } from "./RectangleButton";
import { DropdownFilter } from "../Dropdown/DropdownFilter";
import { useContext } from "react";
import { RenderingContext } from "../Utils/RenderingContext";

const Filtering = () => {
  const { showFilterOptions, setShowFilterOptions, setShowSortOptions } =
    useContext(RenderingContext);

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
