import React, { useState, useEffect } from "react";
import { useLocation, useNavigate, Link } from "react-router-dom";
import { AiOutlineSearch } from "react-icons/ai";
import classes from "../style/properties.module.css";
import { request } from "../utils/fetchAPI";
import { continentToIdx } from "../utils/idxToDistrict";
import { arrPriceRanges } from "../utils/idxToPriceRange";
import { FaBed, FaSquareFull } from "react-icons/fa";
import person from "../assets/person.jpg";

const Properties = () => {
  const [allProperties, setAllProperties] = useState([]);
  const [filteredProperties, setFilteredProperties] = useState([]);
  const [arrQuery, setArrQuery] = useState([]);
  const [state, setState] = useState(null)
  const navigate = useNavigate();

  useEffect(() => {
    const fetchAllProperties = async () => {
      const data = await request(`/property/getAll`, "GET");
      console.log(data);
      setAllProperties(data);
    };
    fetchAllProperties();
  }, []);

  useEffect(() => {
    if (arrQuery && allProperties && allProperties.length > 0) {
      setFilteredProperties(
        arrQuery.map((option) => {
          const key = option.split("=")[0];
          const value = option.split("=")[1];
          return {
            [key]: value,
          };
        })
      );
    }
  }, [arrQuery, allProperties]);

  const handleState = (e) => {
    const key = e.target.name;
    const value = e.target.value;
    setArrQuery((prevArrQuery) => {
      const newArrQuery = [
        ...prevArrQuery,
        `<span class="math-inline">\{key\}\=</span>{value}`,
      ];
      return newArrQuery;
    });
  };

  // const handleSearch = (param = arrQuery) => {
  //   let options;
  //   // we either pass the formattedObj or event, that's why we do the IF/ELSE
  //   if (param && param.nativeEvent) {
  //     options = arrQuery;
  //   } else {
  //     options = {
  //       type: null,
  //       district: null,
  //       priceRange: null,
  //     };
  //   }

  //   const filteredProperties = [];

  //   const allPropertiesArray = Array.from(allProperties);
  //   allPropertiesArray.forEach((property) => {
  //     const priceRange =
  //       options.priceRange !== null ? arrPriceRanges[options.priceRange] : null;
  //     const minPrice = priceRange ? Number(priceRange.split("-")[0]) : 0;
  //     const maxPrice = priceRange
  //       ? Number(priceRange.split("-")[1])
  //       : Number.MAX_SAFE_INTEGER;

  //     if (
  //       property.type === options.type &&
  //       (options.district === null ||
  //         districtToIdx(property.district) === Number(options.district)) &&
  //       property.price >= minPrice &&
  //       property.price <= maxPrice
  //     )
  //     {
  //       filteredProperties.push(property);
  //     }
  //   });

  //   if (options !== null) {
  //     if (options.district === null) {
  //       alert("Please select a district.");
  //     } else {
  //       const queryStr = `type=${options.type}&district=${options.district}&priceRange=${options.priceRange}`;
  //       navigate(`/properties?${queryStr}`, { replace: true });
  //     }
  //   }
  //   setFilteredProperties(filteredProperties);
  // };
 
  // const handleSearch = (param = state) => {
  //   let options
  //   // we either pass the formattedObj or event, that's why we do the IF/ELSE
  //   if (param?.nativeEvent) {
  //     options = state
  //   } else {
  //     options = param
  //   }
  //   const filteredProperties = allProperties.filter((property) => {

  //     const priceRange = arrPriceRanges[options.priceRange]
  //     const minPrice = Number(priceRange.split('-')[0])
  //     const maxPrice = Number(priceRange.split('-')[1])
  //     const district = districtToIdx(property.district)

  //     if (
  //       property.type === options.type
  //       && district === Number(options.district)
  //       && property.price >= minPrice && property.price <= maxPrice
  //     ) {
  //       return property
  //     }
  //   })

  //   const queryStr = `type=${options.type}&district=${options.district}&priceRange=${options.priceRange}`

  //   navigate(`/properties?${queryStr}`, { replace: true })
  //   setFilteredProperties(prev => filteredProperties)
  // }
  const handleSearch = (param) => {
    let options;
    // we either pass the formattedObj or event, that's why we do the IF/ELSE
    if (typeof param === "object") {
      options = param;
    } else {
      options = {
        type: null,
        district: null,
        priceRange: null,
      };
    }
  
    const filteredProperties = allProperties.filter((property) => {
  
      const priceRange = arrPriceRanges[options.priceRange]
      const minPrice = Number(priceRange.split('-')[0])
      const maxPrice = Number(priceRange.split('-')[1])
      const district = continentToIdx(property.district)
  
      if (
        property.type === options.type
        && district === Number(options.district)
        && property.price >= minPrice && property.price <= maxPrice
      ) {
        return property
      }
    })
  
    const queryStr = `type=${options.type}&district=${options.district}&priceRange=${options.priceRange}`
  
    navigate(`/properties?${queryStr}`, { replace: true })
    setFilteredProperties(prev => filteredProperties)
  }
  
  return (
    <div className={classes.containerrrr}>
      <div className={classes.wrapperrrr}>
        <div classNames="optionss">
          <select
            name="type"
            onChange={handleState}
            value={
              arrQuery &&
              arrQuery.find((option) => option.split("=")[0] === "type")
            }
          >
            <option disabled>Select type</option>
            <option value="metropolitan">Metropolitan</option>
            <option value="municipality">Municipality</option>
            <option value="village">Village</option>
          </select>
          <select
            name="priceRange"
            onChange={handleState}
            value={
              arrQuery &&
              arrQuery.find((option) => option.split("=")[0] === "priceRange")
            }
          >
            <option disabled>Select Price Range</option>
            <option value="0">0-2000</option>
            <option value="1">2000-5000</option>
            <option value="2">5000-10000</option>
            <option value="3">10000-30000</option>
            <option value="4">30000-200000</option>
          </select>
          <select
            name="district"
            onChange={handleState}
            value={
              arrQuery &&
              arrQuery.find((option) => option.split("=")[0] === "district")
            }
          >
            <option disabled>Select Place</option>
            <option value="0">chitwan</option>
            <option value="1">pokhara</option>
            <option value="2">kathmandu</option>
            <option value="3">birjung</option>
            <option value="4">lalitpur</option>
            <option value="5">bhaktapur</option>
          </select>
          <button>
            <AiOutlineSearch className="searchIcons" onClick={handleSearch} />
          </button>
        </div>
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
            We have no properties with the specified options.
          </h2>
        )}
      </div>
    </div>
  );
};

export default Properties;
