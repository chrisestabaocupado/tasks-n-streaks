import { createContext, useState, useEffect } from "react";
//

import { initFilterCriterion } from "../../utils/filterUtils";
// context
const FilterContext = createContext(null);
// provider
const FilterProvider = ({ children }) => {
  // filter
  const [filterCriterion, setFilterCriterion] = useState(initFilterCriterion);
  // show filter options
  const [showFilterOptions, setShowFilterOptions] = useState(false);

  useEffect(() => {
    if (filterCriterion.criterion !== "none") {
      localStorage.setItem("filterCriterion", JSON.stringify(filterCriterion));
    } else {
      localStorage.removeItem("filterCriterion");
    }
  }, [filterCriterion]);

  return (
    <FilterContext.Provider
      value={{
        showFilterOptions,
        setShowFilterOptions,
        filterCriterion,
        setFilterCriterion,
      }}
    >
      {children}
    </FilterContext.Provider>
  );
};

export { FilterContext, FilterProvider };
