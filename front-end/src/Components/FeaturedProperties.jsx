import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { request } from "../utils/fetchAPI";
import "../style/FeaturedProperties.css";
import img from "../assets/estate2.jpg";
import owner from "../assets/person.jpg";
import { FaBed, FaSquareFull } from 'react-icons/fa';

const FeaturedProperties = () => {
  const [featuredProperties, setFeaturedProperties] = useState([]);

  useEffect(() => {
    const fetchFeatured = async () => {
      try {
        const data = await request("/property/find/featured", "GET");
        setFeaturedProperties(data); // Update the state with fetched data
      } catch (error) {
        console.error(error.message);
      }
    };
    fetchFeatured();
  }, []);

  return (
    <div className="containnerr">
      <div className="wrapperr">
        <h5 style={{color:'red'}}>Properties you may Like</h5>
        <h2>Our Featured Properties</h2>
      </div>
      <div className="featuredPropertiess">
        {featuredProperties.map((property) => (
          <div key={property._id} className="featuredPropertyy">
            <Link to={`/propertyDetails/${property._id}`} className="imgContainer">
              <img src={property.img ?`http://localhost:5000/images/${property.img}`:img} alt="Property" />
            </Link>
            <div className="details">
              <div className="priceAndOwner">
                <span className="price">Rs. {property && property.price}</span>
                <img src={owner} alt="Owner" className="owner" />
              </div>
              <div className="moreDetails">
                <span>{property && property.beds} beds <FaBed className="icon" /></span>
                <span>{property && property.sqmeters} square meter <FaSquareFull className="icon" /></span>
              </div>
              <div className="desc">
                {property && property.desc}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedProperties;
