import React from "react";
import Carousel from "react-bootstrap/Carousel";
import ExampleCarouselImage from "../assets/tyra.jpg";
import "../styles/styles.css";

export default function List() {
  return (
    <div className="container my-5">
      <div className="row">
        <div className="col">
          <Carousel interval={null} className="custom-carousel">
            <Carousel.Item className="carousel-img-height">
              <img
                className="d-block img-fluid"
                src={ExampleCarouselImage}
                alt="First slide"
              />
              <Carousel.Caption>
                <h3>First slide label</h3>
                <p>
                  Nulla vitae elit libero, a pharetra augue mollis interdum.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item className="carousel-img-height">
              <img
                className="d-block img-fluid"
                src={ExampleCarouselImage}
                alt="First slide"
              />
              <Carousel.Caption>
                <h3>Second slide label</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item className="carousel-img-height">
              <img
                className="d-block img-fluid"
                src={ExampleCarouselImage}
                alt="First slide"
              />
              <Carousel.Caption>
                <h3>Third slide label</h3>
                <p>
                  Praesent commodo cursus magna, vel scelerisque nisl
                  consectetur.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </div>
        <div className="col">
          <h3>English Hagwon</h3>
          <h4>Daegu</h4>
          <p>2.5 - 3 million won</p>
          <p>Come and teach here, you'll have a really rad time!</p>
        </div>
      </div>
    </div>
  );
}
