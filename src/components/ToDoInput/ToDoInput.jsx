/* import styles from './ToDoInput.module.css'; */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { useState, useContext } from "react";
import { ToDoContext } from "../TodoList/ToDoContext";
import { StreakModeContext } from "../StreakMode/StreakModeContext";

const ToDoInput = () => {
  const { todosDispatch } = useContext(ToDoContext);
  const { isStreakModeOn, streaksDispatch } = useContext(StreakModeContext);

  const [todo, setTodo] = useState("");
  const [streak, setStreak] = useState("");

  const handleInsert = () => {
    if (!isStreakModeOn) {
      todosDispatch({ type: "insert", todo: todo });
      setTodo("");
    } else {
      streaksDispatch({ type: "insert", streak: streak });
      setStreak("");
    }
  };

  return (
    <div className="flex flex-row w-full h-12 rounded-lg ">
      <input
        type="text"
        className="w-full h-full px-4 focus:outline-none border rounded-tl-lg rounded-bl-lg text-light-text-primary border-light-accent hover:border-light-border focus:border-light-border dark:focus:border-dark-border dark:border-dark-accent dark:placeholder:text-dark-text-primary dark:text-dark-text-primary transition-all ease-in-out duration-300"
        id="todoInput"
        onKeyDown={(e) => {
          e.key === "Enter" && handleInsert();
        }}
        onChange={(e) =>
          isStreakModeOn ? setStreak(e.target.value) : setTodo(e.target.value)
        }
        placeholder={
          isStreakModeOn
            ? "Ej: ¿Cerré la puerta del cuarto?"
            : "Ej: Comprar leche condensada."
        }
        value={isStreakModeOn ? streak : todo}
      />
      <button
        onClick={() => {
          handleInsert();
        }}
        className="w-min h-full px-3 rounded-tr-lg rounded-br-lg border hover:cursor-pointer text-light-text-secondary hover:text-light-text-primary border-light-accent hover:border-light-border dark:border-dark-accent dark:hover:border-dark-border dark:text-dark-text-secondary dark:hover:text-dark-text-primary transition-all ease-in-out duration-300"
      >
        <FontAwesomeIcon className="text-xl" icon={faPlus} />
      </button>
    </div>
  );
};

export {ToDoInput};