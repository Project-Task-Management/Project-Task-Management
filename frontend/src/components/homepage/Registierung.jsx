import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import "./registierung.scss";

const Registierung = () => {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [agree, setAgree] = useState(true);

  const handleAgree = () => {
    setAgree(!agree);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

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
      setUserName("");
      setEmail("");
      setPassword("");

      history.push("/");
    } catch (error) {
      console.error(error);
    }
    console.log(password);
  };

  return (
    <div className="regst">
      <h2>Registierung</h2>
      <form className="formSyling" onSubmit={handleSubmit}>
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
          placeholder="Password"
        />

        <div className="agree">
          <input
            onClick={handleAgree}
            checked={agree ? "" : "true"}
            id="check"
            type="checkbox"
          />
          <label htmlFor="check">
            I agree all statements in <span>Terms of service</span>
          </label>
        </div>
        <button to="/" disabled={agree} type="submit" className="bt">
          Register
        </button>
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
