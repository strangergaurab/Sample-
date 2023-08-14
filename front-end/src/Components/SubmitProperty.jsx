import React from "react";
import classes from "../style/SubmitProperty.module.css";
import { Link } from "react-router-dom";
import { BsHouseDoor } from "react-icons/bs";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import { logout } from "../redux/authSlice";
import { request } from "../utils/fetchAPI";
import { AiOutlineClose, AiOutlineFileImage } from "react-icons/ai";
const SubmitProperty = () => {
  const { token } = useSelector((state) => state.auth);
  const [showForm, setShowForm] = useState(false);
  const [state, setState] = useState({});

  const [photo, setPhoto] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logout());
    navigate("/Loginform");
  };
  const handleState = (e) => {
    setState((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };
  const handleCloseForm = () => {
    setShowForm(false);
    setPhoto(null);
    setState({});
  };
  const handleListProperty = async (e) => {
    e.preventDefault();
    console.log("hello world")
    let filename = null;
    if (photo) {
      const formData = new FormData();
      filename = crypto.randomUUID() + photo.name;
      formData.append("filename", filename);
      formData.append("image", photo);
      await request("/upload/image", "POST", {}, formData, true);
    } else {
      return
    }
    try {
      const options = {
        'Authorization': `Bearer ${token}`,
        'Content-Type':'application/x-www-form-urlencoded'
      };

      const data = await axios.post("http://localhost:5000/property", {
        ...state,
        img: filename,
      },{headers:options});

      console.log(data);
      handleCloseForm();
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className={classes.container}>
      <div className={classes.wrapper}>
        <Link to="/SubmitProperty" className={classes.left}>
          BhadaIO <BsHouseDoor></BsHouseDoor>
        </Link>
        <ul className={classes.center}>
          <li className={classes.left}>Welcome to BhadaIO DashBoard</li>
          {/* <li className={classes.listItems}></li>
          <li className={classes.listItems}>Featured</li>
          <li className={classes.listItems}>Contacts</li> */}
        </ul>
         {/* <span>{user.user_name}</span> */}
        <div className={classes.right}>
          <span onClick={handleLogout} className={classes.logoutBtn}>
            Lotout
          </span>
          <Link
            onClick={() => setShowForm(true)}
            className={classes.list}
            style={{ color: "#fff" }}
          >
            List your property
          </Link>
        </div>
      </div>
      {showForm && (
        <div className={classes.listPropertyForm} onClick={handleCloseForm}>
          <div
            className={classes.listPropertyWrapper}
            onClick={(e) => e.stopPropagation()}
          >
            <h2>List property</h2>
            <form onSubmit={handleListProperty}>
              <input
                type="text"
                placeholder="Title"
                name="title"
                onChange={handleState}
              />
              <input
                type="text"
                placeholder="Type"
                name="type"
                onChange={handleState}
              />
              <input
                type="text"
                placeholder="Desc"
                name="desc"
                onChange={handleState}
              />
              <input
                type="text"
                placeholder="district"
                name="district"
                onChange={handleState}
              />
              <input
                type="number"
                placeholder="Price"
                name="price"
                onChange={handleState}
              />
              <input
                type="number"
                placeholder="Sq. meters"
                name="sqmeters"
                onChange={handleState}
              />
              <input
                type="number"
                placeholder="Beds"
                name="beds"
                step={1}
                min={1}
                onChange={handleState}
              />
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "12px",
                  width: "50%",
                }}
              >
                <label htmlFor="photo">
                  Property picture <AiOutlineFileImage />
                </label>
                <input
                  type="file"
                  id="photo"
                  style={{ display: "none" }}
                  onChange={(e) => setPhoto(e.target.files[0])}
                />
                {photo && <p>{photo.name}</p>}
              </div>
              <input type="submit" value="List property" />
            </form>
            <AiOutlineClose
              onClick={handleCloseForm}
              className={classes.removeIcon}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default SubmitProperty;
