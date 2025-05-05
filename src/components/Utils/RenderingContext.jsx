import { createContext, useState, useEffect } from "react";
//
import { initSortCriterion } from "../../utils/sortingUtils";
import { initFilterCriterion } from "../../utils/filterUtils";
// context
const RenderingContext = createContext(null);
// provider
const RenderingProvider = ({ children }) => {
  // sorting
  const [sortCriterion, setSortCriterion] = useState(initSortCriterion);
  const [showSortOptions, setShowSortOptions] = useState(false);
  // filter
  const [filterCriterion, setFilterCriterion] = useState(initFilterCriterion);
  const [showFilterOptions, setShowFilterOptions] = useState(false);
  // effects
  useEffect(() => {
    const storedSortCriterion = localStorage.getItem("sortCriterion");

    if (storedSortCriterion) {
      setSortCriterion(JSON.parse(storedSortCriterion));
    } else {
      // Establecer criterio de ordenación por defecto
      localStorage.setItem(
        "sortCriterion",
        JSON.stringify({ criterion: "none", order: "asc" })
      );
    }
  }, [setSortCriterion]);

  useEffect(() => {
    if (filterCriterion.criterion !== "none") {
      localStorage.setItem("filterCriterion", JSON.stringify(filterCriterion));
    } else {
      localStorage.removeItem("filterCriterion");
    }
  }, [filterCriterion]);

  useEffect(() => {
    if (sortCriterion.criterion !== "none") {
      localStorage.setItem("sortCriterion", JSON.stringify(sortCriterion));
    } else {
      localStorage.removeItem("sortCriterion");
    }
  }, [sortCriterion]);

  return (
    <RenderingContext.Provider
      value={{
        sortCriterion,
        setSortCriterion,
        showSortOptions,
        setShowSortOptions,
        filterCriterion,
        setFilterCriterion,
        showFilterOptions,
        setShowFilterOptions,
      }}
    >
      {children}
    </RenderingContext.Provider>
  );
};

export { RenderingContext, RenderingProvider };
