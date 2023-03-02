import React from "react";
import Tasks from "./Tasks";
import "./ToDo.scss";
import TodoForm from "./TodoForm";

const ToDo = () => {
    return (
        <div className="todo-home">
            <TodoForm />
            <Tasks />
        </div>
    );
};

export default ToDo;
