import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const About = () => {
  return (
    <div>
      <div className="container mt-5 mb-2 text-center">
        <h2 className="fw-bold mb-4">Why GhibliFrames?</h2>
        <div className="row d-flex justify-content-center">
          <div className="col-lg-3 col-md-6 p-3 m-2 rounded shadow bg-light">
            <h3 className="fw-bold">Free & Open</h3>
            <p className="fs-5">Upload and browse without any restrictions.</p>
          </div>
          <div className="col-lg-3 col-md-6 p-3 m-2 rounded shadow bg-light">
            <h3 className="fw-bold">Ghibli Aesthetic</h3>
            <p className="fs-5">A place dedicated to breathtaking Ghibli-inspired art.</p>
          </div>
          <div className="col-lg-3 col-md-6 p-3 m-2 rounded shadow bg-light">
            <h3 className="fw-bold">Easy to Use</h3>
            <p className="fs-5">Simply upload and share your favorite images with the world!</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
