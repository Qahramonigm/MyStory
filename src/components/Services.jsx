import React from "react";
import Web from "../assets/img/web.png";
import App from "../assets/img/app.png";
import Backend from "../assets/img/backend.png";

const Services = () => {
  return (
    <div className="services" id="service">
      <h1 className="service__tt">Services</h1>
      <div className="service__content">
        <div className="service_box">
          <img src={Web} alt="" className="service__img" />
          <h2 className="service__title">Web development</h2>
          <p className="service__pititle">
            We create modern and responsive websites with clean design and fast
            performance. Our goal is to deliver user-friendly and visually
            appealing web solutions. App Development
          </p>
        </div>
        <div className="service_box">
          <img src={App} alt="" className="service__img" />
          <h2 className="service__title">App development</h2>
          <p className="service__pititle">
            We create modern and responsive websites with clean design and fast
            performance. Our goal is to deliver user-friendly and visually
            appealing web solutions. App Development
          </p>
        </div>
        <div className="service_box">
          <img src={Backend} alt="" className="service__img" />
          <h2 className="service__title">Backend development</h2>
          <p className="service__pititle">
            We build secure and scalable server-side systems that manage data,
            APIs, and application logic to ensure your website or app runs
            smoothly and efficiently.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Services;
