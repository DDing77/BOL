import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faFacebook,
  faGooglePlus,
} from "@fortawesome/free-brands-svg-icons";
import "../style/footer.css";

export default function Footer() {
  return (
    <div className="footer-container">
      <h2>League Of Best</h2>
      <div className="footer-contact">
        <a
          className="link-contact"
          target="_blank"
          href="https://github.com/DDing77/LOB"
        >
          <FontAwesomeIcon icon={faGithub} size={"2x"} color={"white"} />
        </a>
        <a className="link-contact" href="/">
          <FontAwesomeIcon icon={faGooglePlus} size={"2x"} color={"white"} />
        </a>
        <a className="link-contact" href="/">
          <FontAwesomeIcon icon={faFacebook} size={"2x"} color={"white"} />
        </a>
      </div>
    </div>
  );
}
