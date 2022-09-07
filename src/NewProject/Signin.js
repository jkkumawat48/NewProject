import React from "react";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import { NavLink } from "react-router-dom";
// import {useNevigate} from "react-router-dom";
const SignIn = () => {
  const history = useHistory();
  const [data, setData] = useState({ email: "", password: "" });
  const [user, setUser] = useState([]);
  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
    // console.log(name,value)
  };
  const handlesubmit = (e) => {
    e.preventDefault();
    setData({ email: "", password: "" });

    const getuserArr= localStorage.getItem("user you tube")
    console.log(getuserArr)

    const { name, email, password } = data;

    if (email == "") {
      alert("email is required");
      return
    } else if (!email.includes("@")) {
      alert("please enter valid email address");
      return
    } else if (password == "") {
      alert("password filed is required");
      return
    } else if (password.length < 5) {
      alert("password length greater five");
      return
    }else{
        if(getuserArr && getuserArr.length){
            const userdata = JSON.parse(getuserArr)
            const usersignin=userdata.filter((ele,k)=>{
                return ele.email === email && ele.password === password
            })
            if(usersignin.length ===5){
                alert("invalid details")
            }else{
                console.log("user login succesfully")
localStorage.setItem("user_signin",JSON.stringify(getuserArr))

                history("/details")
            }
            
        }
    }
    
  };
  return (
    <div className="container mt-3">
      <section>
        <h1 className="text-center col-lg-4">Sign Up</h1>
        <form onSubmit={(e) => handlesubmit(e)} className="mb-3 col-lg-4">
          <div>
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
              value={data.password}
              onChange={(e) => handleOnChange(e)}
            />
            <button>Click</button>
           
          </div>
        </form>
        <div className="right_data">
        <p className="mt-3">
              Already Have An Account
              <span>
                SignIn
              </span>
            </p>
          <div className="sign_img">
            <img src="./img1.jpeg" alt="" />
          </div>
        </div>
      </section>
    </div>
  );
};
export default SignIn;
