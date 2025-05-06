import { createContext, useContext } from "react";
import { SortContext } from "../FiltersAndSorts/SortContext";
import { FilterContext } from "../FiltersAndSorts/FilterContext";
import { ToDoContext } from "./ToDoContext";
import { sortTodosByCriterion } from "../../utils/sortingUtils";
import { filterBy } from "../../utils/filterUtils";

const ToDoRenderingContext = createContext(null);

const ToDoRenderingProvider = ({ children }) => {
  const { sortCriterion } = useContext(SortContext);
  const { filterCriterion } = useContext(FilterContext);
  const { todos } = useContext(ToDoContext);

  // Filtrado y ordenado
  const renderedTodos = sortTodosByCriterion(
    filterBy(todos.list, filterCriterion.criterion),
    sortCriterion
  );

  return (
    <ToDoRenderingContext.Provider value={{renderedTodos}}>
      {children}
    </ToDoRenderingContext.Provider>
  );
};

export { ToDoRenderingContext, ToDoRenderingProvider };
