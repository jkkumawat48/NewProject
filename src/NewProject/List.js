import React from "react";
import logo from '../Images/logo.jpg';
import { NavLink } from "react-router-dom";
import SearchIcon from '@mui/icons-material/Search';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import PhoneIcon from '@mui/icons-material/Phone';
import '../CSS/ListStyle.css';
import LoginPage from "./LoginPage";
const List=()=>{
    return(
        <>
<header>
    <div className="container container-flex">
<div className="logoContainer">
    <img src={logo} alt="logo" className="logo"/>
</div>
<nav>
    <div className="list">
        
        <NavLink exact to="/" className="listItem" activeClassName="activeItem">Home</NavLink>
        <NavLink to="/about"className="listItem" activeClassName="activeItem">About</NavLink>
        <NavLink to="/context"className="listItem" activeClassName="activeItem">Context</NavLink>
        <NavLink to="/policy"className="listItem" activeClassName="activeItem">Policy</NavLink>
        <NavLink to="/services"className="listItem" activeClassName="activeItem">Services</NavLink>
        {/* <NavLink to="/signin"className="listItem" activeClassName="activeItem">SignIn</NavLink> */}
        <NavLink to="/loginpage"className="listItem" activeClassName="activeItem">LoginPage</NavLink>
        
    </div>
    {/* <NavLink to="/signin"className="listItem" activeClassName="activeItem">SignIn</NavLink>
    <NavLink to="/loginpage"className="listItem" activeClassName="activeItem">LoginPage</NavLink> */}
</nav>
<div className="icon">
<SearchIcon />
{/* <p className="mt-3">Already Have An Account<span><NavLink to="/SignIn">SignIn</NavLink></span></p> */}
<PermIdentityIcon/>
<PhoneIcon/>

</div>
    </div>
</header>
        </>
    )
}
export default List;