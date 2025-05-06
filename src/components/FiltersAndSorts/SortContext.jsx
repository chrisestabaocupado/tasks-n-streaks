import { createContext, useEffect, useState } from "react";
import { initSortCriterion } from "../../utils/sortingUtils";

const SortContext = createContext(null);

const SortProvider = ({ children }) => {
  // sorting
  const [sortCriterion, setSortCriterion] = useState(initSortCriterion);
  const [showSortOptions, setShowSortOptions] = useState(false);
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
    if (sortCriterion.criterion !== "none") {
      localStorage.setItem("sortCriterion", JSON.stringify(sortCriterion));
    } else {
      localStorage.removeItem("sortCriterion");
    }
  }, [sortCriterion]);
  
  return (
    <SortContext.Provider
      value={{
        showSortOptions,
        setShowSortOptions,
        sortCriterion,
        setSortCriterion,
      }}
    >
      {children}
    </SortContext.Provider>
  );
};

export { SortContext, SortProvider };
