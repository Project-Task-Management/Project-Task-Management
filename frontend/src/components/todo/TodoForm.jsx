import React, { useContext, useState } from "react";

import TodoContext from "../../context/TodoContext";

function TodoForm() {
    const { todos, addTodos } = useContext(TodoContext);
    const [task, setTask] = useState({
        title: "",
        tasks: "",
    });

    const handelChange1 = (e) => {
        setTask({ ...task, [e.target.id]: e.target.value });
    };

    const onSubmitHandler = (e) => {
        e.preventDefault();
        addTodos(task);
        setTask({
            title: "",
            tasks: "",
        });
        console.log("hello", task);
    };

    return (
        <div className="todo-home">
            <h1 className="todo-h1"> 😀 Todo Liste 😀</h1>
            <form className="form" onSubmit={onSubmitHandler}>
                <input className="input-title" type="text" id="title" value={task.title} onChange={handelChange1} placeholder="Pleas name your task here !" />
                <textarea
                    className="input-title"
                    type="text"
                    id="tasks"
                    value={task.tasks}
                    onChange={handelChange1}
                    placeholder="Please write your task here !"
                />

                <button className="add-btt" type="submit" value="add">
                    Add Task
                </button>
            </form>
        </div>
    );
}

export default TodoForm;
