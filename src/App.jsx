// react
import { useEffect, useReducer, useState } from "react";
// components
import { ToDoCard } from "./components/ToDoCard/ToDoCard";
import { ToDoInput } from "./components/ToDoInput/ToDoInput";
import { ThemeToggler } from "./components/ThemeToggler";
import { GraySpanText } from "./components/GraySpanText";
import { RectangleButton } from "./components/RectangleButton";
//logic
import { insertTodo, updateTodo, removeTodo } from "./utils/todosLocalStorage";
// styles
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faFilter, faSort } from "@fortawesome/free-solid-svg-icons";
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

  const init = () => {
    const stored = localStorage.getItem("todos");
    return {
      list: stored ? JSON.parse(stored) : [],
    };
  };

  const [todos, todosDispatch] = useReducer(todosReducer, undefined, init);
  const [theme, changeTheme] = useState("dark");

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos.list));
  }, [todos.list]);

  let todosDone = todos.list.filter((todo) => todo.completed).length;
  let todosNotDone = todos.list.filter((todo) => !todo.completed).length;

  return (
    <div className="bg-light-primary dark:bg-dark-primary w-full">
      <main className="min-h-screen max-w-md mx-auto px-5 sm:px-0 flex flex-col gap-5">
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
              <RectangleButton icon={faFilter} text="Filtrar"></RectangleButton>
              <RectangleButton icon={faSort} text="Ordenar"></RectangleButton>

              <span className="ml-auto">
                <GraySpanText
                  text={"Total de Tareas: " + todos.list.length}
                ></GraySpanText>
              </span>
            </div>
          </div>
        </section>
        <section className="flex flex-col gap-5 todos">
          {todos.list.map((todo) => (
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

        <footer className="bg-light-primary dark:bg-dark-primary sticky bottom-0 tex-lg text-light-text-secondary dark:text-dark-text-secondary py-4 flex flex-row gap-2 mt-auto justify-center items-center">
          <span>Made with</span>
          <FontAwesomeIcon
            className="text-light-text-primary dark:text-dark-text-primary"
            icon={faHeart}
          />
          <span>by Christopher Glood</span>
        </footer>
      </main>
    </div>
  );
}

export default App;
