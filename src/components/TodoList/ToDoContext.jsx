import { createContext, useEffect } from "react";
import { useReducer } from "react";
import { initTodos, todosReducer } from "../../utils/todosLocalStorage";
import { useContext } from "react";
import { RenderingContext } from "../Utils/RenderingContext";
//logic
import { sortTodosByCriterion } from "../../utils/sortingUtils";
import { filterBy } from "../../utils/filterUtils";
const ToDoContext = createContext(null);

const ToDoProvider = ({ children }) => {
  const { sortCriterion, filterCriterion } = useContext(RenderingContext);
  // todos
  const [todos, todosDispatch] = useReducer(todosReducer, undefined, initTodos);
  const renderedTodos = sortTodosByCriterion(
    filterBy(todos.list, filterCriterion.criterion),
    sortCriterion
  );

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos.list));
  }, [todos.list]);

  return (
    <ToDoContext.Provider value={{ todos, todosDispatch, renderedTodos }}>
      {children}
    </ToDoContext.Provider>
  );
};

export { ToDoContext, ToDoProvider };
