import React from "react";
import Back from "./common/back.jsx";
import Heading from "./common/Heading.jsx";
import img from "../Images/1.jpg";
import "../style/about.css";

const About = () => {
  return (
    <>
      <section className='about'>
        <Back name='About Us' title='About Us - Who We Are?' cover={img} />
        <div className='container flex mtop'>
          <div className='left row'>
            <Heading title='Our Agency Story' subtitle='Check out our company story and work process' />

            <p>BhadaIO Online Real Estate is a leading provider of comprehensive and convenient real estate services. Our mission is to revolutionize the industry by leveraging cutting-edge technology while delivering exceptional customer service. With expertise in connecting buyers, sellers, and renters, we aim to simplify the real estate process for everyone. Our team consists of experienced professionals, including real estate agents, brokers, property managers, and support staff, who are dedicated to serving our clients with integrity and professionalism. We uphold core values of transparency and a client-centric approach, building long-lasting relationships based on trust.</p>
            <p> Don't just take our word for it—our satisfied clients have shared their positive experiences and success stories through testimonials, highlighting our commitment to excellence. At BhadaIO Online Real Estate, we are committed to helping you navigate the world of real estate with ease and confidence.</p>
            <button className='btn2'>More About Us</button>
          </div>
          <div className='right row'>
            <img src={img} alt='' />
          </div>
        </div>
      </section>
    </>
  )
}

export default About;