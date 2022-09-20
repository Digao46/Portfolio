import React from "react";
import "./Main.scss";

import AboutMe from "../templates/aboutMe/AboutMe"
import Portfolio from "../templates/portfolio/Portfolio"
import Contact from "../templates/contact/Contact";

class Main extends React.Component {
  render() {
    return (
      <main>
        <AboutMe></AboutMe>
        <Portfolio></Portfolio>
        <Contact></Contact>
      </main>
    );
  };
};

export default Main;
