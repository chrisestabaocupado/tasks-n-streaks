import { playSound } from "./buttonsInteraction";
import uniqid from "uniqid";

const insertTodo = (todo, setTodo, todos, setTodos) => {
  if (todo.trim() !== "") {
    let obj = { id: uniqid.time(), title: todo, completed: false };
    setTodos([...todos, obj]);
    playSound("/sounds/pop.mp3");
    setTodo("");
    console.log("done", todos);
  }
};

const updateTodo = (e, update, todos, setTodos) => {
  const key = e.currentTarget.dataset.key;
  let updateTodos = todos.map((todo) =>
    todo.id === key ? Object.assign(todo, update) : todo
  );
  if(update.completed) playSound("/sounds/positive_done.mp3")
  setTodos(updateTodos);
};

const removeTodo = (e, todos, setTodos) => {
  const key = e.currentTarget.dataset.key;
  const filteredTodos = todos.filter((todo) => todo.id !== key);
  setTodos(filteredTodos);
};

export { insertTodo, updateTodo, removeTodo};
