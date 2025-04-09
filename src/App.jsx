// react
import { useState, useEffect } from "react";
// components
import { ToDoCard } from "./components/ToDoCard/ToDoCard";
import { ToDoInput } from "./components/ToDoInput/ToDoInput";
import { GraySpanText } from "./components/GraySpanText";
// styles
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import "./App.css";
// my app <3
function App() {
  let [todos, setTodos] = useState(() => {
    const stored = localStorage.getItem('todos');
    console.log("stored", stored);
    return stored ? JSON.parse(stored) : [];
  });

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  let todosDone = todos.filter((todo) => todo.completed);
  let todosNotDone = todos.filter((todo) => !todo.completed);

  return (
    <main className="min-h-screen max-w-md mx-auto flex flex-col gap-5">
      <h1 className="text-3xl font-bold mt-5">Mi lista de tareas</h1>
      <section className="text-right">
        <ToDoInput todos={todos} setTodos={setTodos}></ToDoInput>
        <GraySpanText text={"Total de Tareas: " + todos.length}></GraySpanText>
      </section>
      <section className="flex flex-col gap-5">
        {todos.map((todo) => (
          <ToDoCard
            todos={todos} setTodos={setTodos}
            key={todo.id}
            id={todo.id}
            completed={todo.completed}
            title={todo.title}
          />
        ))}
      </section>
      <section className="flex flex-row justify-around items-center">
        <GraySpanText
          text={"Tareas Completadas: " + todosDone.length}
        ></GraySpanText>

        <GraySpanText
          text={"Tareas Pendientes: " + todosNotDone.length}
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
