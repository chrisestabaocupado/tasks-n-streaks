// react
import { useEffect, useReducer } from "react";
// components
import { ToDoCard } from "./components/ToDoCard/ToDoCard";
import { ToDoInput } from "./components/ToDoInput/ToDoInput";
import { GraySpanText } from "./components/GraySpanText";
//logic
import { insertTodo, updateTodo, removeTodo } from "./utils/todosLocalStorage";
// styles
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import "./App.css";
// my app <3
function App() {

  const todosReducer = (state, action) => {
    switch (action.type) {
      case 'insert':
        return insertTodo(action.todo, state)
      case 'update':
        return updateTodo(action.key, action.update, state);
      case 'remove':
        return removeTodo(action.key, state);
      default:
        return state;
    }
  }

  const init = () => {
    const stored = localStorage.getItem('todos');
    console.log("Estos son los todos guardados:", stored);
    return {
      list: stored ? JSON.parse(stored) : []
    }
  }

  const [todos, todosDispatch] = useReducer(todosReducer, undefined, init )

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos.list));
  }, [todos.list]);

/*   let todosDone = todos.list.filter((todo) => todo.completed);
  let todosNotDone = todos.list.filter((todo) => !todo.completed); */

  return (
    <main className="min-h-screen max-w-md mx-auto px-5 sm:px-0 flex flex-col gap-5">
      <h1 className="text-3xl font-bold mt-5">Mi lista de tareas</h1>
      <section className="text-right">
        <ToDoInput todosDispatch={todosDispatch}></ToDoInput>
        <GraySpanText text={"Total de Tareas: " + [].length}></GraySpanText>
      </section>
      <section className="flex flex-col gap-5">
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
          text={"Tareas Completadas: " + [].length}
        ></GraySpanText>

        <GraySpanText
          text={"Tareas Pendientes: " + [].length}
        ></GraySpanText>
      </section>

      <footer className="tex-lg text-gray-500 py-4 flex flex-row gap-2 mt-auto justify-center items-center">
        <span>Made with</span>
        <FontAwesomeIcon className="text-gray-800" icon={faHeart} />
        <span>by Christopher Glood</span>
      </footer>
    </main>
  );
}

export default App;
