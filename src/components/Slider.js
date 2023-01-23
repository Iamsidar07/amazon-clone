import React from "react";
import AwesomeSlider from "react-awesome-slider";
import "react-awesome-slider/dist/custom-animations/cube-animation.css";
const Slider = ({img1,img2,img3,img4}) => {
  return (
    <AwesomeSlider animation="cubeAnimation">
      <div data-src={img1} />
      <div data-src={img2} />
      <div data-src={img3} />
      <div data-src={img4} />
    </AwesomeSlider>
  );
};

export default Slider;
