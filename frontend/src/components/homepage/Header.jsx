import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

import "./home.scss";

const Header = () => {
    return (
        <div className="header">
            <div> LETSDO</div>
            <div>하자</div>
            <div>
                <Link to="/registierung">
                    <Button>Registieren</Button>
                </Link>
            </div>
            <div>
                <Link to="/anmeldung">
                    <Button>Anmeldung</Button>
                </Link>
            </div>
        </div>
    );
};

export default Header;
