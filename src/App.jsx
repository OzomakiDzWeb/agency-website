import { useEffect, useState } from "react";
import "./App.css";
import Navbar from "./component/Navbar";
import Hero from "./component/Hero";
import About from "./component/About";

function App() {
 
  return (
    <div className="bg-dark">
      <Navbar />
      <Hero/>
      <About/>
    </div>
  );
}

export default App;
