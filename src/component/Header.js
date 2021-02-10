import React, {useEffect, useState}from "react";
import TypeWriter from "react-typewriter";
import { useTranslation } from 'react-i18next';


const Header = ({ data }) => {
  const [currentLang, setCurrentLang] = useState('en');
  const { t, i18n } = useTranslation();

  if (data) {
    var name = data.name;
    var occupation = data.occupation;
    var description = data.description;
    var company = data.company;
    var companyURL = data.companyURL;
    var city = data.address.city;
    var networks = data.social.map(function (network) {
      return (
        <li key={network.name}>
          <a href={network.url}>
            <i className={network.className}></i>
          </a>
        </li>
      );
    });
  }
  useEffect(() => {
    debugger;
    i18n.changeLanguage(currentLang);
  }, [i18n, currentLang])


  return (
    <header id="home">
      <nav id="nav-wrap">
        <a className="mobile-btn" href="#nav-wrap" title="Show navigation">
          Show navigation
        </a>
        <a className="mobile-btn" href="#home" title="Hide navigation">
          Hide navigation
        </a>

        <ul id="nav" className="nav">
          <li className="current">
            <a className="smoothscroll" href="#home">
              {t("header.0")}
            </a>
          </li>
          <li>
            <a className="smoothscroll" href="#about">
            {t("header.1")}
            </a>
          </li>
          <li>
            <a className="smoothscroll" href="#resume">
            {t("header.2")}
            </a>
          </li>
          <li>
            <a className="smoothscroll" href="#portfolio">
            {t("header.3")}
            </a>
          </li>
          <li>
            <a className="smoothscroll" href="#testimonials">
            {t("header.4")}
            </a>
          </li>
          <li>
            <a className="smoothscroll" href="#contact">
            {t("header.5")}
            </a>
          </li>

          <li>
            <button onClick={() => setCurrentLang(currentLang === 'en'?'fr':'en')}>
              {currentLang === "en" ?"Francais" : "English"}
            </button>
          </li>
        </ul>
      </nav>

      <div className="row banner">
        <div className="banner-text">
          <h1 className="responsive-headline">
            <TypeWriter typing={0.5}>{name ? `I'm ${name}.` : null}</TypeWriter>
          </h1>
          <h3>
            Based in {city}. <span>{occupation}  <span> & CEO of <a style={{fontWeight:700}}href={companyURL} target={"_blank"}>{company}</a></span></span>.<br/>{description}
          </h3>
          <hr />
          <ul className="social">{networks}</ul>
        </div>
      </div>

      <p className="scrolldown">
        <a className="smoothscroll" href="#about">
          <i className="icon-down-circle"></i>
        </a>
      </p>
    </header>
  );
};

export default Header;
