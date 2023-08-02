import React from "react";
import "../style/Home.css";
import { Swiper, SwiperSlide } from "swiper/react";
import rentRoomData from "../utils/Slider.json";
import { sliderSettings } from "../utils/common.jsx";
import image from "../Images/1.jpg";
import image1 from "../Images/2.jpg";
import image2 from "../Images/3.jpg";
import image3 from "../Images/4.jpg";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import logo from "../Images/logo.png";
function Home() {
  return (
    <>
      {/* ... Hero section content ... */}
      <section className="hero-wrapper">
        <div className="paddings innerWidth flexCenter hero-container">
          {/* left side */}
          <div className="flexColStart hero-left">
            <div className="hero-title">
              <div className="orange-circle" />
              <h1>
                Discover <br />
                Most Suitable <br /> Rent Room
              </h1>
            </div>

            <div className="hero-des">
              <span>
                Find a variety of properties that suit you very easily
              </span>{" "}
              <br />
              <span>forget all difficuties in finding a residence for you</span>
            </div>
            <div className="flexColStart start">
              <div className="flexCenter stats"></div>
            </div>
          </div>

          <div className="flexCenter hero-right">
            <div className="image-container">
              <img src={image} alt="images" />
            </div>
          </div>
        </div>
      </section>
      <section className="r-wrapper">
        <div className="paddings innerWidth r-container">
          <div className="r-head flexColStart">
            <span className="orangeText">Perfect Choices</span> <br />
            <span className="primaryText">Popular Rent Room</span>
          </div>
          <div className="r-card-container">
            {" "}
            {/* New container class */}
            <Swiper {...{ ...sliderSettings, direction: "horizontal" }}>
              {rentRoomData.map((card, i) => (
                <SwiperSlide key={i}>
                  <div className="r-card">
                    <img src={card.image} alt="Home" />
                    <span className="secondaryText r-price">
                      <span style={{ color: "orange" }}>$</span>
                      <span>{card.price}</span>
                    </span>
                    <span className="primaryText">{card.name}</span>
                    <span className="secondaryText">{card.detail}</span>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </section>
      <div
        className="container-fluid bg-dark text-white-50 footer pt-5 mt-5 wow fadeIn"
        data-wow-delay="0.1s"
      >
        <div className="container py-5">
          <div className="row g-5">
            <div className="col-lg-3 col-md-6">
              <h5 className="text-white mb-4">Get In Touch</h5>
              <p className="mb-2">
                <i className="fa fa-map-marker-alt me-3"></i>Location, City,
                Country
              </p>
              <p className="mb-2">
                <i className="fa fa-phone-alt me-3"></i>+012 345 67890
              </p>
              <p className="mb-2">
                <i className="fa fa-envelope me-3"></i>info@example.com
              </p>
              <div className="d-flex pt-2">
                <a
                  className="btn btn-outline-light btn-social"
                  href="https://twitter.com/freewebsitecode"
                >
                  <i class="fab fa-twitter"></i>
                </a>
                <a
                  className="btn btn-outline-light btn-social"
                  href="https://www.facebook.com/"
                >
                  <i class="fab fa-facebook-f"></i>
                </a>
                <a
                  className="btn btn-outline-light btn-social"
                  href="https://youtube.com/freewebsitecode"
                >
                  <i class="fab fa-youtube"></i>
                </a>
                <a
                  className="btn btn-outline-light btn-social"
                  href="https://www.linkedin.com/feed/"
                >
                  <i class="fab fa-linkedin-in"></i>
                </a>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <h5 className="text-white mb-4">Quick Links</h5>
              <a className="btn btn-link text-white-50" href="">
                About Us
              </a>
              <a className="btn btn-link text-white-50" href="">
                Contact Us
              </a>
              <a className="btn btn-link text-white-50" href="">
                Our Services
              </a>
              <a className="btn btn-link text-white-50" href="">
                Privacy Policy
              </a>
              <a className="btn btn-link text-white-50" href="">
                Terms & Condition
              </a>
            </div>
            <div className="col-lg-3 col-md-6">
              <h5 className="text-white mb-4">Photo Gallery</h5>
              <div className="row g-2 pt-2">
                <div className="col-4">
                  <img
                    className="img-fluid rounded bg-light p-1"
                    src={image3}
                    alt=""
                  />
                </div>
                <div className="col-4">
                  <img
                    className="img-fluid rounded bg-light p-1"
                    src={image}
                    alt=""
                  />
                </div>
                <div className="col-4">
                  <img
                    className="img-fluid rounded bg-light p-1"
                    src={image1}
                    alt=""
                  />
                </div>
                <div className="col-4">
                  <img
                    className="img-fluid rounded bg-light p-1"
                    src={image2}
                    alt=""
                  />
                </div>
                <div className="col-4">
                  <img
                    className="img-fluid rounded bg-light p-1"
                    src={image3}
                    alt=""
                  />
                </div>
                <div className="col-4">
                  <img
                    className="img-fluid rounded bg-light p-1"
                    src={image3}
                    alt=""
                  />
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
                  <img src={logo} className="happy" />
                </a>
                , All Right Reserved. Designed By{" "}
                <a className="border-bottom" href="https://freewebsitecode.com">
                  Free Website Code
                </a>
              </div>
              <div className="col-md-6 text-center text-md-end">
                <div className="footer-menu">
                  <a href="">Home</a>
                  <a href="">Cookies</a>
                  <a href="">Help</a>
                  <a href="">FQAs</a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <br />
      </div>
    </>
  );
}

export default Home;
