import React from "react";
import { BsArrowRight } from "react-icons/bs";
import services1 from "../assets/service_1.jpeg";
import services2 from "../assets/service_2.jpeg";
import services3 from "../assets/service_3.jpeg";
import services4 from "../assets/service_4.jpeg";
const Services = () => {
  return (
    <div id="service" className="text-white lg:px-24 px-4">
      <div className="h-36"></div>
      {/* servicec section */}
      <div className="lg:flex lg:justify-between items-start">
        {/* content */}
        <div className="lg:w-1/3 space-y-5">
          <h4 className="text-gray-200 font-semibold text-2xl">
            What can We Do
          </h4>
          <p className="text-5xl font-bold mb-5 leading-snug">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
          <a
            href=""
            className="inline-flex items-center gap-2 font-semibold hover:text-orange transition-all duration-300 ease-in"
          >
            <span>See All servicec</span>
            <BsArrowRight />
          </a>
        </div>
        {/* services card */}
        <div className="flex flex-wrap gap-y-5 lg:w-2/3 my-8 ">
          <div className="lg:w-1/4 hidden lg:block"></div>
          <div className="lg:w-1/4 sm:w-5/12 my-auto hover:shadow-lg hover:shadow-orange rounded-2xl transition-all duration-300">
            <a href="/" className="rounded-2xl block relative">
              <img src={services1} alt="" className="rounded-xl" />
              <div className="absolute bg-black left-0 top-0 opacity-50 h-full w-full rounded-2xl"></div>
              {/* text */}
              <div className="absolute top-1/3 left-4 right-0">
                <span className="w-3 h-3 block rounded-full bg-orange mb-2"></span>
                <h2 className="text-2xl font-bold text-white">UI/UX Design</h2>
              </div>
            </a>
          </div>
          <div className="lg:w-1/4 hidden lg:block"></div>
          <div className="lg:w-1/4 sm:w-5/12 my-auto hover:shadow-lg hover:shadow-orange rounded-2xl transition-all duration-300">
            <a href="/" className="rounded-2xl block relative">
              <img src={services2} alt="" className="rounded-xl" />
              <div className="absolute bg-black left-0 top-0 opacity-50 h-full w-full rounded-2xl"></div>
              {/* text */}
              <div className="absolute top-1/3 left-4 right-0">
                <span className="w-3 h-3 block rounded-full bg-orange mb-2"></span>
                <h2 className="text-2xl font-bold text-white">
                  Digital Marketing
                </h2>
              </div>
            </a>
          </div>

          <div className="lg:w-1/4 sm:w-5/12 my-auto hover:shadow-lg hover:shadow-orange rounded-2xl transition-all duration-300">
            <a href="/" className="rounded-2xl block relative">
              <img src={services3} alt="" className="rounded-xl" />
              <div className="absolute bg-black left-0 top-0 opacity-50 h-full w-full rounded-2xl"></div>
              {/* text */}
              <div className="absolute top-1/3 left-4 right-0">
                <span className="w-3 h-3 block rounded-full bg-orange mb-2"></span>
                <h2 className="text-2xl font-bold text-white">
                  React js project
                </h2>
              </div>
            </a>
          </div>
          <div className="lg:w-1/4 hidden lg:block"></div>
          <div className="lg:w-1/4 sm:w-5/12 my-auto hover:shadow-lg hover:shadow-orange rounded-2xl transition-all duration-300">
            <a href="/" className="rounded-2xl block relative">
              <img src={services4} alt="" className="rounded-xl" />
              <div className="absolute bg-black left-0 top-0 opacity-50 h-full w-full rounded-2xl"></div>
              {/* text */}
              <div className="absolute top-1/3 left-4 right-0">
                <span className="w-3 h-3 block rounded-full bg-orange mb-2"></span>
                <h2 className="text-2xl font-bold text-white">Technology</h2>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
