import React from "react";
import Edit from "../Edit";
import axios from "axios";
import { useState } from "react";

export default function NozitItem({ elem, i, onEdit, notiz, setNotiz }) {
  const [edit, setEdit] = useState(false);
  const editHandler = () => {
    setEdit(true);
  };

  const deleteFunction = (id) => {
    // const notizToDelete = notiz.find((event) => event._id === id);
    // console.log(notizToDelete, "hallo");
    axios.delete(`http://localhost:7897/notiz/${elem._id}`).then(fetchNotiz());
    console.log(elem._id);
  };
  const fetchNotiz = async () => {
    const response = await axios.get("http://localhost:7897/notiz");

    setNotiz(response.data);
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

      <button onClick={(event) => deleteFunction(event._id)}>Delete</button>
      <button onClick={() => editHandler(i)}>Edit</button>
    </li>
  );
}
