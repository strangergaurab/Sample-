 import React from 'react'
 import '../style/Home.css';
// import {Link} from 'react-router-dom';
import image from '../Images/1.jpg';
import { Swiper, SwiperSlide } from 'swiper/react';
import data from '../utils/Slider.json';
import { sliderSettings } from '../utils/common.jsx';
function Home() {
  return (
    <>
 <section className="hero-wrapper">
 <div className="paddings innerWidth flexCenter hero-container">
 {/* left side */}
<div className="flexColStart hero-left">
  <div className="hero-title">
    <div className="orange-circle"/>
    <h1>Discover <br/>Most Suitable <br/> Rent Room</h1>
  </div>

  <div className="hero-des">
    <span>Find a variety of properties that suit you very easily</span> <br/>
    <span>forget all difficuties in finding a residence for you</span>
  </div>
  <div className="flexColStart start">
    
    <div className="flexCenter stats">
    
  </div>

</div>
</div>

<div className="flexCenter hero-right">
 <div className="image-container">
   <img src={image} alt="images"/>
 </div>
</div>
</div>
</section>
<section className="r-wrapper">
    <div className='paddings innerWidth r-container'>
  <div className="r-head flexColStart">
 <span className="orangeText">Perfect Choices</span> <br/>
 <span className="primaryText">Popular Rent Room</span>
  </div>
  <Swiper {...sliderSettings}>
    {
 data.map((card,i)=>(
   <SwiperSlide key={i}>
      <div className="r-card">
    <img src={card.image} alt="Home"/>
      <span className="secondaryText r-price">
        <span style={{color:"orange"}}>$</span>
        <span>{card.price}</span>
      </span>
      <span className="primaryText">{card.name}</span>
      <span className="secondaryText">{card.detail}</span>
      </div>
   </SwiperSlide>
  ))
 }
  </Swiper> 
   </div>
 </section>

 </>
  )
}
export default Home; 
