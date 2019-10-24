import React, { Component } from "react";
import { Link } from "react-router-dom";
import API from "../utils/CartAPI"
import Header from "../components/Header";
import Footer from "../components/Footer";
import ShoppingCart from "../components/ShoppingCart";
import "./style.css";

class Cart extends Component {

  render() {

    return (
      <div>
        <Header />
        <ShoppingCart />
        <Footer />
      </div>
    );
  }
}

export default Cart;
