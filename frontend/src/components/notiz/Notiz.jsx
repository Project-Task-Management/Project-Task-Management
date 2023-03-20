import { useState, useEffect } from "react";
import "./Notiz.scss";
import axios from "axios";

import NozitItem from "./bearbeiten/NozitItem";

export default function Notiz() {
  const [headline, setHeadline] = useState("");
  const [notiz, setNotiz] = useState([]);
  const [text, setText] = useState("");

  const clickHandler = (e) => {
    const newNotiz = [...notiz, { headline, text }];
    setNotiz(newNotiz);
    axios
      .post("http://localhost:7897/notiz", {
        notiz,
      })
      .then(fetchNotiz());
    setText("");
    setHeadline("");
  };
  useEffect(() => {
    axios.get("http://localhost:7897/notiz").then((res) => {
      setNotiz(res.data);
    });
  }, []);

  const fetchNotiz = async () => {
    const response = await axios.get("http://localhost:7897/notiz");
    setNotiz(response.data);
  };

  const onEdit = (update, i) => {
    const newnotiz = [...notiz];
    newnotiz[i] = update;

    setNotiz(newnotiz);
  };

  const headlineChangehandle = (e) => {
    setHeadline(e.target.value);
  };

  const textChangehandle = (e) => {
    setText(e.target.value);
  };

  return (
    <>
      <h1 className="uberschrift">Schreiben sie ihr Notizen </h1>
      <div className="notiz">
        <div className="form_notiz">
          <form>
            <input
              className="notiz_input"
              type="text"
              value={headline}
              onChange={headlineChangehandle}
              placeholder=" Dein Überschrift "
            />
            <br />
            <textarea
              className="notiz_textarea"
              type="text"
              value={text}
              onChange={textChangehandle}
              placeholder="Dein Notitzen"
            />
            <br />
            <button className="notiz_button" onClick={clickHandler}>
              Speichern
            </button>
          </form>
        </div>
        <div className="notiz_item">
          <ol className="text">
            {notiz.map((elem, i) => {
              return (
                <NozitItem
                  event={event}
                  elem={elem}
                  i={i}
                  onEdit={onEdit}
                  key={i}
                  notiz={notiz}
                  setNotiz={setNotiz}
                />
              );
            })}
          </ol>
        </div>
      </div>
    </>
  );
}
