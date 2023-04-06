import React, { useContext } from "react";
import { ImBin } from "react-icons/im";

import TodoContext from "../../context/TodoContext";

import axios from "axios";

function TaskItem({ i, item, handelDone1, istrue, todos, setTodos }) {
  const { markTodoUsDone } = useContext(TodoContext);
  const { markTodoIsProg } = useContext(TodoContext);
  const fetchTasks = async () => {
    const response = await axios.get("http://localhost:7897/todo");
    console.log("delete response", response.data);
    setTodos(response.data);
  };

  const deletTask = () => {
    axios.delete(`http://localhost:7897/todo/${item._id}`).then(fetchTasks);
  };

  return (
    <div
      className="todo-info"
      style={{
        backgroundColor: item.isProgressing
          ? "rgba(192, 159, 102, 0.738)"
          : item.isDone
          ? "rgba(127, 196, 137, 0.598)"
          : "white",
      }}>
      <div className="add-card">
        <div className="text-text">
          <div
            style={{ padding: "20px", height: "407" }}
            className="text-spans">
            <p style={{ color: "red" }}>Title:</p>
            {item.title}

            <hr />

            <p style={{ color: "green" }}>Tasks:</p>
            {item.tasks}
          </div>
        </div>
        <div className="del-Edi">
          <ImBin className="delet-Icon" onClick={deletTask} />
        </div>
      </div>
      <div className="icon-button">
        <button className="btn-todo" onClick={() => markTodoUsDone(i)}>
          Done
        </button>
        <button className="btn-todo" onClick={() => markTodoIsProg(i)}>
          Progressing
        </button>
      </div>
    </div>
  );
}

export default TaskItem;
