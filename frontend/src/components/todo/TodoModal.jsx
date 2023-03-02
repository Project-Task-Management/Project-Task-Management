import React from "react";
import { useState } from "react";
import { DiAndroid } from "react-icons/di";
import Buton from "./Buton";
import Appcontent from "./Appcontent";

function TodoModal({ modalOpen, setModalOpen}) {
    const [title, setTitle] = useState("");
    const [Status, setStatus] = useState("Incomplete");
    const [text, setText] = useState([]);
    const clickHandler = (e) => {
        e.preventDefault();
        const newText = [...text, title];
        setText(newText);
        setTitle("");
        console.log(newText);
    };

    const handleSubmit = (e) => {
        e.preventDfault();
        console.log({ title, Status });
    };
    console.log(text);
    return (
        <> 
        { 
        modalOpen && (
            <div className="wrapper">
                <div className="containerr">
                    <div className="closeButton" onClick={() => setModalOpen(false)} onKeyDown={() => setModalOpen(false)} tabIndex={0} role="Button">
                        <DiAndroid/>
                    </div>
                    <form className="form" onSubmit={(e) => handleSubmit(e)}>
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
                            <Buton type="submit" onClick={clickHandler}>
                                Add Task
                            </Buton>
                            <Buton type="submit" onClick={() => setModalOpen(false)} onkeydown={() => setModalOpen(false)}>
                                Cancel
                            </Buton>
                        </div>
                        <p>{title}</p>
                    </form>
                    <Appcontent test={text}/>
                </div>
                
                
            </div>
        )}
        <Appcontent test={text}/>

        </>
    );
}


export default TodoModal;
