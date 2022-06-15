import React from "react";
import Carousel from "react-bootstrap/Carousel";


const Projects = () => {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-4">
            <h2 className="our">
              OUR <span id="value2">VALUABLE UPCOMING</span>
            </h2>
            <h2 className="pro">PROJECTS</h2>
            <p className="parap">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam,
              ipsam. Expedita quis cupiditate sunt, placeat incidunt odit
              deserunt assumenda voluptas.
            </p>
          </div>
        </div>
      </div>
      {/* carousel */}
      {/* <div className="carousel">
        <Carousel>
          <Carousel.Item>
            <img className="d-block w-100" src="" alt="First slide" />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="holder.js/800x400?text=Second slide&bg=282c34"
              alt="Second slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="holder.js/800x400?text=Third slide&bg=20232a"
              alt="Third slide"
            />
          </Carousel.Item>
        </Carousel>
      </div> */}
      );
    </>
  );
};

export default Projects;
