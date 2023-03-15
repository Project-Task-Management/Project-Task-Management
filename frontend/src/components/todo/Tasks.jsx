import React, { useContext, useState } from "react";
import TodoContext from "../../context/TodoContext";

import TaskItem from "./TaskItem";

function Tasks() {
    // let donBt = document.querySelector('.Done-bt');
    // let progBt = document.querySelector('.progressing-bt');
    // donBt.addEventListener('click', () => donBt.style.backgroundColor = '#337ab7')
    // progBt.addEventListener('click', () => progBt.style.backgroundColor = '#c9302c')

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
    const deletTask = (i) => {
        const newTodos = [...todos];
        newTodos.splice(i, 1);
        setTodos(newTodos);
    };
    return (
        <div className="zeig-task">
            {todos.map((item, i) => {
                console.log(todos);
                return (
                    <TaskItem key={i} item={item} deletTask = {deletTask} i ={i} handelDone1={handelDone1} istrue={istrue} />
                )
            })}
        </div>
    );
}

export default Tasks;
