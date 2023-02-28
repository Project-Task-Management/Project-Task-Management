
import { useState } from "react";
import "./Notiz.scss";

import Button from "./bearbeiten/Button";


export default function Notiz() {

  const [headline, setHeadline] = useState("");
  const [notiz, setNotiz] = useState([])
  const [text, setText] = useState("");

  

  const clickHandler = (e) => {
    e.preventDefault()
    const newNotiz = [...notiz, {headline, text}]
    setNotiz(newNotiz)
    setText("")
    setHeadline("")
    console.log("gespeichert")
  }

 

  const headlineChangehandle = (e) =>{
    setHeadline(e.target.value)
  }



  const textChangehandle = (e) => {
    setText(e.target.value)
  }

return (
  <>
    <h1>Schreiben sie ihr Notizen </h1>

    <form>
    <input 
    type="text"
    id="überschrifft"
    value={headline}
    onChange={headlineChangehandle}
    placeholder=" Dein Überschrift "
    />
    
    <textarea
    type="text"
    id="text"
    value={text} 
    onChange={textChangehandle}
    placeholder="Dein Notitzen"
    />

    <button  onClick={clickHandler}>Speichern</button>

    </form>
    <div className="border"></div>


  <ol>
    {notiz.map((elem, i) => 
    <li key={i}>
      <h2>{elem.headline}</h2>
      <p>{elem.text}</p>
      <Button />

      </li>
    )} 
    </ol> 
      


  </>
)

}


