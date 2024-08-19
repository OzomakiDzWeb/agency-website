import React from 'react'
import SimpleSlider from './Slidercomonent';

const Project = () => {
  return (
    <div className="text-white " id="portfolio">
      <div className="w-full text-center">
        <h1 className="text-2xl font-bold">Latest Projects</h1>
        <p className="text-xl">Portfolio to explore</p>
      </div>
      {/* slider */}
      <div className="">
        <SimpleSlider />
        <div className="text-center m-auto text-xl font-semibold my-12 w-2/3">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt esse
          optio at recusandae, vitae nobis excepturi iusto perspiciatis
          voluptates repellat dolorem explicabo magni soluta aut aperiam
          dignissimos nisi a voluptatibus!
        </div>
      </div>
    </div>
  );
}

export default Project