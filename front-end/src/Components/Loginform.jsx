import React from 'react';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../style/Login.css';
import logo from '../Images/logo.png';
import { request } from '../utils/fetchAPI';
import { useDispatch } from 'react-redux';
import { login } from '../redux/authSlice';

const Loginform = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState(false)
  const [emptyFields, setEmptyFields] = useState(false)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  

  const handleSubmit = async (e) => {
    e.preventDefault()

    if(email === '' || password === ''){
       setEmptyFields(true)
       setTimeout(() => {
        setEmptyFields(false)
       }, 2500)
    }

    try {
      const options = {
        "Content-Type": "application/json",
      }

      const data = await request('/auth/login', "POST", options, { email, password })

      dispatch(login(data))
      navigate("/SubmitProperty")
    } catch (error) {
      setError(true)
      setTimeout(() => {
        setError(false)
      }, 2000)
      console.error(error)
    }
  }

 
  return (
    <div className="Loginbox">
      <img src={logo} className="pic" alt="" />
      <form action="" id="register_form" onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Username and email"
          name="email"
          onChange={(e) => setEmail(e.target.value)} 
        /> 
        <input
          type="password"
          placeholder="Password"
          name="password"
          onChange={(e) => setPassword(e.target.value)}
        />

        <Link to="/ForgotPassword">Forgot password?</Link>
        <input type="submit" name="" value="Login" className="login-btn" />
        <div id="header"></div>
        <Link to="/Signup">Signup</Link>
      </form>
      {emptyFields && <p className="error-message">Please fill in all fields.</p>}
      {error && <p className="error-message">An error occurred. Please try again later.</p>}
    </div>
  );
};

export default Loginform;
