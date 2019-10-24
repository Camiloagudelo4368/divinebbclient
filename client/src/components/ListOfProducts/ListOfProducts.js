import React from "react";
import "./listOfProducts.css"

function listOfProducts() {
    return (
        <div>
            < header className="header">
                < div className="navCa" >
                    <a className="headerLogo" href="/">
                        <img className="imgLogo" srcSet="/img/logo/mblackwatermark.png" alt="" />
                    </a>
                    <nav className="navbar navbar-expand-lg navbarMain">
                        <button className="navbar-toggler w-100 text-right" type="button" data-toggle="collapse"
                            data-target="#navbarText" aria-controls="navbarText" aria-expanded="false"
                            aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon">
                                <div className="menuIcon"></div>
                                <div className="menuIcon"></div>
                                <div className="menuIcon"></div>
                            </span>
                        </button>

                        <div className="collapse navbar-collapse" id="navbarText">

                            <ul className="navbar-nav ml-auto">

                                <li className="nav-item">
                                    <a id="startLink" className="nav-link navLink" href="/">Home</a>
                                </li>
                                <li className="nav-item">
                                    <a id="aboutLink" className="nav-link navLink" href="/aboutus">Why?</a>
                                </li>
                                {/* <li className="nav-item">
                                    <a id="sumaryLink" className="nav-link navLink" href="/newcollection">New Collections</a>
                                </li>
                                <li className="nav-item">
                                    <a id="skillsLink" className="nav-link navLink" href="/newcollection">All Products</a>
                                </li> */}
                                <li className="nav-item">
                                    <a className="nav-link navLink" href="mailto:divinebloomsbowtique@gmail.com">Contact</a>
                                </li>

                            </ul>

                        </div>

                    </nav>
                    <div>
                        <a id="placeOrderLink" target="_blank" rel="noopener noreferrer" href="https://www.etsy.com/shop/DivineBloomsbowtique">Place your order</a>
                    </div>
                </div >
            </header >
        </div>
    );
}

export default listOfProducts;

