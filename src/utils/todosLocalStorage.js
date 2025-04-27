import uniqid from "uniqid";

const initTodos = () => {
  const stored = localStorage.getItem("todos");
  return {
    list: stored ? JSON.parse(stored) : [],
  };
};

const insertTodo = (todo, state) => {
  if (todo.trim() !== "") {
    let obj = { id: uniqid.time(), title: todo, completed: false };
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

export { initTodos, insertTodo, updateTodo, removeTodo };
