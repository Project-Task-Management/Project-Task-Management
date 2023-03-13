import React from "react";
import { useState } from "react";

export default function Edit({ elem, onEdit, i }) {
  const [update, setUpdate] = useState(elem);

  const updateHandler = (e) => {
    const newupdate = { ...update, [e.target.name]: e.target.value };

    setUpdate(newupdate);
  };

  return (
    <>
      <input
        type="text"
        name="headline"
        value={update.headline}
        onChange={updateHandler}
      />
      <textarea value={update.text} name="text" onChange={updateHandler} />
      <button onClick={() => onEdit(update, i)}>update</button>
    </>
  );
}
