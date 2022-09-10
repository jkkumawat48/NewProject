import React, { useState, useEffect } from "react";
import "../CSS/Login.css";

import { useHistory } from "react-router-dom";
import { NavLink } from "react-router-dom";
import img1 from "../Images/img1.jpeg";
import "bootstrap/dist/css/bootstrap.min.css";

// import SignIn from "./Signin";
// import Home from './Home';
const LoginPage = ({ handleToken, userActiveLogin }) => {
  const [data, setData] = useState({ name: "", email: "", password: "" });
  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };

  const handlesubmit = (e) => {
    e.preventDefault();
    const { name, email, password } = data;
    if (name == "") {
      alert("name field is required");
      return
    }
     if (email == "") {
      alert("email is required");
      return
    } 
     if (!email.includes("@")) {
      alert("please enter valid email address");
      return
    } 
     if (password == "") {
      alert("password filed is required");
      return
    } 
     if (password.length < 5) {
      alert("password length greater five");
      return
    }
    if (name) {
      localStorage.setItem("userLogin", data.name);
      handleToken();
    }
  };

  return (
    <div className="container mt-3">
      {/* <SignIn/> */}
      <section>
        <h1 className="text-center col-lg-4">Sign Up</h1>
        <form onSubmit={(e) => handlesubmit(e)} className="mb-3 col-lg-4">
          <div>
            <label htmlFor="name">Name</label>
            <input
              type="text"
              placeholder="Enter Your Name"
              name="name"
              value={data.name}
              onChange={(e) => handleOnChange(e)}
            />
            <label htmlFor="email">Email</label>
            <input
              type="email"
              placeholder="Enter Your Email"
              name="email"
              value={data.email}
              onChange={(e) => handleOnChange(e)}
            />
            <label htmlFor="password">Password</label>
            <input
              type="password"
              placeholder="Enter Your Password"
              name="password"
              maxLength="10"
              value={data.password}
              onChange={(e) => handleOnChange(e)}
            />
            <button>Click</button>
          </div>
        </form>
      </section>
    </div>
  );
};
export default LoginPage;
