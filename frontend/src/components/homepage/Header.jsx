import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FiLogIn } from "react-icons/fi";
import { BiRegistered } from "react-icons/bi";
import "./home.scss";

const Header = () => {
  return (
    <div className="header">
      <div> LETSDO <img className="logo" src="../../image/haya.png" alt="" /></div>
      <div className="nav">
        <Link className="link" to="/">
          Home Page
        </Link>

        <Link className="link" to="/todo">
          ToDo List
        </Link>
        <Link
          className="link"
          to="/products"
          title="Products Management System">
          PMS
        </Link>
        <Link className="link" to="/notiz">
          Notiz
        </Link>
        <Link className="link" to="/kalender">
          Calendar
        </Link>
      </div>
    <div className="user" >
      <Link to="/anmeldung">
        <FiLogIn className="login"  title="login"/>
      </Link>

      <Link to="/registierung">
        <BiRegistered className="login" title="register" />
      </Link>
      </div>
    </div>
  );
};

export default Header;
