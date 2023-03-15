import React from "react";
import { useState } from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import axios from "axios";
const Anmeldung = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = async (e) => {
    const loginData = { email, password };
    e.preventDefault();
    await axios.post("http://localhost:7897/login", {
      loginData,
    });
  };

  return (
    <div className="regst">
      <form onSubmit={handleSubmit}>
        <h2>Login</h2>

        <div>
          <label>E-mail</label>
          <input
            onChange={(e) => setEmail(e.target.value)}
            className="input-feld"
            type="email"
            name=""
            value={email}
            placeholder="Ihr E-mail"
          />
        </div>
        <div>
          <label>Password</label>
          <input
            onChange={(e) => setPassword(e.target.value)}
            className="input-feld"
            type="password"
            value={password}
            placeholder="password"
          />
        </div>

        <div>
          <Button type="submit" className="bt">
            Anmelden
          </Button>
        </div>
      </form>
      <div>
        <p>
          haven't an account ?
          <span>
            <Link to="/registierung">Registeren here</Link>{" "}
          </span>
        </p>
      </div>
    </div>
  );
};

export default Anmeldung;
