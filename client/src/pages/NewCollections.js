import React, { Component } from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import UnderConstruction from "../components/UnderConstruction";
import "./style.css"

class NewCollections extends Component {

  render() {
    return (
      <div>
        <Header />
        <UnderConstruction />
        <Footer />
      </div>
    );
  }
}

export default NewCollections;
