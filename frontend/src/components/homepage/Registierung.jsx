import React from "react";
import { useState } from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import axios from "axios";
import "./registierung.scss";

const Registierung = () => {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rePassword, setRePassword] = useState("");

  const handleSubmit = async (e) => {
      e.preventDefault();
    if(password!==rePassword){
        return alert(" check your password")
    }
    try {
      const response = await fetch("http://localhost:7897/user/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ userName, email, password }),
      });
      const data = await response.json();
      console.log(data); 
    } catch (error) {
      console.error(error);
    }
    console.log(password);
  };

  return (
    <div className="regst">
      <form onSubmit={handleSubmit}>
        <h2>Registierung</h2>

        <label>User Name</label>
        <input
          className="input-feld"
          type="text"
          id="Vorname"
          name="User Name"
          placeholder="Vorname"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
        />

        <label>E-mail"</label>
        <input
          onChange={(e) => setEmail(e.target.value)}
          className="input-feld"
          value={email}
          type="email"
          name=""
          placeholder="Ihr E-mail"
        />

        <label>Password"</label>
        <input
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          className="input-feld"
          type="password"
          placeholder="password"
        />

        <label>Password-wiederholung </label>
        <input
          onChange={(e) => setRePassword(e.target.value)}
          className="input-feld"
          type="password"
          value={rePassword}
          placeholder="password-wiederholung"
        />

        <Button type="submit" className="bt">
          Register
        </Button>
        <div className="agree">
          <input id="check" type="checkbox" />
          <label htmlFor="check">
            I agree all statements in <span>Terms of service</span>
          </label>
        </div>
      </form>

      <div>
        <p>
          have already an account ?
          <span>
            <Link to="/anmeldung">Login here</Link>
          </span>
        </p>
      </div>
    </div>
  );
};

export default Registierung;
