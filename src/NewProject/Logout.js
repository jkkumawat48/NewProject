import React from "react";
import { NavLink,useHistory } from "react-router-dom";

const Logout=()=>{
    const history=useHistory();
    const name =JSON.parse(localStorage.getItem('user_signin'))
    console.log('user_signin')
    function logout(){
        localStorage.clear();
        history.push('/register')
    }
    return(
        <div>
            <h1>Logout</h1>
            
                localStorage.getItem('user_signin') ?
            
            <NavLink to="/logout" className="listItem" activeClassName="activeItem" >
        <NavDropdown title="">
<NavDropdown.Item onClick={logout}>Logout</NavDropdown.Item>
<NavDropdown.Item>Profile</NavDropdown.Item>
        </NavDropdown>
        </NavLink>
    
        </div>
    )
}
export default Logout;