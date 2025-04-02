import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import { useNavigate } from "react-router-dom";

import About from "./About";

const Main = () => {
  let navigate = useNavigate();

  const handleClick = (e) => {
    e.preventDefault();
    navigate("/upload");
  };

  return (
    <div>
      <div className="container">
        <div
          className="p-4 m-4 rounded-3 shadow"
          style={{
            backgroundColor: "rgba(196, 219, 240, 0.4)", 
          }}
        >
          <div className="p-4">
            <h1 className="text-center fw-bold">
              Welcome to <span style={{ color: "#2C3E50" }}>GhibliFrames!</span>
            </h1>
            <p className="p-4 fs-3 text-center">
              Love the charm and beauty of Studio Ghibli? At{" "}
              <span className="fw-bold">GhibliFrames</span>, you can freely
              upload, share, and explore stunning Ghibli-style images. No{" "}
              <span className="text-danger">SignUp</span> needed!
            </p>
          </div>

          <div className="d-flex align-items-center justify-content-center">
            <button
              className="btn border border-dark rounded-5 text-dark border-info custom-btn"
              onClick={handleClick}
            >
              Get Started
            </button>
          </div>

          <About />
        </div>
      </div>

      <style>
        {`
          .custom-btn {
            transition: all 0.3s ease-in-out;
            padding: 10px 20px;
            font-size: 18px;
          }
          .custom-btn:hover {
            background-color: #5dade2; /* Soft blue */
            color: white;
            border-color: #2c3e50;
          }
        `}
      </style>
    </div>
  );
};

export default Main;
