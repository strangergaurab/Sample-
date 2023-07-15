import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import '../style/Login.css';
import Signup from './Signup';
import ForgotPassword from './ForgottenPassword';
import logo from '../Images/logo.png';

const Loginform = () => {
  const initialValues = {
    email: '',
    password: '',
  };

  const validationSchema = Yup.object().shape({
    email: Yup.string().email('Email is invalid').required('Email is required'),
    password: Yup.string().min(6, 'Password must be at least 6 characters long').required('Password is required'),
  });

  const {
    values,
    handleBlur,
    handleChange,
    handleSubmit,
    errors,
    touched
  } = useFormik({
    initialValues,
    validationSchema,
    validateOnChange: true,
    validateOnBlur: false,
    onSubmit: (values, action) => {
      // TODO: submit form data to server
      action.resetForm();
    },
  });

  return (
    <div className="Loginbox">
      <img src={logo} className="pic" alt="" />
      <form action="" id="register_form" onSubmit={handleSubmit}>
        <input
          type="email"
          autoComplete="off"
          placeholder="Username and email"
          name="email"
          value={values.email}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        {touched.email && errors.email && (
          <p className="form-error">{errors.email}</p>
        )}

        <input
          type="password"
          autoComplete="off"
          placeholder="Password"
          name="password"
          value={values.password}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        {touched.password && errors.password && (
          <p className="form-error">{errors.password}</p>
        )}

        <Link to="/ForgotPassword" element={<ForgotPassword />}>
          Forgot password?
        </Link>
        <input type="submit" name="" value="Register" className="login-btn" />
        <div id="header"></div>
        <Link to="/Signup" element={<Signup />}>
          Signup
        </Link>
      </form>
  </div>
  )
        };
export default Loginform;