import { DropdownListContainer } from "./DropdownListContainer";
import { DropdownItem } from "./DropdownItem";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { faX } from "@fortawesome/free-solid-svg-icons";

const DropdownFilter = ({
  setShowFilterOptions,
  setFilterCriterion,
}) => {
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
