import React, {useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
// import Home from './Home';
const LoginPage=({handleToken})=>{
const history= useHistory();
const[data,setData]=useState({name:"",email:"",password:""})
const handleOnChange=(e)=>{
    const{name,value}=e.target;
    setData({...data,[name]:value})
    // console.log(name,value)
}
const handlesubmit=(e)=>{
    e.preventDefault();
    localStorage.setItem("token",data.name)
    setData({name:"",email:"",password:""})
   handleToken()
    
}
    useEffect(()=>{
if(localStorage.getItem('user-info')){
    history.push("/add")
}
    },[])
    return(
        <div>
            {/* <Home/> */}
            <h1>Login Page</h1>
            <form onSubmit={(e)=>handlesubmit(e)}>
                <div>
                    <label htmlFor="name">Name</label>
                    <input type="text"placeholder="Enter Your Name" name="name" value={data.name} onChange={(e)=>handleOnChange(e)}/>
                    <label htmlFor="email">Email</label>
                    <input type="email"placeholder="Enter Your Email" name="email" value={data.email} onChange={(e)=>handleOnChange(e)}/>
                    <label htmlFor="password">Password</label>
                    <input type="password"placeholder="Enter Your Password" name="password" value={data.password} onChange={(e)=>handleOnChange(e)}/>
                    <button>Click</button>
                </div>
            </form>
        </div>
    )
}
export default LoginPage;