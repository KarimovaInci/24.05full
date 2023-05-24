import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";
import "./MySlider.scss"

const MySlider = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  return (
    <>
      <Carousel activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://preview.colorlib.com/theme/cozastore/images/slide-01.jpg.webp"
            alt="First slide"
          />
          <Carousel.Caption className="slider__title">
            <h2>Women Collection 2018</h2>
            <h1>NEW SEASON</h1>
            <button>SHOP NOW</button>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://preview.colorlib.com/theme/cozastore/images/slide-02.jpg.webp"
            alt="Second slide"
          />

          <Carousel.Caption className="slider__title">
           <h2>Men New-Season</h2>
            <h1>JACKETS & COATS</h1>
            <button>SHOP NOW</button>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://preview.colorlib.com/theme/cozastore/images/slide-03.jpg.webp"
            alt="Third slide"
          />

          <Carousel.Caption className="slider__title">
          <h2>Women Collection 2018</h2>
          <h1>NEW ARRIWALS</h1>
          <button>SHOP NOW</button>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </>
  );
};

export default MySlider;
