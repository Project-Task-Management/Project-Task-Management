
import React from 'react';
import { Button, Nav } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";

import './home.scss'

const Header = () => {
  return (
    
      <div className="header">
      <div>하자 LETSDO</div>
        <div>Logo</div>
        <div><Button>Registieren</Button></div>
      </div>

  );
}

export default Header;
