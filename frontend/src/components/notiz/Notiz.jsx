import { useState, useEffect } from "react";
import "./Notiz.scss";
import axios from "axios";
import { Button } from "react-bootstrap";
import { IoMdAdd } from "react-icons/io";
import NozitItem from "./bearbeiten/NozitItem";

export default function Notiz() {
  const [headline, setHeadline] = useState("");
  const [notiz, setNotiz] = useState([]);
  const [text, setText] = useState("");
  const [show, setShow] = useState(true);

  const showhandler = () => {
    setShow(false);
  };

  const clickHandler = (e) => {
    const newNotiz = [...notiz, { headline, text }];
    setNotiz(newNotiz);
    axios
      .post("http://localhost:7897/notiz", {
        headline: headline,
        text: text,
      })
      .then(fetchNotiz);
    setText("");
    setHeadline("");
    setShow(true);
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
    <div className="body">
      <h1 className="uberschrift">Schreiben sie ihr Notizen </h1>
      <div className="notiz">
        <div className="notiz_item">
          {notiz.map((elem, i) => {
            return (
              <div className="item">
                <NozitItem
                  className="nnn"
                  event={event}
                  elem={elem}
                  i={i}
                  onEdit={onEdit}
                  notiz={notiz}
                  setNotiz={setNotiz}
                />
              </div>
            );
          })}
          <div className="notiz-countainer">
            {show ? (
              <IoMdAdd className="plus" onClick={showhandler} />
            ) : (
              <div className="notiz-form">
                <input
                  className="notiz_input"
                  type="text"
                  value={headline}
                  onChange={headlineChangehandle}
                  placeholder=" Dein Überschrift "
                />

                <textarea
                  className="notiz_textarea"
                  type="text"
                  value={text}
                  onChange={textChangehandle}
                  placeholder="Dein Notitzen"
                />

                <Button className="notiz_button" onClick={clickHandler}>
                  Speichern
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
