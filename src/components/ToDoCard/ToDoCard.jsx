/* import styles from './ToDoCard.module.css'; */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-regular-svg-icons";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { updateTodo, removeTodo } from "../../utils/todosLocalStorage";

const ToDoCard = ({ title, id, completed, todos, setTodos }) => {

  return (
    <div className="flex flex-row border justify-between border-gray-300 rounded-lg max-w-md p-4 gap-4 hover:shadow-sm transition-shadow duration-300 ease-in-out">
      <div className="flex flex-col justify-center">
        <button
          onClick={(e) => updateTodo(e, { completed: !completed }, todos, setTodos)}
          data-key={id}
          className="text-gray-400 hover:cursor-pointer hover:text-black transition-colors duration-300 ease-in-out"
        >
          <FontAwesomeIcon
            className={
              completed ?
                "text-xl text-green-400 hover:text-green-300 transition-colors duration-300 ease-in-out" : 
                "text-xl"
            }
            icon={faCircleCheck}
          />
        </button>
      </div>

      <div className="w-full wrap-anywhere">
        <h2
          className={
            completed
              ? "text-lg line-through text-gray-400"
              : "text-lg"
          }
        >
          {title}
        </h2>
      </div>

      <div className="flex flex-col justify-center">
        <button
          onClick={(e) => removeTodo(e, todos, setTodos)}
          data-key={id}
          className="text-gray-400 hover:cursor-pointer hover:text-red-400 transition-colors duration-300 ease-in-out"
        >
          <FontAwesomeIcon className="text-xl" icon={faTrashCan} />
        </button>
      </div>
    </div>
  );
};

export { ToDoCard };
