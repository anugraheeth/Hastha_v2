import React from "react";
import Marquee from "react-fast-marquee";
import img1 from "../images/carousel/1.jpg";
import img2 from "../images/carousel/2.jpg";
import img3 from "../images/carousel/7.jpg";
import img4 from "../images/carousel/3.jpg";
import img5 from "../images/carousel/4.jpg";
import img6 from "../images/carousel/5.jpg";
import img7 from "../images/carousel/6.jpg";

function MarqueeSlider() {
  return (
    <div className="pt-8 pl-8 pr-8 h-90 w-auto">
        <div className="ml-8 mb-8">
            <h1 className="text-2xl font-semibold text-gray-800 mb-2">Gallery</h1>
        </div>
      
      <Marquee speed={100} delay={0}>
        <div className="flex space-x-6 space-y-0">
          <div className="image_wrapper">
            <img
              src={img1}
              alt="Partner 1"
              className="w-64 h-64 object-cover rounded-lg shadow-md max-w-full max-h-full"
            />
          </div>
          <div className="image_wrapper">
            <img
              src={img2}
              alt="Partner 2"
              className="w-64 h-64 object-cover rounded-lg shadow-md max-w-full max-h-full"
            />
          </div>
          <div className="image_wrapper">
            <img
              src={img3}
              alt="Partner 3"
              className="w-64 h-64 object-cover rounded-lg shadow-md max-w-full max-h-full"
            />
          </div>
          <div className="image_wrapper">
            <img
              src={img4}
              alt="Partner 4"
              className="w-64 h-64 object-cover rounded-lg shadow-md max-w-full max-h-full"
            />
          </div>
          <div className="image_wrapper">
            <img
              src={img5}
              alt="Partner 5"
              className="w-64 h-64 object-cover rounded-lg shadow-md max-w-full max-h-full"
            />
          </div>
          <div className="image_wrapper">
            <img
              src={img6}
              alt="Partner 6"
              className="w-64 h-64 object-cover rounded-lg shadow-md max-w-full max-h-full"
            />
          </div>
          <div className="image_wrapper">
            <img
              src={img7}
              alt="Partner 7"
              className="w-64 h-64 object-cover rounded-lg shadow-md max-w-full max-h-full mr-6"
            />
          </div>
        </div>
      </Marquee>
    </div>
  );
}

export default MarqueeSlider;
