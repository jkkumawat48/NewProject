import React from "react";
import { NavLink } from "react-router-dom";
import '../CSS/Contact.css';
const Login = () => {
  return (
    <>
      <h1>Contact us</h1>
      <form className="contact">
        <div>
          <label htmlFor="Name">Name</label>
          <input type="text" placeholder="Enter Your Name" />
        </div>
        <div>
          <label htmlFor="Email">Email</label>
          <input type="email" placeholder="Enter Your email" />
        </div>
        <div>
          <label htmlFor="Password">Password</label>
          <input type="password" placeholder="Enter Your password" />
        </div>
        <div>
          <label htmlFor="Mobile">Mobile</label>
          <input type="mobile" placeholder="Enter Your Mobile" />
        </div>
        <div className="btnBox">
            <div className="btn">
              <NavLink to="/" className="readore">Submit Datails</NavLink>
            </div>
          </div>
      </form>
    </>
  );
};
export default Login;
