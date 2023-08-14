import React from 'react';
import { Link } from 'react-router-dom';
import { FaHome } from 'react-icons/fa';
import { BsSearch } from "react-icons/bs";
import { MdExplore } from 'react-icons/md';
import { GiHelp } from 'react-icons/gi';
import '../style/navStyle.css';
import myLogo from '../Images/logo.png'
function Nav() {
  return (
    <>
      
        <div className="flexCenter paddings innerWidth h-container">
        <div className="nav-bar">
        <ul>
          <img src={myLogo} className="logo" alt='logo.png' />
          <li><Link to="/Home"><FaHome /></Link></li>
          <li><Link to="/Search"><BsSearch /></Link></li>
          <li><Link to="/Explore"><MdExplore /></Link></li>
          <li><Link to="/Foter"><GiHelp /></Link> </li>
           <li><Link to="/About">About</Link></li>
           {/* <li><Link to="/SubmitProperty">Submit</Link></li> */}
          <li><Link to="/Loginform"> <input type="submit" name="" value="Login" className="login_btn" /></Link></li>

          <li><Link to="/Signup"> <input type="submit" name="" value="Register" className="login_btn" /></Link></li>
        </ul>
        </div>
      </div>
       
    </>
  )
}
export default Nav;
