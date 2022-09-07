import React, { useState, useEffect } from "react";
import '../CSS/Login.css';

import { useHistory } from "react-router-dom";
import { NavLink } from "react-router-dom";
import img1 from "../Images/img1.jpeg";
import "bootstrap/dist/css/bootstrap.min.css";
// import SignIn from "./Signin";
// import Home from './Home';
const LoginPage = ({ handleToken, userActiveLogin }) => {
  const history = useHistory();
  const [data, setData] = useState({ name: "", email: "", password: "" });
  const [user, setUser] = useState([]);
  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
    // console.log(name,value)
  };
  const handlesubmit = (e) => {
    e.preventDefault();
    // setData({ name: "", email: "", password: "" });
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
    localStorage.setItem("token", data.name);
    handleToken();
    console.log("data added successfully");
    localStorage.setItem("user you tube", JSON.stringify([...user, data]));
  };
  useEffect(() => {
    if (localStorage.getItem("user-info")) {
      history.push("/add");
    }
  }, []);
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

        <p className="mt-3">
          Already Have An Account
          <button onClick={() => userActiveLogin()}>
            <span>SignIn</span>
          </button>
        </p>
        <div className="right_data">
          <div className="sign_img">
            <img src="./img1.jpeg" alt="" />
          </div>
        </div>
      </section>
    </div>
  );
};
export default LoginPage;