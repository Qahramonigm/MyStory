import React from "react";
import Footerimg from "../assets/img/photo_2025-11-25_19-38-56.jpg";
import { FaGithub } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer" id="contact">
      <h2 className="footer__title">Contact</h2>
      <div className="footer__content">
        <img src={Footerimg} alt="" className="footerimg" />
        <a href="tel:+998917772919" className="number">
          +998 91 777 29 19
        </a>
        <ul className="footer__ul">
          <li>
            <a
              href="https://www.instagram.com/igamberdiyevvv_08/?__pwa=1"
              className="footer__link"
            >
              <FaInstagram /> Instagram
            </a>
          </li>
          <li>
            <a href="https://t.me/igamberdiyevvv_08" className="footer__link">
              <FaTelegram /> Telegram
            </a>
          </li>
          <li>
            <a href="https://github.com/Qahramonigm" className="footer__link">
              <FaGithub /> GitHub
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
