import React from "react";
import { BsFacebook, BsTwitter, BsInstagram } from "react-icons/bs";
import "./Footer.scss";

const Footer = () => (
  <footer className="footer-container">
    <p className="footer-text">Copyright © 2023</p>

    <h5 className="logo">하자</h5>

    <div>
      <div className="info">
        <p>Kontakt</p>

        <p>Über uns</p>

        <p>Impressum</p>
      </div>
      <div className="info">
        <p>
          {" "}
          <BsFacebook />
        </p>

        <p>
          {" "}
          <BsTwitter />
        </p>

        <p>
          {" "}
          <BsInstagram />
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
