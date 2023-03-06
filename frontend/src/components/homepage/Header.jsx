import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

import "./home.scss";

const Header = () => {
    return (
        <div className="header">
            <div>하자 LETSDO</div>
            <div>Logo</div>
            <div>
            <Link to="/registierung" >

                <Button>Registieren</Button>
            </Link>
            </div>
        </div>
    );
};

export default Header;
