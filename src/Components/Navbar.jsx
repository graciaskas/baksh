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
    </>
  );
};

export default Navbar;
