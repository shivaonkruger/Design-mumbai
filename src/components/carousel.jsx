import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Autoplay() {
    const [slider,setslider]=useState([
        {img: "https://staging.design-mumbai.com/wp-content/uploads/2025/06/Design-Hunger-1.svg"},
        {img: "https://staging.design-mumbai.com/wp-content/uploads/2025/06/Design-Hunger-1.svg"},
        {img: "https://staging.design-mumbai.com/wp-content/uploads/2025/06/Design-Hunger-1.svg"},
        {img: "https://staging.design-mumbai.com/wp-content/uploads/2025/06/Design-Hunger-1.svg"},
        {img: "https://staging.design-mumbai.com/wp-content/uploads/2025/06/Design-Hunger-1.svg"},
        {img: "https://staging.design-mumbai.com/wp-content/uploads/2025/06/Design-Hunger-1.svg"},
        {img: "https://staging.design-mumbai.com/wp-content/uploads/2025/06/Design-Hunger-1.svg"},
        {img: "https://staging.design-mumbai.com/wp-content/uploads/2025/06/Design-Hunger-1.svg"},
        {img: "https://staging.design-mumbai.com/wp-content/uploads/2025/06/Design-Hunger-1.svg"},
        {img: "https://staging.design-mumbai.com/wp-content/uploads/2025/06/Design-Hunger-1.svg"}
    ])
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 8,
    slidesToScroll: 1,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 2000,
    cssEase: "linear"
  };
  return (
    <div className="slider-container px-[39px] ">
      <div className="border-b-2 border-gray-300 py-[40px]">
        <Slider {...settings}>
        {slider.map((item, index)=>
          <div key={index}>
            <img src={item.img} alt="" className="w-[128px] h-[95px]" />
          </div>)}
      </Slider>
      </div>
    </div>
   
  );
}

export default Autoplay;
