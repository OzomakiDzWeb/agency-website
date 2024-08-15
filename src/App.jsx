import { useEffect, useState } from "react";
import "./App.css";
import Navbar from "./component/Navbar";
import Hero from "./component/Hero";

function App() {
 
  return (
    <div className="bg-dark">
      <Navbar />
      <Hero/>
    </div>
  );
}

export default App;
