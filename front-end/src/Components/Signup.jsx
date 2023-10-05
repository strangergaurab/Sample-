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
          <input type="submit" name="" value="Register" className="login-btn" /> <br/>
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

// import React from "react";
// import "../style/Signup.css";
// import logo from "../Images/logo.png";
// import Loginform from "./Loginform";
// import { Link } from "react-router-dom";
// import { useNavigate } from "react-router-dom";
// import { useDispatch } from 'react-redux';
// import { request } from "../utils/fetchAPI";
// import { register } from '../redux/authSlice';
// import { useSelector } from 'react-redux';
// import { useState } from 'react';

// const Signup = () => {
//   const dispatch = useDispatch();
//   const navigate = useNavigate();
//   const [error, setError] = React.useState("");
//   const [emptyFields, setEmptyFields] = React.useState(false);
//   const { token } = useSelector((state) => state.auth);
//   const [state, setState] = useState({});
//   const [passwordMatchError, setPasswordMatchError] = useState(false);

//   const handleState = (e) => {
//     setState((prev) => {
//       return { ...prev, [e.target.name]: e.target.value };
//     });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     // Reset errors
//     setError("");
//     setEmptyFields(false);
//     setPasswordMatchError(false);

//     // Validation checks
//     const {
//       first_name,
//       middle_name,
//       last_name,
//       user_name,
//       email,
//       password,
//       confirm_password,
//     } = state;

//     if (!first_name || first_name.length < 3) {
//       setEmptyFields(true);
//       return; // Stop submission
//     }

//     if (!last_name || last_name.length < 3) {
//       setEmptyFields(true);
//       return; // Stop submission
//     }
//     if (!user_name || user_name.length < 3) {
//       setEmptyFields(true);
//       return; // Stop submission
//     }

//     const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
//     if (!emailPattern.test(email)) {
//       setError("Invalid email format");
//       return; // Stop submission
//     }

//     if (!user_name) {
//       setEmptyFields(true);
//       return; // Stop submission
//     }

// const passwordPattern =
//   /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
// if (!passwordPattern.test(password)) {
//   setError(
//     "Password must contain at least 1 uppercase, 1 lowercase, 1 number, and 1 special character."
//   );
//   return; // Stop submission
// }

//     if (password !== confirm_password) {
//       setPasswordMatchError(true);
//       return; // Stop submission
//     }

//     // If all validations pass, proceed with registration
//     try {
//       const headers = {
//         "Content-Type": "application/json",
//         "Access-Control-Request-Headers": "*",
//       };
//       const res = await request(`/auth/register`, "POST", headers, {
//         ...state,
//       });
//       console.log(res);
//       dispatch(register(res));
//       navigate("/Loginform");
//     } catch (error) {
//       setError("There was an error signing up! Try again.");
//       console.error(error);
//     }
//   };

//   return (
//     <>
//       <div className="loginbox">
//         <img src={logo} className="pic" alt="" />
//         <form action="" id="register_form" onSubmit={handleSubmit}>
//           <input
//             type="text"
//             placeholder="First name"
//             name="first_name"
//             onChange={handleState}
//           />
//           {emptyFields && (
//             <div className="error-text">
//               First name must be at least 3 characters.
//             </div>
//           )}

//           <input
//             type="text"
//             placeholder="Middle name"
//             name="middle_name"
//             onChange={handleState}
//           />

//           <input
//             type="text"
//             placeholder="Last name"
//             name="last_name"
//             onChange={handleState}
//           />
//           {emptyFields && (
//             <div className="error-text">
//               Last name  must be at least 3 characters.
//             </div>
//           )}

//           <input
//             type="text"
//             placeholder="User name"
//             name="user_name"
//             onChange={handleState}
//           />
//            {emptyFields && (
//             <div className="error-text">
//               Username  must be at least 5 characters.
//             </div>
//           )}

//           <input
//             type="email"
//             placeholder="E-mail"
//             name="email"
//             onChange={handleState}
//           />
//           {emptyFields && <div className="error-text">Email is required.</div>}
//           {!emptyFields && error && <div className="error-text">{error}</div>}

//           <input
//             type="password"
//             placeholder="Password"
//             name="password"
//             onChange={handleState}
//           />
//           {emptyFields && (
//             <div className="error-text">Password is required.</div>
//           )}
//           {!emptyFields && error && <div className="error-text">{error}</div>}

//           <input
//             type="password"
//             placeholder="Confirm password"
//             name="confirm_password"
//             onChange={handleState}
//           />
//           {emptyFields && (
//             <div className="error-text">Confirm password is required.</div>
//           )}
//           {passwordMatchError && (
//             <div className="error-text">
//               Password and confirm password must match.
//             </div>
//           )}

//           <input
//             type="submit"
//             name=""
//             value="Register"
//             className="login-btn"
//           />{" "}
//           <br />
//           <div className="header"></div>
//           <div id="header"></div>
//           <Link to="/loginform" element={<Loginform />}>
//             Already have an account ?
//           </Link>
//         </form>
//       </div>
//     </>
//   );
// };

// export default Signup;
