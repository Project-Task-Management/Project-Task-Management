import React from "react";
import { useState } from "react";
import { CgEyeAlt } from "react-icons/cg";
import Buton from "./Buton";

function TodoModal({ modalOpen, setModalOpen }) {
    const [title, setTitle] = useState("");
    const [Status, setStatus] = useState("Incomplete");

    const handleSubmit = (e) => {
e.preventDfault()
console.log({title, Status});
    }
    return (
        modalOpen && (
            <div className="wrapper">
                <div className="containerr">
                    <div className="closeButton" onClick={() => setModalOpen(false)} onKeyDown={() => setModalOpen(false)} tabIndex={0} role="Button">
                        <CgEyeAlt />
                    </div>
                    <form className="form" onSubmit={(e)=> handleSubmit(e)}>
                        <h1 className="formtitle">Add Task</h1>
                        <label htmlFor="title">
                            Tiltle
                            <input type="text" id="title" value={title} onChange={(e) => setTitle(e.target.value)} />
                        </label>
                        <label htmlFor="status">
                            Status
                            <select name="status" id="status" value={Status} onChange={(e) => setStatus(e.target.value)}>
                                <option value="incomplete">Incomplete</option>
                                <option value="complete">Complete</option>
                            </select>
                        </label>
                        <div className="buttonContainer">
                            <Buton type="submit">Add Task</Buton>
                            <Buton type="submit" onClick={() => setModalOpen(false)} onkeydown={() => setModalOpen(false)}>
                                Cancel
                            </Buton>
                        </div>
                    </form>
                </div>
            </div>
        )
    );
}

export default TodoModal;
