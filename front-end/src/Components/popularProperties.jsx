import React from 'react'
import { Link } from 'react-router-dom'
import img1 from '../assets/realestatecountryside.jpg';
import img3 from '../assets/realestatebeach.jpg';
import img2 from '../assets/realestatemountain.jpg';
import { useState } from 'react';
import { useEffect } from 'react';
import { request } from '../utils/fetchAPI';
import  '../style/popularpro.css';
import { AiOutlineSearch } from 'react-icons/ai'
import { useNavigate } from 'react-router-dom'

const PopularProperties = () => {
  const [metropolitanProperties, setMetropolitanProperties] = useState(0)
  const [municipalityProperties, setMunicipalityProperties] = useState(0)
  const [villageProperties, setVillageProperties] = useState(0)
  const [type, setType] = useState("metropolitan")
  const [district, setDistrict] = useState("0")
  const [priceRange, setPriceRange] = useState("0")
   

  const navigate = useNavigate()

  // TODO here or somewhere home(fetching properties)

  const handleSearch = () => {
    // navigating to properties
    navigate(`/properties?type=${type}&district=${district}&priceRange=${priceRange}`)
  }

  useEffect(() => {
    const fetchPropertiesNumber = async() => {
      try {
         const data = await request('/property/find/types', 'GET')
            console.log(data);
         setMetropolitanProperties(data.metropolitan)
         setMunicipalityProperties(data.municipality)
         setVillageProperties(data.village)
      } catch (error) {
        console.error(error)
      }
    }
    fetchPropertiesNumber()
  }, [])

  return (
    <div className="containerr">
      <div className="wrapperr">
        <h2 
        style={{
          fontSize: '32px',
          fontWeight: 'bold',
          textAlign: 'center',
          color: '#00FF00',
          textShadow: '0 2px 4px rgba(0, 0, 0, 0.3)',
          animation: 'pulseAnimation 1.5s infinite, rotateAnimation 10s infinite',
        }}
        >Let me find your dream place right now</h2>
        <h5 style={{
    fontSize: '32px',
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#000',
    textShadow: '0 2px 4px rgba(0, 0, 0, 0.3)',
    animation: 'pulseAnimation 1.5s infinite, rotateAnimation 10s infinite',
  }}>Search the best selection of luxury real estate</h5>
        <div className="options">
          <select onChange={(e) => setType(e.target.value)}>
            <option disabled>Select type</option>
            <option value="metropolitan">Metropolitan</option>
            <option value="municipality">municipality</option>
            <option value="village">Village</option>
          </select>
          <select onChange={(e) => setPriceRange(e.target.value)}>
            <option disabled>Select Price Range</option>
            <option value="0">0-100,000</option>
            <option value="1">100,000-200,000</option>
            <option value="2">200,000-300,000</option>
            <option value="3">300,000-400,000</option>
            <option value="4">400,000-500,000</option>
          </select>
          <select onChange={(e) => setDistrict(e.target.value)}>
            <option disabled>Select Place</option>
            <option value="0">chitwan</option>
            <option value="1">pokhara</option>
            <option value="2">kathmandu</option>
            <option value="3">birjung</option>
            <option value="4">lalitpur</option>
            <option value="5">bhaktpur</option>
          </select>
          <AiOutlineSearch className="searchIcon" onClick={handleSearch} />
        </div>
      </div>
      <div className="wrapper">
        <div className="titles">
          <h5>Different types of properties</h5>
          <h2>Best type of properties for you</h2>
        </div>
        <div className="properties">
          <Link to={`/properties?type=metropolitan&district=0&priceRange=1`} className="property">
            <img src={img1} alt="hello" />
            <div className="quantity">{metropolitanProperties} properties</div>
            <h5>Metropolitan area properties</h5>
          </Link>
          <Link to={`/properties?type=mountain&district=1&priceRange=1`} className="property">
            <img src={img2} alt="helloa" />
            <div className="quantity">{municipalityProperties} properties</div>
            <h5>municipality properties</h5>
          </Link>
          <Link to={`/properties?type=village&district=2&priceRange=1`} className="property">
            <img src={img3} alt="hello" />
            <div className="quantity">{villageProperties} properties</div>
            <h5>Village properties</h5>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default PopularProperties;