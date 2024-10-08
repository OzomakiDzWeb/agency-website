import React from "react";

const About = () => {
  return (
    <div id="about" className="relative text-white md:-mt-[100px] bg-gradient-to-tr from-[#161616] to-[#080808] lg:mx-24 md:py-20 mx-4 py-12 md:px-16 px-6 rounded-xl z-50 flex flex-col md:flex-row justify-between md:items-center gap-12 ">
      <div
        className={`bg-[url(/src/asset/funfact-bg.svg)] bg-no-repeat bg-center h-full w-full absolute top-0 left-0 opacity-75`}
      ></div>
      {/* left side */}
      <div className="md:w-2/5">
        <h2 className="text-5xl font-bold mb-5">Our fun fact</h2>
        <p className="text-gray-300">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel possimus
          harum ut voluptate laudantium iste vitae, minus expedita nam quo
          officia, voluptates at! Hic repellat repellendus natus officia quod
          qui.
        </p>
      </div>
      {/* right side */}
      <div className="md:w-3/5">
        <div className="grid sm:grid-cols-2 grid-cols-1 gap-8">
          <div className="flex h-auto items-center gap-3">
            <h4 className="md:text-5xl text-3xl font-semibold">40k</h4>
            <div>
              <span className="text-orange font-bold text-lg">+</span>
              <p className="mb-2 text-sm leading-tight text-gray-300">
                Global Happy Client
              </p>
            </div>
          </div>
          <div className="flex h-auto items-center gap-3">
            <h4 className="md:text-5xl text-3xl font-semibold">40k</h4>
            <div>
              <span className="text-orange font-bold text-lg">+</span>
              <p className="mb-2 text-sm leading-tight text-gray-300">
                Global Happy Client
              </p>
            </div>
          </div>
          <div className="flex h-auto items-center gap-3">
            <h4 className="md:text-5xl text-3xl font-semibold">40k</h4>
            <div>
              <span className="text-orange font-bold text-lg">+</span>
              <p className="mb-2 text-sm leading-tight text-gray-300">
                Global Happy Client
              </p>
            </div>
          </div>
          <div className="flex h-auto items-center gap-3">
            <h4 className="md:text-5xl text-3xl font-semibold">40k</h4>
            <div>
              <span className="text-orange font-bold text-lg">+</span>
              <p className="mb-2 text-sm leading-tight text-gray-300">
                Global Happy Client
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
