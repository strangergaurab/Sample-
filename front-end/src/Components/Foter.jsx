import React from "react";
import logo from "../Images/logo.png";
import "../style/Foter.css";
import image4 from "../Images/1.jpg";
import image1 from "../Images/2.jpg";
import image2 from "../Images/3.jpg";
import image3 from "../Images/4.jpg";

function Foter() {
  return (
    <div
      className="container-fluid bg-dark text-white-50 footer pt-5 mt-5 wow fadeIn"
      data-wow-delay="0.1s"
    >
      <div className="container py-5">
        <div className="row g-5">
          <div className="col-lg-3 col-md-6">
            <h5 className="text-white mb-4">Get In Touch</h5>
            <p className="mb-2">
              <i className="fa fa-map-marker-alt me-3"></i>Location, City, Country
            </p>
            <p className="mb-2">
              <i className="fa fa-phone-alt me-3"></i>+012 345 67890
            </p>
            <p className="mb-2">
              <i className="fa fa-envelope me-3"></i>info@example.com
            </p>
            <div className="d-flex pt-2">
              <button
                className="btn btn-outline-light btn-social"
                onClick={() => window.open("https://twitter.com/freewebsitecode", "_blank")}
              >
                <i className="fab fa-twitter"></i>
              </button>
              <button
                className="btn btn-outline-light btn-social"
                onClick={() => window.open("https://www.facebook.com/", "_blank")}
              >
                <i className="fab fa-facebook-f"></i>
              </button>
              <button
                className="btn btn-outline-light btn-social"
                onClick={() => window.open("https://youtube.com/freewebsitecode", "_blank")}
              >
                <i className="fab fa-youtube"></i>
              </button>
              <button
                className="btn btn-outline-light btn-social"
                onClick={() => window.open("https://www.linkedin.com/feed/", "_blank")}
              >
                <i className="fab fa-linkedin-in"></i>
              </button>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <h5 className="text-white mb-4">Quick Links</h5>
            <button className="btn btn-link text-white-50" onClick={() => {/* handle About Us click */}}>
              About Us
            </button>
            <button className="btn btn-link text-white-50" onClick={() => {/* handle Contact Us click */}}>
              Contact Us
            </button>
            <button className="btn btn-link text-white-50" onClick={() => {/* handle Our Services click */}}>
              Our Services
            </button>
            <button className="btn btn-link text-white-50" onClick={() => {/* handle Privacy Policy click */}}>
              Privacy Policy
            </button>
            <button className="btn btn-link text-white-50" onClick={() => {/* handle Terms & Condition click */}}>
              Terms & Condition
            </button>
          </div>
          <div className="col-lg-3 col-md-6">
            <h5 className="text-white mb-4">Photo Gallery</h5>
            <div className="row g-2 pt-2">
              <div className="col-4">
                <img className="img-fluid rounded bg-light p-1" src={image3} alt="Event 1" />
              </div>
              <div className="col-4">
                <img className="img-fluid rounded bg-light p-1" src={image4} alt="Event 2" />
              </div>
              <div className="col-4">
                <img className="img-fluid rounded bg-light p-1" src={image1} alt="Event 3" />
              </div>
              <div className="col-4">
                <img className="img-fluid rounded bg-light p-1" src={image2} alt="Event 4" />
              </div>
              <div className="col-4">
                <img className="img-fluid rounded bg-light p-1" src={image3} alt="Event 5" />
              </div>
              <div className="col-4">
                <img className="img-fluid rounded bg-light p-1" src={image3} alt="Event 6" />
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <h5 className="text-white mb-4">Newsletter</h5>
            <p>Dolor amet sit justo amet elitr clita ipsum elitr est.</p>
            <div
              className="position-relative mx-auto"
              style={{ maxWidth: "400px" }}
            >
              <input
                className="form-control bg-white w-100 p-4 ps-4 pe-5"
                type="text"
                placeholder="Your email"
              />
              <button
                type="button"
                className="btn btn-primary py-2 position-absolute top-0 end-0 mt-1.5 me-2"
              >
                SignUp
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="copyright">
          <div className="row">
            <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
              &copy;{" "}
              <a className="border-bottom" href="https://freewebsitecode.com">
                <img src={logo} className="happy" alt="Free Website Code" />
              </a>
              , All Right Reserved. Designed By{" "}
              <a className="border-bottom" href="https://freewebsitecode.com">
                Free Website Code
              </a>
            </div>
            <div className="col-md-6 text-center text-md-end">
              <div className="footer-menu">
                <button className="btn btn-link" onClick={() => {/* handle Home click */}}>
                  Home
                </button>
                <button className="btn btn-link" onClick={() => {/* handle Cookies click */}}>
                  Cookies
                </button>
                <button className="btn btn-link" onClick={() => {/* handle Help click */}}>
                  Help
                </button>
                <button className="btn btn-link" onClick={() => {/* handle FQAs click */}}>
                  FQAs
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Foter;
