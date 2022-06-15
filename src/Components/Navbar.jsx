import React from "react";

const Navbar = () => {
  return (
    <>
      {/* nav start */}
      <header>
        <div className="container">
          <div className="header">
            <div className="">
              <img src="logo.png" className="logo" alt="" width={40}/>
            </div>
            <nav>  
              <ul>
                    <li>
                      <a className="nav-link" href="#">
                        Home
                      </a>
                    </li>
                    <li>
                      <a className="nav-link" href="#">About</a>
                  </li>
                  
                  <li>
                    <a className="nav-link" href="#">Projects</a>
                  </li>
                  
                  <li>
                    <a className="nav-link " href="#">Events</a>
                  </li>

                  <li>
                    <a className="nav-link " href="#">Blogs</a>
                  </li>
                </ul>
             
            </nav>

            <div className="square-yellow font-default">
              Contact
            </div>
          </div>
          
        </div>
      </header>

  
      {/* header end */}

      {/*======> Banner Section <=============*/}
      <section className="banner__section">
         <div className="container">
          <div className="banner__content">
            <h1>BAKSH</h1>
            <h3 className="value_text">WE VALUE YOUR DREAMS</h3>
            <p>
              Our core mission is to provide the highest caliber real estate{" "}
              <br /> developement, management, and investment services
            </p>
          </div>
        </div>
      </section>


      
      {/* contact us start */}
      <div className="container">
        <div className="row">
          <div className="col-md-6 col-12 contact">
            <h2 className="real-estate">NEED A REAL ESTATE </h2>
            <h2 className="sol">SOLUTION?</h2>
            <p className="conp">CONTACT US NOW</p>
          </div>
          <div className="col-md-6 col-12 contact2">
            <h2 className="call">Call us:</h2>
            <p className="uan">
              UAN (051) 111 789 111 <br />
              +92 331 1111 789
            </p>
          </div>
        </div>
      </div>
      {/* contact us end */}
    </>
  );
};

export default Navbar;
