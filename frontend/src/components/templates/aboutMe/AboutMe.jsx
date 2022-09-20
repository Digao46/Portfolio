import React from "react";

import "./AboutMe.scss"

import Profile from "../../../assets/imgs/profile.jpg"

class AboutMe extends React.Component {
    render() {
        return (
            <section id="aboutMe" className="aboutMeSection d-flex justify-content-center align-items-center">

                <div className="
                container col-12 d-flex
                flex-column justify-content-center align-items-center
                flex-lg-row justify-content-lg-evenly">

                    <div data-aos="fade-down" data-aos-delay="200" className="imgArea mb-5 pb-3 col-12 col-md-11 col-lg-4">
                        <div className="backImg col-11 col-lg-12 ps-3 pt-3">
                            <img src={Profile} alt="ProfileImage" />
                        </div>
                    </div>

                    <div data-aos="fade-up" className="divAboutMe col-12 col-md-9 col-lg-4">

                        <div className="row d-flex justify-content-center justify-content-lg-start text-center text-lg-start">

                            <div className="headerAboutMe pt-5 pb-4">
                                <div>
                                    <div className="subtitle pb-3">
                                        <span>Quem Eu Sou ━━━━━</span>
                                    </div>
                                    <h3 className="title"> Sobre Mim </h3>
                                </div>
                            </div>

                            <div className="textAboutMe row d-flex justify-content-center justify-content-lg-start text-center text-lg-start">
                                <p data-aos="fade-up" >
                                    Eu sou Diogo, alguns amigos mais próximos
                                    me chamam de Digão, sou um estudante com
                                    algumas habilidades de desenvolvimento
                                    Front-end. No momento estou cursando
                                    TADS na Uninove.
                                </p>

                                <p data-aos="fade-up" >
                                    Venho adquirindo conhecimento teórico e
                                    prático com projetos pessoais, video-aulas e
                                    alguns cursos em plataformas como a udemy
                                </p>

                                <p data-aos="fade-up" className="mb-5">
                                    Sou uma pessoa trabalhadora e orientada para
                                    resultados, procuro sempre trabalhar o máximo
                                    para alcançar o melhor resultado em cada
                                    projeto.
                                </p>
                            </div>

                            <div className="d-flex justify-content-center justify-content-lg-start text-center text-lg-start">
                                <a data-aos="fade-up" href="https://drive.google.com/uc?export=download&id=1uI5vh_1RbCc8O-8R55hIexruxFDDfnwT" target="_blank" rel="noreferrer" className="downloadCV d-flex align-items-center justify-content-center">
                                    Visualizar CV

                                    <i className="ps-2 fa-solid fa-cloud-arrow-down" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    };
};

export default AboutMe;
