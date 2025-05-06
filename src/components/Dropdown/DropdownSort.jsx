import { DropdownListContainer } from "./DropdownListContainer";
import { DropdownItem } from "./DropdownItem";
import {
  faArrowUpAZ,
  faArrowDownZA,
  faArrowDownAZ,
  faArrowDownShortWide,
  faArrowUpShortWide,
} from "@fortawesome/free-solid-svg-icons";
import { useContext } from "react";
import { SortContext } from "../FiltersAndSorts/SortContext";

const DropdownSort = () => {
  const { setShowSortOptions, sortCriterion, setSortCriterion } =
    useContext(SortContext);
  const id = "dropdownSort";
  return (
    <DropdownListContainer
      onMouseLeave={() => setShowSortOptions(false)}
      id={id}
    >
      <DropdownItem
        title="por Titulo"
        icon={
          sortCriterion.criterion === "title"
            ? sortCriterion.order === "desc"
              ? faArrowDownZA
              : faArrowUpAZ
            : faArrowDownAZ
        }
        onClick={() => {
          setSortCriterion((prev) =>
            prev.criterion === "title" && prev.order === "desc"
              ? { criterion: "title", order: "asc" }
              : { criterion: "title", order: "desc" }
          );
          setShowSortOptions(false);
        }}
      ></DropdownItem>
      <DropdownItem
        title="por Estado"
        icon={
          sortCriterion.criterion === "completed"
            ? sortCriterion.order === "desc"
              ? faArrowDownShortWide
              : faArrowUpShortWide
            : faArrowDownAZ
        }
        onClick={() => {
          setSortCriterion((prev) =>
            prev.criterion === "completed" && prev.order === "desc"
              ? { criterion: "completed", order: "asc" }
              : { criterion: "completed", order: "desc" }
          );
          setShowSortOptions(false);
        }}
      ></DropdownItem>
    </DropdownListContainer>
  );
};

export { DropdownSort };
