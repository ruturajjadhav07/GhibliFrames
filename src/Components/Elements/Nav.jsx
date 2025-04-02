import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import Main from "../Main"

const Nav = () => {
  return (
    <div style={{backgroundColor:"#7BAFD4",minHeight:"100vh"}}>
      <div className="">
        <div className="container col-md-10">
          <div className="d-flex justify-content-center">
            <nav className="navbar navbar-expand-lg">
              <div className="container-fluid ">
                {/* <a className="navbar-brand" href="#">
                  Navbar
                </a> */}
                <button
                  className="navbar-toggler"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarNav"
                  aria-controls="navbarNav"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                  <ul className="navbar-nav">
                    <li className="nav-item">
                      <a
                        className="nav-link active"
                        aria-current="page"
                        href="#"
                      >
                        Home
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link active" href="#">
                        About
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link active" href="#">
                        Features
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
          </div>
          <hr className="m-0"></hr>
         <Main/> 
        </div>
      </div>
    </div>
  );
};

export default Nav;
