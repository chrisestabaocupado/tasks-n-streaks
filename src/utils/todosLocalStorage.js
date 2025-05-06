import { nanoid } from "nanoid";

const initTodos = () => {
  const stored = localStorage.getItem("todos");
  return {
    list: stored ? JSON.parse(stored) : [],
  };
};

const insertTodo = (todo, state) => {
  if (todo.trim() !== "") {
    let obj = { id: nanoid(), title: todo, completed: false };
    return {
      list: [...state.list, obj],
    };
  }
  return state;
};

const updateTodo = (key, update, state) => {
  let updateTodos = state.list.map((todo) =>
    todo.id === key ? Object.assign(todo, update) : todo
  );
  return {
    list: updateTodos,
  };
};

const removeTodo = (key, state) => {
  const filteredTodos = state.list.filter((todo) => todo.id !== key);
  return {
    list: filteredTodos,
  };
};

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

export { todosReducer, initTodos, insertTodo, updateTodo, removeTodo };
