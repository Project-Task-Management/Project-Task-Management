import React, { useContext, useState, useEffect } from "react";
import TodoContext from "../../context/TodoContext";
import axios from "axios";

function TodoForm() {
    const { todos, addTodos, setTodos } = useContext(TodoContext);
    const [task, setTask] = useState({
        title: "",
        tasks: "",
    });
    console.log("hello", task);

    useEffect(() => {
        axios.get("http://localhost:7897/todo").then((res) => setTodos(res.data));
        console.log(todos);
    }, []);

    const handelChange1 = (e) => {
        setTask({ ...task, [e.target.id]: e.target.value });
    };

    const fetchProduct = async () => {
        const response = await axios.get("http://localhost:7897/todo");
        console.log("1", response.data);
        setTodos(response.data);
    };

    const onSubmitHandler = (e) => {
        
        e.preventDefault();
        addTodos(task);
        setTask({
            title: "",
            tasks: "",
        });
        axios
            .post("http://localhost:7897/todo", {
                title:task.title,
                tasks:task.tasks,
            })

            .then(fetchProduct);
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
