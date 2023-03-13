import React from "react";
import Edit from "../Edit";
import Button from "./Button";
import { useState } from "react";

export default function NozitItem({ elem, i, onEdit, deleteFunction }) {
  const [edit, setEdit] = useState(false);
  const editHandler = () => {
    setEdit(true);
  };

  const handlerOnEdit = (update, i) => {
    setEdit(false);
    onEdit(update, i);
  };

  return edit ? (
    <Edit elem={elem} onEdit={handlerOnEdit} i={i} />
  ) : (
    <li>
      <h1>{elem.headline}</h1>
      <p>{elem.text}</p>

      <Button handleDellete={() => deleteFunction(i)} />
      <button onClick={() => editHandler(i)}>Edit</button>
    </li>
  );
}
