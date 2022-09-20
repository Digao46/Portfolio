import React from "react";
import "./Portfolio.scss"

import defaultImg from "../../../assets/imgs/defaultProjectImg.png"
import DGWeather from "../../../assets/imgs/templateDGWeather.png"

class Portfolio extends React.Component {
    render() {
        return (
            <section id="portfolio" className="portfolio d-flex flex-column flex-md-row justify-content-center align-items-center">

                <div className="container d-flex row justify-content-center align-items-center">

                    <div data-aos="fade-down" className="headerPortfolio mb-5 d-flex justify-content-center align-items-center">
                        <div>
                            <div className="subtitle text-center pb-3">
                                <span>Meus Projetos ━━━━━</span>
                            </div>
                            <h3 className="title text-center"> Portfólio </h3>
                        </div>
                    </div>

                    <div className="cards container d-flex row justify-content-center align-items-center">

                        <div data-aos="fade-up" className="card p-0 m-4 d-flex justify-content-center align-items-center col-10 col-md-5 col-lg-3">
                            <img className="projectImg" src={DGWeather} alt="projectImg" />


                            <div className="content d-flex flex-column justify-content-center align-items-center text-center">
                                <h3>DG Weather</h3>
                                <p>
                                    Projeto desenvolvido com o intuito de fixar
                                    o que venho aprendendo. Nele podemos consultar dados
                                    meteorológicos de todo o mundo apenas digitando o nome do país,
                                    cidade, ou estado.
                                    <br />
                                    <span className="stack">
                                        Tecnologias utilizadas:
                                        <br />
                                        ReactJS, JS, SCSS
                                    </span>

                                </p>
                                <a className="mt-2 py-2 px-2" href="https://digao46.github.io/DgWeather/" target="_blank" rel="noopener noreferrer"> Ver Mais</a>
                            </div>
                        </div>

                        <div data-aos="fade-up" className="card p-0 m-4 d-flex justify-content-center align-items-center col-10 col-md-5 col-lg-3">
                            <img className="defaultImg" src={defaultImg} alt="projectImg" />
                        </div>

                        <div data-aos="fade-up" className="card p-0 m-4 d-flex justify-content-center align-items-center col-10 col-md-5 col-lg-3">
                            <img className="defaultImg" src={defaultImg} alt="projectImg" />
                        </div>

                    </div>
                </div>
            </section >
        );
    };
};

export default Portfolio