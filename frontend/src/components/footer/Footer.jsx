import React from "react";
import "./Footer.scss"

import Logo from "../../assets/imgs/logo.png";

const Footer = () => {

    return (
        <footer className="d-flex flex-column flex-md-row justify-content-evenly align-items-center">

            <div className="logo d-flex justify-content-center col-12 col-md-4">
                <a href="#home">
                    <img src={Logo} alt="Logo Digão" />
                </a>
            </div>

            <div className="copyright d-flex justify-content-center mb-2 m-md-0 col-12 col-md-4">
                <p className="m-0">© Copyright 2022. All right reserved</p>
            </div>

            <div className="socialLogos d-flex justify-content-center align-items-center col-12 col-md-4">
                <a href="https://www.instagram.com/di.gaoo/" target="_blank" rel="noreferrer" className="ms-3 me-3">
                    <i className="fa-brands fa-instagram"></i>
                </a>

                <a href="https://github.com/Digao46" target="_blank" rel="noreferrer" className="ms-3 me-3">
                    <i className="fa-brands fa-square-github"></i>
                </a>

                <a href="https://www.linkedin.com/in/diogo-melo-60870a214" target="_blank" rel="noreferrer" className="ms-3 me-3">
                    <i className="fa-brands fa-linkedin"></i>
                </a>

                <a href="https://api.whatsapp.com/send?phone=5511943923846" target="_blank" rel="noreferrer" className="ms-3 me-3">
                    <i className="fa-brands fa-whatsapp"></i>
                </a>
            </div>
        </footer>
    );
};

export default Footer; 