import React from "react";

const About = () => {
  return (
    <>
      <div className="about__section">
         <div className="container">
            <div className="about__content">
              <div className="__explain">
                <div>
                  <h3 className="aboutheading">ABOUT</h3>
                  <h1 className="aboutheading2">BAKSH</h1>
                  <p className="underline">Discover more</p>
                </div>
                <div className="my-5">
                  <p className="abt-para">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque
                    consectetur nemo dolorem facilis incidunt repellat iusto quasi
                    velit rerum nesciunt!
                  </p>
                 </div>
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
