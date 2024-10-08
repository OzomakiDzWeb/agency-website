import React from "react";
import { BsArrowRight } from "react-icons/bs";
import { Link } from "react-scroll";
const Hero = () => {
  return (
    <div className="banner cs-style1" id="home">
      <div className="cs-shape_1"></div>
      <div className="cs-shape_1"></div>
      <div className="cs-shape_1"></div>

      {/* banner content */}
      <div className="px-4 lg:px-24">
        <h1 className="md:w-2/3 lg:text-8xl sm:text-3xl text-5xl mb-5 text-white font-bold lg:leading-snug sm:lead">
          Creativity In Our Blood Line
        </h1>
        {/* banner btn */}
        <div className="text-white   text-lg flex md:flex-row flex-col-reverse md:items-center items-start  gap-8 justify-between">
          <div>
            <a
              href=""
              className="inline-flex items-center gap-2 font-semibold hover:text-orange transition-all duration-300 ease-in"
            >
              <span>Get a Quote</span>
              <BsArrowRight />
            </a>
          </div>
          <div className="md:w-1/2">
            <p className="">
              We deliver best problem solving solition for our client and
              provide finest finishing product in present and upcoming future
            </p>
          </div>
        </div>
      </div>
      {/* scroll arrow */}
      <Link to="services" smooth={true} className="cs-down_btn md:mt-20 mt-8">.</Link>
    </div>
  );
};

export default Hero;
