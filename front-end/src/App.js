import "./App.css";
import 'swiper/swiper.min.css';
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import Nav from "./Components/Nav";
import Loginform from "./Components/Loginform";
import Signup from "./Components/Signup";
import ForgotPassword from "./Components/ForgottenPassword.jsx";
// import Help from './Components/Help.jsx';
import Explore from "./Components/Explore.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import Pagesnotfound from "./Components/Pagesnotfound";
 import ContactForm from "./Components/ContactForm";
 import About from "./Components/About.jsx";
// import Contact from './Components/Contact.jsx';
import Footer from "./Components/Foter.jsx";
import Properties from "./Components/Properties.jsx";
import PopularProperties from "./Components/popularProperties.jsx";
import FeaturedProperties from "./Components/FeaturedProperties.jsx";
import Newsletter from './Components/Newsletter.jsx';
import SubmitProperty from './Components/SubmitProperty.jsx'
import PropertyDetail from "./Components/propertyDetail.jsx";
import EmiCalculator from './Components/EmiCalculator.jsx';
function App() {
  return (
    <>
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path="/Home" element={
             <>
            <Nav />
            <Home />
            <FeaturedProperties/>
            <Footer/>
            </>
            } />
            <Route path="/EmiCalculator" element={
            <>
             <Nav/>
            <EmiCalculator/>
            <Footer/>
            </>
            }
            />

            {/* <Route path="/ContactForm" element={<ContactForm />} /> */}
            <Route path="/ContactForm" element={
               <>
              <Nav/ >
            <ContactForm/>
            <Footer/>
            </>
          }
            
            />  

             <Route path="/Search" element={
              <>
              <Nav />
               <PopularProperties/>
                <Properties/>
             <FeaturedProperties/>
                <Newsletter/> 
                  <Footer/>
              </>
             } />

            <Route path="/Explore" element={
            <>
            <Nav />
            <Explore />
             <Footer/>
            </>
          } />
            <Route path="/Loginform" element={
             <>
             <Nav/>
            <Loginform />
            </>
            } />
            <Route path="/Signup" element={
             <>
             <Nav/>
            <Signup /> 
            </>
            } />
            <Route path="/ForgotPassword" element={<ForgotPassword />} />
            <Route path="*" element={
            <>
           <Nav/>
           <Pagesnotfound />
           <Footer/>
           </>
            } />
            <Route path="/About" element={
            <>
            <Nav/>
            <About/>
             <Footer/>
            </>
}/>
            <Route path="/SubmitProperty" element={<SubmitProperty/>}/>
             <Route path="/properties" element={
                 <>
               <Nav />
                <Properties/>
                 <Footer/>
               </>
             } />   
         <Route path='/propertyDetail/:id' element={
          <>
            <Nav />
            <PropertyDetail />
            <Footer />
          </>
        } />   
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}
export default App;
