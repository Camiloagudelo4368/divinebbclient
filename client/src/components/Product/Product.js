import React from "react";
import "./product.css";

function product() {
  return (
    <div>
      {/* Footer*/}
      <footer className="page-footer text-center text-md-left pt-4">
        {/* Footer Links*/}
        <div className="container-fluid">
          <div className="row">
            {/* First column*/}
            <div className="col-md-3 offset-md-1">
              <h5 className="font-weight-bold text-uppercase mb-4">Divine design</h5>
              <p>
                I love making hair bows for my girl and was always asked to sell them but had not wanted to put my self out there like that for silly reasons. (we all deal with our own insecurities) I finally felt it was time to step out of my comfort zone and do something that I love. Please join me to be part of this  new adventure created by God.
              </p>
            </div>
            {/* /.First column*/}
            <hr className="clearfix w-100 d-md-none" />
            {/* Second column*/}
            <div className="col-md-2 offset-md-1">
              <h5 className="font-weight-bold text-uppercase mb-4">Bows</h5>
              <ul className="list-unstyled">
                <li><a href="#!">All Products</a></li>
                <li><a href="#!">New Collection</a></li>
              </ul>
            </div>
            {/* /.Second column*/}
            <hr className="clearfix w-100 d-md-none" />
            {/* Third column*/}
            <div className="col-md-2">
              <h5 className="font-weight-bold text-uppercase mb-4">Felt Flowers</h5>
              <ul className="list-unstyled">
                <li><a href="#!">All Products</a></li>
                <li><a href="#!">New Collection</a></li>
              </ul>
            </div>
            {/* /.Third column*/}
            <hr className="clearfix w-100 d-md-none" />
            {/* Fourth column*/}
            <div className="col-md-2">
              <h5 className="font-weight-bold text-uppercase mb-4">Hair Clips</h5>
              <ul className="list-unstyled">
                <li><a href="#!">All Products</a></li>
                <li><a href="#!">New Collection</a></li>
              </ul>
            </div>
            {/* /.Fourth column*/}
          </div>
        </div>
        {/* /.Footer Links*/}
        <hr></hr>
        {/* Call to action*/}
        <div className="call-to-action text-center">
          <h4 className="my-4">Follow Us</h4>
          <ul className="list-unstyled list-inline mb-4">
            <li>
              <h5 className="my-4">Get our latest news</h5>
            </li>
            <li className="list-inline-item"><a href="https://www.instagram.com/divine_blooms/"
              className="fab fa-instagram fa-2x"></a></li>&nbsp;
            <li className="list-inline-item"><a href="https://www.facebook.com/Divine-Blooms-Bowtique-102340111123527/"
              className="fab fa-facebook fa-2x"></a></li>&nbsp;
            <li className="list-inline-item"><a href="https://www.etsy.com/shop/DivineBloomsbowtique"
              className="fab fa-etsy fa-2x"></a></li>
          </ul>
        </div>
        {/* /.Call to action*/}
        {/* Copyright*/}
        <div className="footer-copyright text-center">
          <div className="container-fluid py-3">
            © 2019 Copyright: <a href="https://www.DBBowtique.com">DBBowtique.com</a>
          </div>
        </div>
        {/* /.Copyright*/}
      </footer>
      {/* /.Footer*/}
    </div>
  );
}

export default product;