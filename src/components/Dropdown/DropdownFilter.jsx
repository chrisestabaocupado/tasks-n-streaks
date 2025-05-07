import { DropdownListContainer } from "./DropdownListContainer";
import { DropdownItem } from "./DropdownItem";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { faX } from "@fortawesome/free-solid-svg-icons";
import { useContext, useEffect, useRef } from "react";
import { FilterContext } from "../FiltersAndSorts/FilterContext";

const DropdownFilter = () => {
  const { setShowFilterOptions, setFilterCriterion } =
    useContext(FilterContext);
  // dropdownRef to close dropdown when clicking outside
  const id = "dropdownFilter";
  const dropdownRef = useRef(null);
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowFilterOptions(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  });
  // component
  return (
    <DropdownListContainer
      onMouseLeave={() => setShowFilterOptions(false)}
      ref={dropdownRef}
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
