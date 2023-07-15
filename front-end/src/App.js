import "./App.css";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import Nav from "./Components/Nav";
import Loginform from "./Components/Loginform";
import Signup from "./Components/Signup";
import ForgotPassword from "./Components/ForgottenPassword.jsx";
// import Help from './Components/Help.jsx';
import Explore from "./Components/Explore.jsx";
import Search from "./Components/Search.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import Pagesnotfound from "./Components/Pagesnotfound";
import Foter from "../src/Components/Foter.jsx";
 import ContactForm from "./Components/ContactForm";
 import About from "./Components/About.jsx";
// import Contact from './Components/Contact.jsx';
function App() {
  return (
    <>
      <div className="App">
        <BrowserRouter>
          <Nav />
          <Routes>
            <Route path="/" element={<Nav />} />
            <Route path="/Home" element={<Home />} />
            {/* <Route path="/ContactForm" element={<ContactForm />} /> */}
            <Route path="/ContactForm" element={<ContactForm/>}/>   
            <Route path="/Explore" element={<Explore />} />
            <Route path="/Foter" element={<Foter />} />
            <Route path="/Loginform" element={<Loginform />} />
            <Route path="/Signup" element={<Signup />} />
            <Route path="/ForgotPassword" element={<ForgotPassword />} />
            <Route path="*" element={<Pagesnotfound />} />
            <Route path="/About" element={<About/>}/>
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}
export default App;
