import React, { Component } from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ListOfProducts from "../components/ListOfProducts";
import "./style.css"

class AboutUs extends Component {

  render() {
    return (
      <div>
        <Header />
        <ListOfProducts />
        <Footer />
      </div>
    );
  }
}

export default AboutUs;
