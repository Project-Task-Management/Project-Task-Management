import React, { useContext, useState } from "react";
import TodoContext from "../../context/TodoContext";
import axios from "axios";
import TaskItem from "./TaskItem";

function Tasks() {
    const { todos, setTodos } = useContext(TodoContext);
    const [istrue, setIstrue] = useState(false);

    const handelDone1 = (i) => {
        setIstrue(true);

        console.log("hallo");
    };
    const handelDone2 = (i) => {
        setIstrue(false);

        console.log("hallo");
    };

    return (
        <div className="zeig-task">
            {todos.map((item, i) => {
                console.log(todos);
                return <TaskItem key={i} item={item} todos={todos} setTodos={setTodos} i={i} handelDone1={handelDone1} istrue={istrue} />;
            })}
        </div>
    );
}

export default Tasks;
