import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

const Connect = () => {
  return (
    <div>
      <div>
        <div className="container text-center">
          <hr className="" />
          <h5 className="fw-bold ">Connect with Me</h5>
          <div className="d-flex justify-content-center gap-3 mt-2">
            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/ruturaj-jadhav-0a250821b/"
              className="text-dark fs-4"
              target="_blank"
            >
              <i className="bi bi-linkedin"></i>
            </a>

            {/* GitHub */}
            <a
              href="https://github.com/ruturajjadhav07"
              className="text-dark fs-4"
              target="_blank"
            >
              <i className="bi bi-github"></i>
            </a>

            {/* Twitter */}
            <a
              href="https://x.com/spoiidermon"
              className="text-dark fs-4"
              target="_blank"
            >
              <i className="bi bi-twitter-x"></i>
            </a>

            {/* Instagram */}
            <a
              href="https://www.instagram.com/ruturajj_07/"
              className="text-dark fs-4"
              target="_blank"
            >
              <i className="bi bi-instagram"></i>
            </a>
          </div>
          <hr className="" />
          <p className="fs-4 mb-1 p-1" style={{marginTop:"-16px"}}>Made with ❤️ by ruturajj</p>
        </div>
      </div>
    </div>
  );
};

export default Connect;
