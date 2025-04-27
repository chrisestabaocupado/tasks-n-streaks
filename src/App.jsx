// react
import { useEffect, useReducer, useState } from "react";
// components
import { ToDoCard } from "./components/ToDoCard/ToDoCard";
import { ToDoInput } from "./components/ToDoInput/ToDoInput";
import { ThemeToggler } from "./components/ThemeToggler";
import { GraySpanText } from "./components/GraySpanText";
import { RectangleButton } from "./components/RectangleButton";
import { DropdownSort } from "./components/Dropdown/DropdownSort";
import { Footer } from "./components/Footer";
//logic
import {
  initTodos,
  insertTodo,
  updateTodo,
  removeTodo,
} from "./utils/todosLocalStorage";
import { sortTodosByCriterion, initSortCriterion } from "./utils/sortingUtils";
// styles
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSort,
  faCircleXmark,
  faArrowDown,
  faArrowUp,
  faQuestion,
} from "@fortawesome/free-solid-svg-icons";
import "./App.css";
// my app <3
function App() {
  const todosReducer = (state, action) => {
    switch (action.type) {
      case "insert":
        return insertTodo(action.todo, state);
      case "update":
        return updateTodo(action.key, action.update, state);
      case "remove":
        return removeTodo(action.key, state);
      default:
        return state;
    }
  };

  // theme
  const [theme, changeTheme] = useState("light");
  // sorting
  const [sortCriterion, setSortCriterion] = useState(initSortCriterion);
  const [showSortOptions, setShowSortOptions] = useState(false);
  // todos
  const [todos, todosDispatch] = useReducer(todosReducer, undefined, initTodos);
  let todosDone = todos.list.filter((todo) => todo.completed).length;
  let todosNotDone = todos.list.filter((todo) => !todo.completed).length;
  let renderedTodos = sortTodosByCriterion(todos, sortCriterion);

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    const storedSortCriterion = localStorage.getItem("sortCriterion");
    if (storedTheme) {
      changeTheme(storedTheme);
      storedTheme === "dark"
        ? document.querySelector("body").classList.toggle("dark")
        : document.querySelector("body").classList.remove("dark");
    } else if (storedSortCriterion) {
      setSortCriterion(JSON.parse(storedSortCriterion));
    } else {
      // establecer tema por defecto
      localStorage.setItem("theme", "light");
      // establecer creterio de ordenamiento por defecto
      localStorage.setItem(
        "sortCriterion",
        JSON.stringify({ criterion: "none", order: "asc" })
      );
    }
  }, []);

  useEffect(() => {
    if (theme === "dark") {
      document.body.classList.toggle("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, [theme]);

  useEffect(() => {
    if (sortCriterion.criterion !== "none") {
      localStorage.setItem("sortCriterion", JSON.stringify(sortCriterion));
    } else {
      localStorage.removeItem("sortCriterion");
    }
  }, [sortCriterion]);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos.list));
  }, [todos.list]);

  return (
    <div className="bg-light-primary dark:bg-dark-primary w-full">
      <main className="min-h-screen max-w-sm mx-auto px-5 sm:px-0 flex flex-col gap-5">
        <section className="flex flex-col w-full pt-5 gap-5 bg-light-primary dark:bg-dark-primary">
          <div className="flex flex-row w-full items-end justify-between">
            <h1 className="text-3xl font-bold text-light-text-primary dark:text-dark-text-primary">
              Mi lista de tareas
            </h1>
            <ThemeToggler
              theme={theme}
              changeTheme={changeTheme}
            ></ThemeToggler>
          </div>
          <div className="flex flex-col gap-4">
            <ToDoInput todosDispatch={todosDispatch}></ToDoInput>
            <div className="flex flex-row items-center gap-4">
              <div className="relative z-50 flex flex-col gap-20 items-start">
                <RectangleButton
                  icon={faSort}
                  text="Ordenar"
                  onClick={() => setShowSortOptions((prev) => !prev)}
                ></RectangleButton>
                {showSortOptions && (
                  <DropdownSort
                    setShowSortOptions={setShowSortOptions}
                    sortCriterion={sortCriterion}
                    setSortCriterion={setSortCriterion}
                  ></DropdownSort>
                )}
              </div>

              <span className="ml-auto">
                <GraySpanText
                  text={"Total de Tareas: " + todos.list.length}
                ></GraySpanText>
              </span>
            </div>
            {/* Sorts y Filtros */}
            {sortCriterion.criterion !== "none" && (
              <div className="flex flex-row gap-5">
                <div className="border border-dashed text-light-accent hover:text-light-border border-light-accent hover:border-light-border dark:text-dark-text-secondary dark:hover:text-dark-text-primary dark:border-dark-accent dark:hover:border-dark-border rounded-lg px-2 py-1 text-sm flex flex-row gap-2 items-center">
                  <span
                    className="cursor-pointer"
                    onClick={() =>
                      setSortCriterion({ criterion: "none", order: "asc" })
                    }
                  >
                    <FontAwesomeIcon icon={faCircleXmark}></FontAwesomeIcon>
                  </span>
                  <span>
                    {sortCriterion.criterion === "title"
                      ? "Por titulo"
                      : sortCriterion.criterion === "completed"
                      ? "Por estado"
                      : setSortCriterion({ criterion: "none", order: "asc" })}
                  </span>
                  <span className="text-[10px]">
                    {sortCriterion.order === "asc" ? (
                      <FontAwesomeIcon icon={faArrowUp}></FontAwesomeIcon>
                    ) : sortCriterion.order === "desc" ? (
                      <FontAwesomeIcon icon={faArrowDown}></FontAwesomeIcon>
                    ) : (
                      <FontAwesomeIcon icon={faQuestion}></FontAwesomeIcon>
                    )}
                  </span>
                </div>
              </div>
            )}
          </div>
        </section>
        <section className="flex flex-col gap-5 todos">
          {renderedTodos.map((todo) => (
            <ToDoCard
              todosDispatch={todosDispatch}
              key={todo.id}
              id={todo.id}
              completed={todo.completed}
              title={todo.title}
            />
          ))}
        </section>
        <section className="flex flex-row justify-around items-center">
          <GraySpanText
            text={"Tareas Completadas: " + todosDone}
          ></GraySpanText>

          <GraySpanText
            text={"Tareas Pendientes: " + todosNotDone}
          ></GraySpanText>
        </section>
        <Footer></Footer>
      </main>
    </div>
  );
}

export default App;
