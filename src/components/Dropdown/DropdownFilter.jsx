import { DropdownListContainer } from "./DropdownListContainer";
import { DropdownItem } from "./DropdownItem";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { faX } from "@fortawesome/free-solid-svg-icons";
import { useContext } from "react";
import { FilterContext } from "../FiltersAndSorts/FilterContext";

const DropdownFilter = () => {
  const { setShowFilterOptions, setFilterCriterion } =
    useContext(FilterContext);
  const id = "dropdownFilter";
  return (
    <DropdownListContainer
      onMouseLeave={() => setShowFilterOptions(false)}
      id={id}
    >
      <DropdownItem
        title="Completadas"
        icon={faCheck}
        onClick={() => {
          setFilterCriterion({ criterion: "completed" });
          setShowFilterOptions(false);
        }}
      ></DropdownItem>
      <DropdownItem
        title="Pendientes"
        icon={faX}
        onClick={() => {
          setFilterCriterion({ criterion: "notCompleted" });
          setShowFilterOptions(false);
        }}
      ></DropdownItem>
    </DropdownListContainer>
  );
};

export { DropdownFilter };
