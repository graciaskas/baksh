import React from "react";
import "./About.css";

const About = () => {
  return (
    <>
      <div className="aboutsec">
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-12">
              <h2 className="aboutheading">ABOUT</h2>
              <h2 className="aboutheading2">BAKSH</h2>
              <p className="abt-dis">Discover more</p>
              <span className="line"></span>
              <p className="abt-para">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque
                consectetur nemo dolorem facilis incidunt repellat iusto quasi
                velit rerum nesciunt!
              </p>
            </div>
            <div className="col-md-6 col-12">
              <img src="abt.png" className="abtimg" alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
