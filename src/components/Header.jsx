import React, { useState, useEffect } from "react";
import { ImHome, ImProfile } from "react-icons/im";
import { FaFolderOpen } from "react-icons/fa6";
import { RiCustomerServiceFill } from "react-icons/ri";
import { MdContacts } from "react-icons/md";

const Header = () => {
  const [isFixed, setIsFixed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsFixed(true);
      } else {
        setIsFixed(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className={`header ${isFixed ? "fixed" : ""}`}>
      <div className="container">
        <div className="header__content">
          <ul>
            <a href="#home">
              <li className="header__link">
                <ImHome className="Icon" /> Home
              </li>
            </a>
            <a href="#about">
              <li className="header__link">
                <ImProfile className="Icon" /> About
              </li>
            </a>
            <a href="#project">
              <li className="header__link">
                <FaFolderOpen className="Icon" /> Projects
              </li>
            </a>
            <a href="#service">
              <li className="header__link">
                <RiCustomerServiceFill className="Icon" /> Services
              </li>
            </a>
            <a href="#contact">
              <li className="header__link">
                <MdContacts className="Icon" /> Contact
              </li>
            </a>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
