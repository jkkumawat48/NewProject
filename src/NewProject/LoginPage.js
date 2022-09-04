import React, {useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
const LoginPage=()=>{
const history= useHistory();

    useEffect(()=>{
if(localStorage.getItem('user-info')){
    history.push("/add")
}
    },[])
    return(
        <div>
            <h1>Login Page</h1>
        </div>
    )
}
export default LoginPage;