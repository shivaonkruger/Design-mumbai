import React from 'react'
import Slider from "react-slick";


export default function carousel() {
   
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 8,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear"
  }
  return (
    <div className="slider-container w-full flex px-[38px] py-[22px] gap 5">
      <Slider {...settings}>
        <div className="brandimages caret-amber-200 w-[128px] h-[95px]"><img src="https://staging.design-mumbai.com/wp-content/uploads/2024/07/park-hotel_logo.svg" alt="logo" /></div>
        <div className="brandimages caret-amber-200 w-[128px] h-[95px]"><img src="https://staging.design-mumbai.com/wp-content/uploads/2024/07/park-hotel_logo.svg" alt="logo" /></div>
        <div className="brandimages caret-amber-200 w-[128px] h-[95px]"><img src="https://staging.design-mumbai.com/wp-content/uploads/2024/07/park-hotel_logo.svg" alt="logo" /></div>
        <div className="brandimages caret-amber-200 w-[128px] h-[95px]"><img src="https://staging.design-mumbai.com/wp-content/uploads/2024/07/park-hotel_logo.svg" alt="logo" /></div>
        <div className="brandimages caret-amber-200 w-[128px] h-[95px]"><img src="https://staging.design-mumbai.com/wp-content/uploads/2024/07/park-hotel_logo.svg" alt="logo" /></div>
        <div className="brandimages caret-amber-200 w-[128px] h-[95px]"><img src="https://staging.design-mumbai.com/wp-content/uploads/2024/07/park-hotel_logo.svg" alt="logo" /></div>
        <div className="brandimages caret-amber-200 w-[128px] h-[95px]"><img src="https://staging.design-mumbai.com/wp-content/uploads/2024/07/park-hotel_logo.svg" alt="logo" /></div>
        <div className="brandimages caret-amber-200 w-[128px] h-[95px]"><img src="https://staging.design-mumbai.com/wp-content/uploads/2024/07/park-hotel_logo.svg" alt="logo" /></div>
        <div className="brandimages caret-amber-200 w-[128px] h-[95px]"><img src="https://staging.design-mumbai.com/wp-content/uploads/2024/07/park-hotel_logo.svg" alt="logo" /></div>
        <div className="brandimages caret-amber-200 w-[128px] h-[95px]"><img src="https://staging.design-mumbai.com/wp-content/uploads/2024/07/park-hotel_logo.svg" alt="logo" /></div>
      </Slider>
    </div>
  );
}
