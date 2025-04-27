const initFilterCriterion = () => {
    const storedFilterCriterion = localStorage.getItem("filterCriterion");
    if (storedFilterCriterion) {
        return JSON.parse(storedFilterCriterion);
    } else {
        return { criterion: "none" };
    }
}

const filterBy = (todos, filterCriterion) => {
    switch (filterCriterion) {
        case "completed":
            return todos.filter((todo) => todo.completed === true);
        case "notCompleted":
            return todos.filter((todo) => todo.completed === false);
        case "none":
            return todos;
        default:
            return todos;
    }
}

export { initFilterCriterion, filterBy };