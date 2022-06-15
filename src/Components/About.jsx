import React from "react";

const About = () => {
  return (
    <>
      <div className="about__section">
         <div className="container">
            <div className="about__content">
              <div className="__explain">
                  <h3 className="aboutheading">ABOUT</h3>
                  <h2 className="aboutheading2">BAKSH</h2>
                  <p className="abt-dis">Discover more</p>
                  <span className="line"></span>
                  <p className="abt-para">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque
                    consectetur nemo dolorem facilis incidunt repellat iusto quasi
                    velit rerum nesciunt!
                  </p>
                </div>
              
                <div className="__image">
                  <img src="/img/abt.png" className="abtimg" alt="" />
                </div>
            </div>
          </div>
      </div>
    </>
  );
};

export default About;
