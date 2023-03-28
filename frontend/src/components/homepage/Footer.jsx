import React from "react";
import { BsFacebook, BsTwitter, BsInstagram } from "react-icons/bs";
import { Nav } from "react-bootstrap";

import { NavLink } from "react-router-dom";

const Footer = () => (
    <footer className="page-footer font-small blue pt-4">
        <hr></hr>
        <div className="container-fluid text-center text-md-left">
            <div className="row">
                <div className="col-md-6 mt-md-0 mt-3">
                    <h5
                        className="text-uppercase"
                        style={{ color: "coral", fontSize: "25px" }}
                    >
                        하자
                    </h5>
                    <p>
                        Preisangaben inkl. Steuer und zzgl. Service- und Versand
                        kosten
                    </p>
                </div>

                <hr className="clearfix w-100 d-md-none pb-0" />

                <div className="col-md-3 mb-md-0 mb-3">
                    <h5 style={{ color: "red" }} className="text-uppercase">
                        Info
                    </h5>
                    <ul className="list-unstyled">
                        <li>
                            <Nav.Link
                                style={{ color: "blue" }}
                                to="/kontakt"
                                as={NavLink}
                            >
                                Kontakt
                            </Nav.Link>
                        </li>
                        <li>
                            <a style={{ textDecoration: "none" }} href="#!">
                                Über uns
                            </a>
                        </li>
                        <li>
                            <a style={{ textDecoration: "none" }} href="#!">
                                Impressum
                            </a>
                        </li>
                    </ul>
                </div>

                <div className="col-md-3 mb-md-0 mb-3">
                    <h5 style={{ color: "red" }} className="text-uppercase">
                        Unseren Seiten
                    </h5>
                    <ul className="list-unstyled">
                        <li>
                            <a
                                style={{
                                    textDecoration: "none",
                                    fontSize: "20px",
                                }}
                                href="https://www.facebook.com/"
                            >
                                <BsFacebook />
                            </a>
                        </li>
                        <li>
                            <a
                                style={{
                                    textDecoration: "none",
                                    fontSize: "20px",
                                }}
                                href="https://twitter.com/"
                            >
                                <BsTwitter />
                            </a>
                        </li>
                        <li>
                            <a
                                style={{
                                    textDecoration: "none",
                                    fontSize: "20px",
                                }}
                                href="https://www.instagram.com/"
                            >
                                <BsInstagram />
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </footer>
);

export default Footer;
