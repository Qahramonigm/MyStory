import React from "react";
import Main3img from "../assets/img/photo_2025-11-26_20-28-43.jpg";
import Main3img2 from "../assets/img/photo_2025-11-26_20-29-26.jpg";
import { MdOutlineOpenInNew } from "react-icons/md";

const Main3 = () => {
  return (
    <div className="main3" id="project">
      <h2 className="main3__title">Projects</h2>
      <div className="main3__content">
        <div className="box">
          <img src={Main3img} alt="" className="main3__img" />
          <h2 className="box__title">GYM</h2>
          <p className="box__pititle">
            This is a gym website designed for people who work out. On this
            site, you can create your own training plan. It also has several
            convenient features, and you can enter the site by clicking the
            “open” button.
          </p>
          <h2 className="m3_title">HTML / CSS / JS</h2>
          <a href="https://qahramonigm.github.io/GYM/" className="box__hrf">
            <MdOutlineOpenInNew className="box__icon" /> open
          </a>
        </div>
        <div className="box">
          <img src={Main3img2} alt="" className="main3__img" />
          <h2 className="box__title">PIZZA</h2>
          <p className="box__pititle">
            This is a pizza website that offers various dishes. It is suitable
            for cafés and restaurants. You can add items to favorites, remove
            them, and view detailed information about each dish. You can open
            and explore the site by clicking the “open” button.
          </p>
          <h2 className="m3_title">HTML / CSS / JS</h2>
          <a href="https://qahramonigm.github.io/taomAPI/" className="box__hrf">
            <MdOutlineOpenInNew className="box__icon" /> open
          </a>
        </div>
      </div>
    </div>
  );
};

export default Main3;
