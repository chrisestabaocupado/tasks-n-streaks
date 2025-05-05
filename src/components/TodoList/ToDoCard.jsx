/* import styles from './ToDoCard.module.css'; */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-regular-svg-icons";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";

const ToDoCard = ({ title, id, completed, todosDispatch }) => {

  return (
    <div className="flex flex-row border justify-between border-light-accent hover:border-light-border dark:border-dark-accent dark:hover:border-dark-border rounded-lg max-w-md p-4 gap-4 hover:shadow-sm transition-all duration-300 ease-in-out">
      <div className="flex flex-col justify-center">
        <button
          onClick={(e) => todosDispatch({
            type:'update', key: e.currentTarget.dataset.key, update :{ completed: !completed }
          })}
          data-key={id}
          className="text-light-text-secondary hover:text-light-text-primary dark:text-dark-text-secondary dark:hover:text-dark-text-primary hover:cursor-pointer transition-colors duration-300 ease-in-out"
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

      <div className="w-full wrap-anywhere text-light-text-primary dark:text-dark-text-primary">
        <h2
          className={
            completed
              ? "text-lg line-through"
              : "text-lg"
          }
        >
          {title}
        </h2>
      </div>

      <div className="flex flex-col justify-center">
        <button
          onClick={(e) => todosDispatch({
            type: 'remove', key: e.currentTarget.dataset.key
          })}
          data-key={id}
          className="text-light-text-secondary dark:text-dark-text-secondary hover:text-red-400 hover:cursor-pointer transition-colors duration-300 ease-in-out"
        >
          <FontAwesomeIcon className="text-xl" icon={faTrashCan} />
        </button>
      </div>
    </div>
  );
};

export { ToDoCard };
