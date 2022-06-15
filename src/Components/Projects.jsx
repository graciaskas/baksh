import React from "react";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const Projects = (props) => {
  let slider = null;
  const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 2,
      slidesToScroll: 1,
      responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
                dots: true
              }
          },
      ]
  };
    
  const next = () => slider.slickNext();
      
  const  previous = () => slider.slickPrev();
        
  return (
    <>
      <section className="project__section">
        <div className="container">
          <div className="project__content">
            <div className="__explain">
                <h2 className="our">
                  OUR <span className="text-small text-yellow">VALUABLE UPCOMING</span>
                </h2>
                <h2 className="pro">PROJECTS</h2>
                <p className="parap">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam,
                  ipsam. Expedita quis cupiditate sunt, placeat incidunt odit
                  deserunt assumenda voluptas.
                </p>
            </div>
            <div className="__carousel">
              <Slider {...settings} ref={c => (slider = c)} className="__projects">
                <div className="__project">
                  <img className="d-block w-100" src="/img/3.png" alt="First slide" />
                </div>
                 <div className="__project">
                  <img className="d-block w-100" src="/img/2.png" alt="First slide" />
                </div>
                <div className="__project">
                  <img className="d-block w-100" src="/img/1.png" alt="First slide" />
                </div>
                 <div className="__project">
                  <img className="d-block w-100" src="/img/4.png" alt="First slide" />
                </div>
                 <div className="__project">
                  <img className="d-block w-100" src="/img/5.png" alt="First slide" />
                </div>
              </Slider>
            </div>
          </div>
         </div>
      </section>
     
       
   


      {/* carousel */}
     
      );
    </>
  );
};

export default Projects;
