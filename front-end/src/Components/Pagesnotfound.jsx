import React, { useState } from "react";
import "../style/pagenotfound.css";
import logo from "../Images/logo.png";
import { Link } from "react-router-dom";
import Home from "../Components/Home";

function Pagesnotfound() {
  const [isClicked, setIsClicked] = useState(false);

    const handleClick = () => {
      setIsClicked(true);
      setTimeout(() => {
        setIsClicked(false);
      }, 2000); 
    };
  
    return (
      <div className="task">
        <img src={logo} alt="this not show" />
        <p>
          <b>404.</b>That's an error.
        </p>
        <p>The requested resources was not found.</p>
        <button className="HH">
          <Link className="ggg" to="/Home" element={<Home />}>
            Return Home
          </Link>
        </button>
      </div>
    );
}

export default Pagesnotfound;
