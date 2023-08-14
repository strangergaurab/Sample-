import React from "react";
import "../style/Signup.css";
import logo from "../Images/logo.png";
import Loginform from "./Loginform";
import { Link } from "react-router-dom";
import { useFormik } from "formik";
// import signUpSchema from './Schema.jsx';
import { useNavigate } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { request } from "../utils/fetchAPI";
import { register } from '../redux/authSlice';
import { useSelector } from 'react-redux';
import {useState} from 'react';

const Signup = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [error, setError] = React.useState(false)
  const [emptyFields, setEmptyFields] = React.useState(false)
  const { token } = useSelector((state) => state.auth)
  const [state, setState] = useState({})

  const handleState = (e) => {
        setState((prev) => {
          return { ...prev, [e.target.name]: e.target.value }
        })
      }

  const handleSubmit =async (e) => {  
    e.preventDefault()
    if (Object.values(state).some((v) => v === '')) {
      setEmptyFields(true)
      setTimeout(() => {
        setEmptyFields(false)
      }, 2500)
    }
      try {
        const headers = {
          "Content-Type": "application/json",
          'Access-Control-Request-Headers':'*'
        };
        const res = await request(`/auth/register`, "POST", headers,{ ...state});
        console.log(res);
        dispatch(register(res))
        navigate("/Loginform");
      } catch(error) {
        setError(true)
        setTimeout(() => {
          setError(false)
        }, 2000)
        console.error(error)
      }
    }
    return (
    <>
      <div className="loginbox">
        <img src={logo} className="pic" alt="" />
        <form action="" id="register_form" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="First name"
            name="first_name"
            onChange={handleState}
            
          />
         <input
            type="text"
            placeholder="Middle name"
            name="middle_name"
            onChange={handleState}
          />
        
          <input
            type="text"
            placeholder="Last name"
            name="last_name"
            onChange={handleState}
          />
        
          <input
            type="text"
            placeholder="User name"
            name="user_name"
            onChange={handleState}
            
          />
        
          <input
            type="email"
            placeholder="E-mail"
            name="email"
            onChange={handleState}
          
          />
        
          <input
            type="password"
            placeholder="Password"
            name="password"
            onChange={handleState}
          />
          <input
            type="password"
            placeholder="Confirm password"
            name="confirm_password"
            onChange={handleState}
          />
          <input type="submit" name="" value="Register" className="login-btn" />
          <div className="header"></div>
          <div id="header"></div>
          <Link to="/loginform" element={<Loginform />}>
            Already have an account ?
          </Link>
        </form>
        {error && (
          <div className="error">
            There was an error signing up! Try again.
          </div>
        )}
        {emptyFields && (
          <div className="error">
            Fill all fields!
          </div>
        )}
      </div>
    </>
  );
};

export default Signup;
