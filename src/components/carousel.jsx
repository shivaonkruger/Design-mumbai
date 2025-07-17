import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Autoplay() {
    const [slider,setslider]=usestate([
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
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear"
  };
  return (
    <div className="slider-container">
      <Slider {...settings}>
        {slider.map((item)=>
            <div>
             <img src={slider.img} alt="" className="w-[128px] h-[95px]" />
            </div>)}
      </Slider>
    </div>
   
  );
}

export default Autoplay;
