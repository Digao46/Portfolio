import "./Header.scss";
import React from "react";


import Logo from "../../assets/imgs/logo.png";
import CodingImg from "../../assets/imgs/coding.png";

class Header extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      isActive: true
    }
  }

  handleActive = () => {
    this.setState({ isActive: !this.state.isActive })

    const menu = document.getElementById("hamburguer");
    const menuItems = document.getElementById("menuMobile")

    if (this.state.isActive === true) {
      menu.className = 'hamburguer active'
      menuItems.className = 'menuMobile visibility-block'
    } else {
      menu.className = 'hamburguer'
      menuItems.className = 'menuMobile visibility-none'
    }
  }

  render() {
    return (
      <header id="home" className="d-flex flex-column col-12 align-items-center justify-content-evenly">
        <span className="nav col-12 d-flex justify-content-between justify-content-md-around align-items-center">

          <div className="logo ms-2">
            <a href="#home">
              <img src={Logo} alt="Logo Digão" />
            </a>
          </div>

          <nav className="navMenu d-none d-md-block">
            <ul className="d-flex justify-content-evenly align-items-center m-0">
              <li className="home ms-5">
                <a href="#home"> Home </a>
              </li>
              <li className="aboutMe ms-5">
                <a href="#aboutMe"> Sobre Mim </a>
              </li>
              <li className="projects ms-5">
                <a href="#portfolio"> Projetos </a>
              </li>
              <li className="contacts ms-5">
                <a href="#contact"> Contato </a>
              </li>
            </ul>
          </nav>

          <nav className="menuHamburguer d-block d-md-none me-4">
            <button
              id="hamburguer"
              className="hamburguer"
              onClick={this.handleActive} >
              <span className="line"></span>
              <span className="line"></span>
              <span className="line"></span>
            </button>
          </nav>

          <div
            id="menuMobile"
            className="menuMobile visibility-none" >
            <ul>
              <li onClick={this.handleActive} className="home d-flex mb-2 pt-3">
                <div className="iconArea d-flex justify-content-center">
                  <i className="fa fa-home"></i>
                </div>
                <a href="#home" className="ps-4"> Home </a>
              </li>

              <div className="separationLine"></div>

              <li onClick={this.handleActive} className="aboutMe d-flex mb-2 pt-3">
                <div className="iconArea d-flex justify-content-center">
                  <i className="fa fa-person"></i>
                </div>
                <a href="#aboutMe" className="ps-4"> Sobre Mim </a>
              </li>

              <div className="separationLine"></div>

              <li onClick={this.handleActive} className="projects d-flex mb-2 pt-3">
                <div className="iconArea d-flex justify-content-center">
                  <i className="fa fa-laptop-file"></i>
                </div>
                <a href="#portfolio" className="ps-4"> Projetos </a>
              </li>

              <div className="separationLine"></div>

              <li onClick={this.handleActive} className="contacts d-flex mb-2 pt-3">
                <div className="iconArea d-flex justify-content-center">
                  <i className="fa fa-phone"></i>
                </div>
                <a href="#contact" className="ps-4"> Contato </a>
              </li>

              <div className="separationLine"></div>
            </ul>
          </div>
        </span>

        <div className="presentation container col-12 d-flex justify-content-md-evenly">
          <div className="presentationText col-12 col-lg-4 d-flex flex-column align-items-center align-items-lg-start">

            <p className="hello m-0"> OLÁ 👋 EU SOU </p>
            <h1 className="name mb-3 text-center text-md-start">Diogo Melo</h1>
            <h3 className="role mb-4">DESENVOLVEDOR FRONT-END</h3>
            <p className="info mb-4 text-center text-md-start">
              Sou um estudante, no caminho para se tornar um Desenvolvedor Full
              Stack
            </p>
            <a
              className="linkContact d-flex align-items-center justify-content-center"
              href="#contact"
            >
              Entre em contato
            </a>
          </div>

          <div className="imgArea d-none d-lg-block col-4 d-flex align-items-center justify-content-center">
            <img className="codingImg" src={CodingImg} alt="" />
            <hr />
          </div>

        </div>

      </header>
    );
  };
};

export default Header;
