import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./registierung.scss";
const Registierung = () => {
    return (
        <div className="regst">
            <form>
                <h2>Registierung</h2>

                <label>Vorname</label>
                <input
                    className="input-feld"
                    type="text"
                    id="Vorname"
                    name="Vorname"
                    placeholder="Vorname"
                />

                <label>Nachname</label>
                <input
                    className="input-feld"
                    type="text"
                    id="Nachname"
                    name="Nachname"
                    placeholder="Nachname"
                />

                <label>E-mail"</label>
                <input
                    className="input-feld"
                    type="email"
                    name=""
                    placeholder="Ihr E-mail"
                />

                <label>Password"</label>
                <input
                    className="input-feld"
                    type="password"
                    placeholder="password"
                />

                <label>Password-wiederholung </label>
                <input
                    className="input-feld"
                    type="password"
                    placeholder="password-wiederholung"
                />

                <Button className="bt">Register</Button>
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
