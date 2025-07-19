import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


function Section4() {
    const [slider,setslider] = useState([
        {img:"https://staging.design-mumbai.com/wp-content/uploads/2025/03/DM_Homepage_4.png"},
        {img:"https://staging.design-mumbai.com/wp-content/uploads/2025/03/DM_Homepage_4.png"},
        {img:"https://staging.design-mumbai.com/wp-content/uploads/2025/03/DM_Homepage_4.png"},   
        {img:"https://staging.design-mumbai.com/wp-content/uploads/2025/03/DM_Homepage_4.png"},   
        {img:"https://staging.design-mumbai.com/wp-content/uploads/2025/03/DM_Homepage_4.png"},   
        {img:"https://staging.design-mumbai.com/wp-content/uploads/2025/03/DM_Homepage_4.png"},   
   ])
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay:true
    };
  return (
    <div>
        <div className='px-[70px] flex w-full py-[70px]'>
            <div className='w-[50vw]'>
                <div className='text-gray-400 capitalize w-[481px] h-[25px] text-4xl'>DESIGN MUMBAI</div>
                <div className='text-[23px] py-[40px] text'>Attracting over 9,000 visitors and 100+ leading, global brands,<br />Design Mumbai’s launch in 2024 marked India’s first-ever B2B <br />ternational contemporary design trade show for design,<br />rchitecture, and interiors professionals. </div>
                <div className='text-2xl text-gray-700'><i>“Design Mumbai 2024 was an incredible platform for us at COCRE8 <br />to introduce USM to an audience that truly appreciates design,<br /> sustainability, and timeless craftsmanship. We are excited to return<br /> for the second edition in 2025 and continue sharing our passion for<br /> creating spaces that inspire.”</i></div>
                <div className='text-2xl text-gray-800 py-[30px]'>USM, Exhibitor at Design Mumbai, Switzerland.</div>
                <div className="text-black border-2 w-[100px] h-[60px]  hover:bg-amber-600 hover:border-white hover:text-white text-2xl pt-[12px] pl-[20px] "> Visit </div>
            </div>
            <div className='w-[50vw] pl-[10px]'>
                <Slider {...settings}>
                {slider.map((item,index)=>{
                return(<div key={index} className="h-full w-full pl-[90px]"><img src={item.img} alt=""/></div>)
                })}
                </Slider> 
            </div>
        </div> 
    </div>
    
  )
}

export default Section4
