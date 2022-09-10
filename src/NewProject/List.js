import React, { useState } from "react";
import logo from "../Images/logo.jpg";
import { NavLink, useHistory } from "react-router-dom";
import { Nav } from "react-bootstrap";
import SearchIcon from "@mui/icons-material/Search";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import PhoneIcon from "@mui/icons-material/Phone";
import "../CSS/ListStyle.css";
import LoginPage from "./LoginPage";
import { NavDropdown } from "react-bootstrap";
import userEvent from "@testing-library/user-event";
const List = () => {
  const [user, setUser] = useState(null);
  const logout = () => {
    localStorage.removeItem("userLogin");
    window.location.reload();
  };

  return (
    <>
      <header>
        <div className="container container-flex">
          <div className="logoContainer">
            <img src={logo} alt="logo" className="logo" />
          </div>
          <nav>
            <div className="list">
              <NavLink
                exact
                to="/"
                className="listItem"
                activeClassName="activeItem"
              >
                Home
              </NavLink>
              <NavLink
                to="/about"
                className="listItem"
                activeClassName="activeItem"
              >
                About
              </NavLink>
              <NavLink
                to="/context"
                className="listItem"
                activeClassName="activeItem"
              >
                Context
              </NavLink>
              <NavLink
                to="/policy"
                className="listItem"
                activeClassName="activeItem"
              >
                Policy
              </NavLink>
              <NavLink
                to="/services"
                className="listItem"
                activeClassName="activeItem"
              >
                Services
              </NavLink>

              <NavLink
                to="/logout"
                className="listItem"
                activeClassName="activeItem"
              >
                <NavDropdown title={user && user.name}>
                  <NavDropdown.Item onClick={() => logout()}>
                    Logout
                  </NavDropdown.Item>

                  <NavDropdown.Item>Profile</NavDropdown.Item>
                </NavDropdown>
              </NavLink>
            </div>
          </nav>
          <div className="icon">
            <SearchIcon />
            <PermIdentityIcon />
            <PhoneIcon />
          </div>
        </div>
      </header>
    </>
  );
};
export default List;
