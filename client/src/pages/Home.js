import React, { Component } from "react";
import { Link } from "react-router-dom";
// import { Col, Row, Container } from "../components/Grid";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Carousel from "../components/Carousel";
// import Calender from "../components/Calender";
// import Graph from "../components/Graph";
// import API from "../utils/API";
// import MainPageSearch from '../components/MainPageSearch'
// import Nav from '../components/Nav'
import "./style.css"

class Home extends Component {

  render() {
    return (
      <div>
        {/* <Nav></Nav> */}
        {/* <Container> */}
        <Header />
        <Carousel />
        <Footer />
        {/* </Container> */}
      </div>
    );
  }
}

export default Home;
