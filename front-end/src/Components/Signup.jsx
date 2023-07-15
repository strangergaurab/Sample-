import React from "react";
import "../style/Signup.css";
import logo from "../Images/logo.png";
import Loginform from "./Loginform";
import { Link } from "react-router-dom";
import { useFormik } from "formik";
import signUpSchema from './Schema.jsx';

const Signup = () => {
  const initialValues = {
    first_name: "",
    middle_name: "",
    last_name: "",
    user_name: "",
    email: "",
    password: "",
    confirm_password: "",
  };

  const {
    values,
    handleBlur,
    handleChange,
    handleSubmit,
    errors,
    touched
  } = useFormik({
    initialValues,
    validationSchema: signUpSchema,
    validateOnChange: true,
    validateOnBlur: false,
    onSubmit: (values, action) => {
      console.log("🚀 ~ file: App.jsx ~ line 17 ~ App ~ values", values);
      action.resetForm();
    },
  });

  return (
    <>
      <div className="loginbox">
        <img src={logo} className="pic" alt="" />
        <form action="" id="register_form" onSubmit={handleSubmit}>
          <input
            type="text"
            autoComplete="off"
            placeholder="First name"
            name="first_name"
            value={values.first_name}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {touched.first_name && errors.first_name && (
            <p className="form-error">{errors.first_name}</p>
          )}
          <input
            type="text"
            autoComplete="off"
            placeholder="Middle name"
            name="middle_name"
            value={values.middle_name}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {touched.middle_name && errors.middle_name && (
            <p className="form-error">{errors.middle_name}</p>
          )}
          <input
            type="text"
            autoComplete="off"
            placeholder="Last name"
            name="last_name"
            value={values.last_name}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {touched.last_name && errors.last_name && (
            <p className="form-error">{errors.last_name}</p>
          )}
          <input
            type="text"
            autoComplete="off"
            placeholder="User name"
            name="user_name"
            value={values.user_name}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {touched.user_name && errors.user_name && (
            <p className="form-error">{errors.user_name}</p>
          )}
          <input
            type="email"
            autoComplete="off"
            placeholder="E-mail"
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
          <input
            type="password"
            autoComplete="off"
            placeholder="Confirm password"
            id="confirm_password"
            name="confirm_password"
            value={values.confirm_password}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {touched.confirm_password && errors.confirm_password && (
            <p className="form-error">{errors.confirm_password}</p>
          )}
          <input type="submit" name="" value="Register" className="login-btn" />
          <div className="header"></div>
          <div id="header"></div>
          <Link to="/loginform" element={<Loginform />}>
            Already have an account ?
          </Link>
        </form>
      </div>
    </>
  );
};

export default Signup;
