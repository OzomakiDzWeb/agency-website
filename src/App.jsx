import { useEffect, useState } from "react";
import "./App.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Navbar from "./component/Navbar";
import Hero from "./component/Hero";
import About from "./component/About";
import Services from "./component/Services";
import SimpleSlider from "./component/Slidercomonent";
import Project from "./component/Project";


function App() {
  return (
    <div className="bg-dark">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Project/>
    </div>
  );
}

export default App;
