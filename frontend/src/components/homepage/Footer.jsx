import React from "react";
import { BsFacebook, BsTwitter, BsInstagram } from "react-icons/bs";
import { Nav } from "react-bootstrap";

import { NavLink } from "react-router-dom";

const Footer = () => (
    <footer className="page-footer">
        <div>
            <h5
                className="text-uppercase"
                style={{ color: "coral", fontSize: "25px" }}
            >
                하자
            </h5>
        </div>
       <div> <div className="info">
            

            <a style={{ textDecoration: "none" }} href="#!">
                Kontakt
            </a>

            <a style={{ textDecoration: "none" }} href="#!">
                Über uns
            </a>

            <a style={{ textDecoration: "none" }} href="#!">
                Impressum
            </a>
        </div>
        <div className="info">
      

            <a
                        style={{
                            textDecoration: "none",
                        }}
                        href="https://www.facebook.com/"
                    >
                        <BsFacebook />
                    </a>

                    <a
                        style={{
                            textDecoration: "none",
                        }}
                        href="https://twitter.com/"
                    >
                        <BsTwitter />
                    </a>

                    <a
                        style={{
                            textDecoration: "none",
                        }}
                        href="https://www.instagram.com/"
                    >
                        <BsInstagram />
                    </a>
        </div></div>
    </footer>
);

export default Footer;
