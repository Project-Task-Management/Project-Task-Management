import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import "./home.scss";
const Navigtion = () => {
    return (
        <div className="navi">
            <div className="navigtion">
                <div>Home Page</div>
                <div>ToDo List</div>
                <a title="Products Management System">PMS </a>
                <div>Notiz</div>
                <div>Calendar</div>
            </div>
            <div className="start">Startseite</div>
        </div>
    );
};

export default Navigtion;
