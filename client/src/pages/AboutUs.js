import React, { Component } from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import About from "../components/About";
import "./style.css"

class AboutUs extends Component {

  render() {
    return (
      <div>
        <Header />
        <About />
        <Footer />
      </div>
    );
  }
}

export default AboutUs;
