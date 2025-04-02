import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import About from "./About";
const Main = () => {
  return (
    <div>
      <div>
        <div className="p-4 mt-2 rounded-3 shadow-lg" style={{backgroundColor:"#C4DBF0"}}>
          <div className="p-4 ">
            <h1 className="text-center fw-1">
              Welcome to <bold>GhibliFrames!</bold>
            </h1>
            <p className="p-4 fs-3 text-center ">
              Love the charm and beauty of Studio Ghibli? At{" "}
              <span className="fw-bold">GhibliSnap</span>, you can freely
              upload, share, and explore stunning Ghibli-style images. No
              registration is needed!
              <br />
            </p>
          </div>
          <About />
        </div>
      </div>
    </div>
  );
};

export default Main;
