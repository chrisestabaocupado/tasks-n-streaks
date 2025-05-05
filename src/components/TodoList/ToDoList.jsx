import { GraySpanText } from "../utils/GraySpanText";
import { ToDoCard } from "./ToDoCard";
import { useContext } from "react";
import { ToDoContext, ToDoProvider } from "./ToDoContext";

const ToDoList = () => {
  // context
  const { todos, todosDispatch } = useContext(ToDoContext);
  const {renderedTodos} = useContext(ToDoContext);
  // stats
  let todosDone = todos.list.filter((todo) => todo.completed).length;
  let todosNotDone = todos.list.filter((todo) => !todo.completed).length;
  // component
  return (
    <ToDoProvider>
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
        <section className="flex flex-col items-center">
          <div className="w-full flex flex-row gap-2 justify-around">
            <GraySpanText
              text={"Tareas Completadas: " + todosDone}
            ></GraySpanText>

            <GraySpanText
              text={"Tareas Pendientes: " + todosNotDone}
            ></GraySpanText>
          </div>

          <GraySpanText
            text={"Total de Tareas: " + todos.list.length}
          ></GraySpanText>
        </section>
      </section>
    </ToDoProvider>
  );
};

export { ToDoList };
