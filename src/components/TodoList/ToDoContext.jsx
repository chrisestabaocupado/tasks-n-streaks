import { createContext, useEffect } from "react";
import { useReducer } from "react";
import { initTodos, todosReducer } from "../../utils/todosLocalStorage";

const ToDoContext = createContext(null);

const ToDoProvider = ({ children }) => {
  // todos
  const [todos, todosDispatch] = useReducer(todosReducer, undefined, initTodos);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos.list));
  }, [todos.list]);

  return (
    <ToDoContext.Provider value={{ todos, todosDispatch }}>
      {children}
    </ToDoContext.Provider>
  );
};

export { ToDoContext, ToDoProvider };
