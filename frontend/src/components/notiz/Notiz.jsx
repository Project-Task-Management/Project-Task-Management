import { useState } from "react";
import "./Notiz.scss";

import NozitItem from "./bearbeiten/NozitItem";

export default function Notiz() {
  const [headline, setHeadline] = useState("");
  const [notiz, setNotiz] = useState([]);
  const [text, setText] = useState("");

  const clickHandler = (e) => {
    e.preventDefault();
    const newNotiz = [...notiz, { headline, text }];
    setNotiz(newNotiz);
    setText("");
    setHeadline("");
    console.log("gespeichert");
  };

  const onEdit = (update, i) => {
    const newnotiz = [...notiz];
    newnotiz[i] = update;

    setNotiz(newnotiz);
  };

  const deleteFunction = (i) => {
    const neuNotiz = [...notiz];
    neuNotiz.splice(i, 1);
    setNotiz(neuNotiz);
    console.log(i, "gelöcht");
  };

  const headlineChangehandle = (e) => {
    setHeadline(e.target.value);
  };

  const textChangehandle = (e) => {
    setText(e.target.value);
  };

  return (
    <div className="countainer">
      <h1 className="uberschrift">Schreiben sie ihr Notizen </h1>
      <form>
        <input
          className="input"
          type="text"
          value={headline}
          onChange={headlineChangehandle}
          placeholder=" Dein Überschrift "
        />

        <textarea
          className="textarea"
          type="text"
          value={text}
          onChange={textChangehandle}
          placeholder="Dein Notitzen"
        />

        <button className="button" onClick={clickHandler}>
          Speichern
        </button>
      </form>
      <div className="border"></div>
      <ol className="text">
        {notiz.map((elem, i) => {
          return (
            <NozitItem
              elem={elem}
              i={i}
              onEdit={onEdit}
              deleteFunction={deleteFunction}
              key={i}
            />
          );
        })}
      </ol>
    </div>
  );
}
