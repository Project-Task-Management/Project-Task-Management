import React from "react";
import "./home.scss";
import { Link } from "react-router-dom";
const Navigtion = () => {
  return (
    <div className="navi">
      <div className="navigtion">
        <Link className="link" to="/">
          Home Page
        </Link>

        <Link className="link" to="/todo">
          ToDo List
        </Link>
        <Link
          className="link"
          to="/products"
          title="Products Management System"
        >
       
          PMS
        </Link>
        <Link className="link" to="/notiz">
          Notiz
        </Link>
        <Link className="link" to="/kalender">
          Calendar
        </Link>
      </div>
    </div>
  );
};

export default Navigtion;
