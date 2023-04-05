import React from "react";
import { useState } from "react";
import axios from "axios";
export default function Edit({ elem, onEdit, i }) {
  const [update, setUpdate] = useState(elem);

  const updateHandler = (e) => {
    const newupdate = { ...update, [e.target.name]: e.target.value };
    axios.patch(`http://localhost:7897/notiz/${elem._id}`, update);
    setUpdate(newupdate);
  };

  return (
    <div className="edit_input">
      <input
        className="update-input"
        type="text"
        name="headline"
        value={update.headline}
        onChange={updateHandler}
      />
      <textarea
        className="update-text"
        value={update.text}
        name="text"
        onChange={updateHandler}
      />
      <button className="update" onClick={() => onEdit(update, i)}>
        Save
      </button>
    </div>
  );
}
