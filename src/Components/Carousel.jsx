import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/js/dist/carousel";

import img1 from "../assets/anime1.jpg";
import img2 from "../assets/anime3.jpg";
import img3 from "../assets/anime5.jpg";
import img4 from "../assets/anime4.jpg";
import img5 from "../assets/anime2.jpg";
import img6 from "../assets/anime3.jpg";
import img7 from "../assets/anime5.jpg";
import img8 from "../assets/anime2.jpg";
import img9 from "../assets/anime1.jpg";
import img10 from "../assets/anime4.jpg";

const images = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10];

const Carousel = () => {
  return (
    <div className="container mt-4">
      <div id="ghibliCarousel" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          {images.map((_, index) => {
            if (index + 5 <= images.length) {
              return (
                <div key={index} className={`carousel-item ${index === 0 ? "active" : ""}`}>
                  <div className="d-flex justify-content-center">
                    {images.slice(index, index + 5).map((image, imgIndex) => (
                      <img
                        key={imgIndex}
                        src={image}
                        className="rounded m-1"
                        alt={`Slide ${index + imgIndex + 1}`}
                        width="200"
                        height="200"
                      />
                    ))}
                  </div>
                </div>
              );
            }
            return null;
          })}
        </div>

        {/* Previous & Next Buttons */}
        <button className="carousel-control-prev" type="button" data-bs-target="#ghibliCarousel" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#ghibliCarousel" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
        </button>
      </div>
    </div>
  );
};

export default Carousel;
