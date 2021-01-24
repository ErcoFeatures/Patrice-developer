import React from 'react';
import './style.css';
import logo from '../../images/logo2.png'

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer__content main__content">
                <div className="footer__logo_box">
                    <a href="#top">
                        <img src={logo} alt="Logo" className="footer__logo smooth-goto"  width="100" height={"100"}/>
                    </a>
                </div>
                <div className="footer__links">
                    <div className="footer__navigation">
                        <ul className="footer__list">
                            <li className="footer__item">
                                <a href="https://github.com/orgs/ErcoFeatures/dashboard" target="_blank"
                                   className="footer__link">GitHub</a>
                            </li>
                            <li className="footer__item">
                                <a href="https://www.linkedin.com/in/patricediouf/" target="_blank"
                                   className="footer__link">LinkedIn</a>
                            </li>
                            <li className="footer__item">
                                <a href="http://www.patrice-diouf.com/us" target="_blank"
                                   className="footer__link">Resume</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="footer__copyright">
                        Site by
                        <a href="#" className="footer__link"> Patrice Diouf (Erco) </a>
                </div>
            </div>
        </div>
    );
};

export default Footer;