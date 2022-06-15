import React from "react";
import About from "./Components/About";
import Navbar from "./Components/Navbar";
import Projects from "./Components/Projects";
import Services from "./Components/Services";

const App = () => {
  return (
    <>
      <Navbar />
      <Projects />
      <About />
      <Services />
    </>
  );
};

export default App;
