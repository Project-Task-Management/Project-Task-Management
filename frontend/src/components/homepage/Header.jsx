import React from "react";
import { Button } from "react-bootstrap";

import "./home.scss";

const Header = () => {
    return (
        <div className="header">
            <div>하자 LETSDO</div>
            <div>Logo</div>
            <div>
                <Button>Registieren</Button>
            </div>
        </div>
    );
};

export default Header;
