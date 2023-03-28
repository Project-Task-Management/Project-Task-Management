import React from "react";
import Edit from "../Edit";
import axios from "axios";
import { BsTrash3 } from "react-icons/bs";
import { FiEdit3 } from "react-icons/fi";
import { useState } from "react";
import "../Notiz.scss";

export default function NozitItem({ elem, i, onEdit, notiz, setNotiz }) {
  const [edit, setEdit] = useState(false);
  const editHandler = () => {
    setEdit(true);
  };

  const deleteFunction = (id) => {
    axios.delete(`http://localhost:7897/notiz/${elem._id}`).then(fetchNotiz);
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
    <div className="notizitem">
      <h1>{elem.headline}</h1>
      <p>{elem.text}</p>

      <BsTrash3 onClick={(event) => deleteFunction(event._id)} />
      <FiEdit3 onClick={() => editHandler(i)} />
    </div>
  );
}
