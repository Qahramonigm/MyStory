import React from "react";
import Mainph from "../assets/img/IMG_20251031_182459.jpg";
import { FaGithub } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { PiCodeBold } from "react-icons/pi";
import { FaLocationDot } from "react-icons/fa6";

const Main = () => {
  return (
    <div className="main"  id="home">
      <div className="main__content">
        <div className="main_titles">
          <h2 className="main__title">Igamberdiyev Qahramon</h2>
          <br />
          <p className="pititle">
            <span>JAVA SCRIPT, REACT, HTML, CSS, PYTHON, C#</span> <br />
            Fullstack developer.
          </p>
          <PiCodeBold className="main__icon" />
          <h2 className="location">
            <FaLocationDot /> Sh. Bekobod
          </h2>
          <br />
          <h2 className="location">
            <FaLocationDot /> Tash. Chilozor
          </h2>
          <ul>
            <li>
              <a href="https://github.com/Qahramonigm" className="main__link">
                <FaGithub className="main__links" />
              </a>
            </li>
            <li>
              <a href="https://t.me/igamberdiyevvv_08" className="main__link">
                <FaTelegram className="main__links" />
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/igamberdiyevvv_08/?__pwa=1"
                className="main__link"
              >
                <FaInstagram className="main__links" />
              </a>
            </li>
          </ul>
        </div>
        <img src={Mainph} alt="" className="mainPh" />
      </div>
    </div>
  );
};

export default Main;
