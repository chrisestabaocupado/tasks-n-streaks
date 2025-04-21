/* import styles from './ToDoInput.module.css'; */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

const ToDoInput = ({todosDispatch}) => {
    const [todo, setTodo] = useState("");

    const handleInsert = () => {
        todosDispatch({ type: 'insert', todo: todo })
        setTodo("");
    };

    return (
        <div className="flex flex-row w-full h-12 rounded-lg ">
            <input 
                type="text"
                className="w-full h-full px-4 focus:outline-none border rounded-tl-lg rounded-bl-lg dark:focus:border-dark-border dark:border-dark-accent dark:placeholder:text-dark-text-primary dark:text-dark-text-primary transition-al ease-in-out duration-500"
                id="todoInput"
                onKeyDown={(e) => { e.key === "Enter" && handleInsert(); }}
                onChange={e => setTodo(e.target.value)}
                placeholder="Escribe una nueva tarea"
                value={todo}
            />
            <button 
                onClick={() => { 
                    handleInsert();
                }}
                className="w-min h-full px-3 rounded-tr-lg rounded-br-lg border hover:cursor-pointer dark:border-dark-accent dark:hover:border-dark-border dark:text-dark-text-secondary dark:hover:text-dark-text-primary transition-all ease-in-out duration-500">
                <FontAwesomeIcon className="text-xl" icon={faPlus} />
            </button>
        </div>
    )
}

export {ToDoInput};