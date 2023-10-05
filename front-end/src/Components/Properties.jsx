import React from "react";
import { useEffect } from "react";
import { useState } from "react";
 import { Link } from "react-router-dom";
import { request } from "../utils/fetchAPI";
import  classes  from "../style/properties.module.css";
// import { arrPriceRanges } from "../utils/idxToPriceRange";
import { AiOutlineSearch } from "react-icons/ai";
// import { continentToIdx } from "../utils/idxToDistrict";
 import { FaBed, FaSquareFull } from "react-icons/fa";
import { person } from "../assets/person.jpg";

const Properties = () => {
  // const [allProperties, setAllProperties] = useState([]);
  const [filteredProperties, setFilteredProperties] = useState([]);
   const [state, setState] = useState(null);
   const [allProperties, setAllProperties] = useState([])
  // const query = useLocation().search.slice(1);
  // const arrQuery = query.split("&");
  // const navigate = useNavigate();

  // const handleState = (e) => {
  //   setState((prev) => {
  //     return { ...prev, [e.target.name]: e.target.value };
  //   });
  // };

  // useEffect(() => {
  //   const fetchAllProperties = async () => {
  //     const data = await request(`/property/getAll`, "GET");
  //     setAllProperties(data);
  //   };
  //   fetchAllProperties();
  // }, []);
  useEffect(() => {
    const fetchAllProperties = async() => {
      const data = await request(`/property/getAll`, 'GET')
      setAllProperties(data)
    }
    fetchAllProperties()
  }, [])

  // useEffect(() => {
  //   if (
  //     arrQuery &&
  //     allProperties &&
  //     allProperties.length > 0 &&
  //     state === null
  //   ) {
  //     let formattedQuery = {};
  //     arrQuery.forEach((option, idx) => {
  //       const key = option.split("=")[0];
  //       const value = option.split("=")[1];

  //       formattedQuery = { ...formattedQuery, [key]: value };

  //       // if we are on the last index, assign the formattedQuery obj to state
  //       if (idx === arrQuery.length - 1) {
  //         setState(formattedQuery);
  //         handleSearch(formattedQuery);
  //       }
  //     });
  //   }
  // }, [allProperties, arrQuery]);

  // const handleSearch = (param = state) => {
  //   let options;
  //   if (param && param.nativeEvent) {
  //     options = state;
  //   } else {
  //     options = param;
  //   }

  //   console.log("options:", options);
  //   console.log("options.priceRange:", options.district);
  //   console.log("arrPriceRanges:", continentToIdx);

  //   const filteredProperties = allProperties.filter((property) => {
  //     const priceRange = arrPriceRanges[options.priceRange];
  //     const minPrice = Number(priceRange.split("-")[0]);
  //     const maxPrice = Number(priceRange.split("-")[1]);
  //     const district = continentToIdx(property.district);
  //     console.log(district);
  //     if (
  //       property.type === options.type &&
  //       district === Number(options.district) &&
  //       property.price >= minPrice &&
  //       property.price <= maxPrice
  //     ) {
  //       return property;
  //     }
  //   });
  //   const queryStr = `type=${options.type}&district=${options.district}&priceRange=${options.priceRange}`;
  //   navigate(`properties?${queryStr}`, { replace: true });
  //   setFilteredProperties(filteredProperties);
 // };


  return (
    <div className={classes.container}>
      <div className={classes.wrapper}>
     {/* <div className="options">
       <select value={state && state.type} name="type" >
            <option disabled>Select type</option>
            <option value="metropolitan">Metropolitan</option>
            <option value="municipality">municipality</option>
            <option value="village">Village</option>
          </select>
          <select value={state && state.priceRange} name="priceRange" >
            <option disabled>Select Price Range</option>
            <option value="0">0-2000</option>
            <option value="1">2000-5000</option>
            <option value="2">5000-10000</option>
            <option value="3">10000-30000</option>
            <option value="4">30000-200000</option>
          </select>
          <select value={state && state.district} name="district">
            <option disabled>Select Place</option>
            <option value="0">chitwan</option>
            <option value="1">pokhara</option>
            <option value="2">kathmandu</option>
            <option value="3">birjung</option>
            <option value="4">lalitpur</option>
            <option value="5">bhaktapur</option>
          </select>
          <button>
            <AiOutlineSearch className="searchIcon"  />
          </button>
</div> */}
   {filteredProperties && filteredProperties.length > 0 ? (
          <>
            <div className={classes.titles}>
              <h5>Selected properties</h5>
              <h2>Property you may like</h2>
            </div>
            <div className={classes.properties}>
              {filteredProperties.map((property) => (
                <div key={property._id} className={classes.property}>
                  <Link
                    className={classes.imgContainer}
                    to={`/propertyDetail/${property._id}`}
                  >
                    <img
                      src={`http://localhost:5000/images/${
                        property && property.img
                      }`}
                      alt="not"
                    />
                  </Link>
                  <div className={classes.details}>
                    <div className={classes.priceAndOwner}>
                      <span className={classes.price}>${property.price}</span>
                      <img src={person} className={classes.owner} alt="owner" />
                    </div>
                    <div className={classes.moreDetails}>
                      <span>
                        {property.beds} <FaBed className={classes.icon} />
                      </span>
                      <span>
                        {property.sqmeters} sq.meters{" "}
                        <FaSquareFull className={classes.icon} />
                      </span>
                      <div className={classes.desc}>{property.desc}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </>
        ) : (
          <h2 className={classes.noProperty}>
            We have no properties with the specified options
          </h2>
        )}
      </div>
    </div>
  );
};
export default Properties;
