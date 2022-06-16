import React from "react";
import About from "./Components/About";
import Banner from "./Components/Banner";
import Contact from "./Components/Contact";
import Digital from "./Components/Digital";
import Navbar from "./Components/Navbar";
import Projects from "./Components/Projects";
import Services from "./Components/Services";

import "./css/main.css";

const App = () => {
  return (
    <>
      <Navbar />
      <Banner />
      <Contact />
      <Projects />
      <Digital />
      <About />
      <Services />
    </>
  );
};

export default App;
