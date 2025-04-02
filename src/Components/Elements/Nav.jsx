import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import Main from "../Main";
import Footer from "./Footer";
import ghibliBanner from "../../assets/anime.jpg";

const Nav = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div style={{ backgroundColor: "#7BAFD4", minHeight: "100vh" }}>
      <div
        style={{
          position: "relative",
          backgroundImage: `url(${ghibliBanner})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          minHeight: "100vh",
        }}
      >
        {/* Overlay for readability */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(123, 175, 212, 0.7)", // Blue overlay
          }}
        ></div>

        {/* Navbar */}
        <nav
          className={`navbar navbar-expand-lg fixed-top ${
            scrolled ? "scrolled-navbar" : ""
          }`}
          style={{
            transition: "all 0.3s ease-in-out",
            padding: "10px 0",
          }}
        >
          <div className="container-fluid">
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
            <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="#">
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link active" href="#">
                    Get Started
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        {/* Content */}
        <div className="container col-md-10 position-relative" style={{ paddingTop: "40px" }}>
          <hr></hr>
          <Main />
          <Footer />
        </div>
      </div>
      <style>
        {`
          .scrolled-navbar {
            background: rgba(123, 175, 212 , 0.6);
            backdrop-filter: blur(10px);
            box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1); 
          }
        `}
      </style>
    </div>
  );
};

export default Nav;
