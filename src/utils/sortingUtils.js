const initSortCriterion = () => {
    const storedSortCriterion = localStorage.getItem("sortCriterion");
    if (storedSortCriterion) {
      return JSON.parse(storedSortCriterion);
    } else {
      return { criterion: "none", order: "asc" };
    }
  };

const sortTodosByCriterion = (todos, sortCriterion) => {
  if (sortCriterion.criterion !== "none") {
    const sortedTodos = [...todos.list].sort((a, b) => {
      if (sortCriterion.criterion === "title") {
        return sortCriterion.order === "asc"
          ? a.title.localeCompare(b.title)
          : b.title.localeCompare(a.title);
      } else if (sortCriterion.criterion === "completed") {
        return sortCriterion.order === "asc"
          ? a.completed - b.completed
          : b.completed - a.completed;
      }else{
        console.error("Invalid sort criterion:", sortCriterion.criterion);
        return todos.list
      }
      
    });
    console.log(sortedTodos)
    return sortedTodos;
  } else {
    return todos.list
  }
};


export { sortTodosByCriterion, initSortCriterion };