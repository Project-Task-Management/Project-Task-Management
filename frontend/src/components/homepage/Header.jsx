
import React from 'react';
import { Button, Nav } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";

import './home.scss'

const Header = () => {
  return (
    <div className="header">
    <Navbar bg="dark" variant="dark">
        <Container>
            <Navbar.Brand href="#home">하자 LETSDO</Navbar.Brand>
            <Navbar.Brand href="#home">
                <Button>Logo</Button>
            </Navbar.Brand>
            <Navbar.Brand href="#home">
                <Button>Registieren</Button>
            </Navbar.Brand>
        </Container>
    </Navbar>
</div>
  );
}

export default Header;
