import React from "react";
import Slider from "react-slick";
import Portfol from "../assets/portfolio_0.jpg";
export default function SimpleSlider() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 600,
        settings: {
          infinite: true,
          speed: 500,
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 400,
        settings: {
          infinite: true,
          speed: 500,
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="">
      <Slider {...settings} className="mt-5  h-[200px] text-white ">
        <div className=" bg-[url('src/assets/portfolio_0.jpg')] bg-no-repeat rounded-lg   bg-center bg-cover w-full h-[200px] ">
          <div className="w-full h-full flex flex-col justify-center items-center bg-black/60 hover:bg-orange/50 transition-all">
            <h3 className="  ">Colorful Art Work</h3>
            <p>See Details</p>
          </div>
        </div>
        <div className=" bg-[url('src/assets/portfolio_1.jpeg')] bg-no-repeat    bg-center bg-cover w-full h-[200px] ">
          <div className="w-full h-full flex flex-col justify-center items-center bg-black/60 hover:bg-orange/50 transition-all">
            <h3 className="  ">Colorful Art Work</h3>
            <p>See Details</p>
          </div>
        </div>
        <div className=" bg-[url('src/assets/portfolio_2.jpeg')] bg-no-repeat    bg-center bg-cover w-full h-[200px] ">
          <div className="w-full h-full flex flex-col justify-center items-center bg-black/60 hover:bg-orange/50 transition-all">
            <h3 className="  ">Colorful Art Work</h3>
            <p>See Details</p>
          </div>
        </div>
        <div className=" bg-[url('src/assets/portfolio_3.jpeg')]  bg-no-repeat   bg-center bg-cover w-full h-[200px] ">
          <div className="w-full h-full flex flex-col justify-center items-center  hover:bg-orange/50 transition-all">
            <h3 className="  ">Colorful Art Work</h3>
            <p>See Details</p>
          </div>
        </div>
      </Slider>
    </div>
  );
}
