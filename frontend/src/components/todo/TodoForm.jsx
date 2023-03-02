import React, { useContext, useState } from "react";
import { Button } from "react-bootstrap";
// import { useForm } from "react-hook-form";
import TodoContext from "../../context/TodoContext";

function TodoForm() {
    // const {
    //     register,
    //     handleSubmit,
    //     watch,
    //     reset,
    //     formState: { errors },
    // } = useForm();

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
        <div>
            <form className="form" onSubmit={onSubmitHandler}>
                <input
                    type="text"
                    id="title"
                    value={task.title}
                    onChange={handelChange1}
                    placeholder="title"
                    // {...register("title", {
                    //     required: true,
                    // })}
                />
                <textarea
                    className="task"
                    type="text"
                    id="tasks"
                    value={task.tasks}
                    onChange={handelChange1}
                    placeholder="task"
                    // {...register("task", {
                    //     required: true,
                    // })}
                />
                <Button className="btn" variant="primary" type="submit" value="add">
                    Addtask
                </Button>
            </form>
        </div>
    );
}

export default TodoForm;
