import React from "react";
import "./carousel.css";
import "./pallete.css";
// import "../Footer.css"

function Carousel() {
  return (
    <div>
      {/* Carousel Wrapper*/}
      <div id="carouselIndex" className="carousel slide" data-ride="carousel">

        {/* Indicators*/}
        <ol className="carousel-indicators">
          <li data-target="#carouselIndex" data-slide-to="0" className="active"></li>
          <li data-target="#carouselIndex" data-slide-to="1"></li>
          <li data-target="#carouselIndex" data-slide-to="2"></li>
          <li data-target="#carouselIndex" data-slide-to="3"></li>
          <li data-target="#carouselIndex" data-slide-to="4"></li>
          <li data-target="#carouselIndex" data-slide-to="5"></li>
          <li data-target="#carouselIndex" data-slide-to="6"></li>
          <li data-target="#carouselIndex" data-slide-to="7"></li>
          <li data-target="#carouselIndex" data-slide-to="8"></li>
          <li data-target="#carouselIndex" data-slide-to="9"></li>
          <li data-target="#carouselIndex" data-slide-to="10"></li>
        </ol>
        {/* /.Indicators*/}

        {/* Slides*/}
        <div className="carousel-inner" role="listbox">

          {/* 12 slide*/}
          <div className="carousel-item active">
            {/* Mask*/}
            <div className="view">
              <div className="full-bg-img flex-center mask"></div>
            </div>
            {/* /.Mask*/}
          </div>
          {/* /.12 slide*/}

          {/* 2 slide*/}
          <div className="carousel-item ">
            {/* Mask*/}
            <div className="view">
              <div className="full-bg-img flex-center mask rgba-grey-light"></div>
            </div>
            {/* /.Mask*/}
          </div>
          {/* /.2 slide*/}

          {/* 3 slide */}
          <div className="carousel-item">
            {/* Mask*/}
            <div className="view">
              <div className="full-bg-img flex-center mask"></div>
            </div>
            {/* /.Mask*/}
          </div>
          {/* /.3 slide */}

          {/* 4 slide*/}
          <div className="carousel-item">
            {/* Mask*/}
            <div className="view">
              <div className="full-bg-img flex-center mask rgba-grey-light"></div>
            </div>
            {/* /.Mask*/}
          </div>
          {/* /.4 slide*/}

          {/* 5 slide*/}
          <div className="carousel-item">
            {/* Mask*/}
            <div className="view">
              <div className="full-bg-img flex-center mask rgba-grey-light"></div>
            </div>
            {/* /.Mask*/}
          </div>
          {/* /.5 slide*/}

          {/* 6 slide*/}
          <div className="carousel-item">
            {/* Mask*/}
            <div className="view">
              <div className="full-bg-img flex-center mask rgba-white-light"></div>
            </div>
            {/* /.Mask*/}
          </div>
          {/* /.6 slide*/}

          {/* 7 slide*/}
          <div className="carousel-item">
            {/* Mask*/}
            <div className="view">
              <div className="full-bg-img flex-center mask rgba-grey-light"></div>
            </div>
            {/* /.Mask*/}
          </div>
          {/* /.7 slide*/}

          {/* 8 slide*/}
          <div className="carousel-item">
            {/* Mask*/}
            <div className="view">
              <div className="full-bg-img flex-center mask rgba-grey-light"></div>
            </div>
            {/* /.Mask*/}
          </div>
          {/* /.8 slide*/}

          {/* 9 slide*/}
          <div className="carousel-item">
            {/* Mask*/}
            <div className="view">
              <div className="full-bg-img flex-center mask rgba-grey-light"></div>
            </div>
            {/* /.Mask*/}
          </div>
          {/* /.9 slide*/}

          {/* 10 slide*/}
          <div className="carousel-item">
            {/* Mask*/}
            <div className="view">
              <div className="full-bg-img flex-center mask "></div>
            </div>
            {/* /.Mask*/}
          </div>
          {/* /.10 slide*/}

          {/* 11 slide*/}
          <div className="carousel-item">
            {/* Mask*/}
            <div className="view">
              <div className="full-bg-img flex-center mask rgba--light"></div>
            </div>
            {/* /.Mask*/}
          </div>
          {/* /.11 slide*/}


        </div>
        {/* /.Slides*/}

        {/* Controls*/}
        <a className="carousel-control-prev" href="#carouselIndex" role="button" data-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="sr-only">Previous</span>
        </a>
        <a className="carousel-control-next" href="#carouselIndex" role="button" data-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="sr-only">Next</span>
        </a>
        {/* /.Controls*/}
      </div>
      {/* /.Carousel Wrapper*/}
    </div>
  );
}

export default Carousel;