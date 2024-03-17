import { useState } from "react";
import { generateId } from "./utils";
import styles from "./style.module.css";

const TodoList = () => {
    const [value, setValue] = useState("");
    const [todos, setTodos] = useState([]);

    const handleChangeText = (event) => {
        setValue(event.target.value);
    }

    const handleSubmitForm = (event) => {
        event.preventDefault();
        if (value.length !== 0) {
            setValue("");
            setTodos(prevTodos => (
                [
                    ...prevTodos,
                    {
                        text: value,
                        id: generateId()
                    }
                ]
            ))
        }
    }

    const handleDeleteTodo = (event) => {
        const todoId = event.target.getAttribute("data-id");
        setTodos(prevTodos => prevTodos.filter(prevTodo => prevTodo.id !== todoId))
    }

    return (
        <div>
            <h1>Todo List</h1>
            <form onSubmit={handleSubmitForm}>
                <input
                    type="text"
                    placeholder="Add your task"
                    value={value}
                    onChange={handleChangeText}
                />
                <button>Submit</button>
            </form>
            <ul className={styles.todo_list}>
                {todos.map((todo) => (
                    <li key={todo.id} className={styles.todo}>
                        <span className={styles.todo_text}>{todo.text}</span>
                        <button
                            data-id={todo.id}
                            className={styles.todo_delete}
                            onClick={handleDeleteTodo}
                        >
                            Delete
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default TodoList;