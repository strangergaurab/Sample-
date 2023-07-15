import React from "react";
import image from "../Images/logo.png";
import { Link } from "react-router-dom";
import "../style/Foter.css";
function Foter() {
  return (
    <div className="FOTER d-flex align-items-center bg-dark justify-content-center text-light p-4">
      <div className="img-container">
        <img src={image} alt="image not showing" id="happy" />
      </div>
      <div className="overview">
        <h1>OVERVIEW</h1>
        <ul>
          <li>
            <Link to="/About us">About us</Link>
          </li>
          <li>
            <Link to="/Contact">Contact</Link>
          </li>
          <li>
            <Link to="Privacy policy">Privacy Policy</Link>
          </li>
        </ul>
      </div>
      <div className="community">
        <ul>
          <li>
            <Link to="/Support">Support</Link>
          </li>
          <li>
            <Link to="Help">Help</Link>
          </li>
        </ul>
      </div>

      <div className="Follow">
        <ul>
          <li>
            <a href="https://www.facebook.com/">facebook</a>
          </li>
          <li>
            <a href="https://twitter.com/">Twitter</a>
          </li>
          <li>
            <a href="youtube.com/watch?v=_ou3KWsnZTI&t=402s">Youtube</a>
          </li>
          <li>
            <a href="https://www.linkedin.com/">Linkend</a>
          </li>
        </ul>
      </div>
    </div>
  );
}
export default Foter;
