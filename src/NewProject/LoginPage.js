import React from "react";
// import '../CSS/Login.css';
const  LoginPage = () => {
    return(
        <>
        <form className="">
<div className="container">
<h1>Sign Up</h1>
<p>Please Fill in this from to create an account.</p>
{/* <hr>

</hr> */}
<label htmlFor="email">Email</label>
<input type="email"placeholder="Enter your Email"/>
<label htmlFor="password">Password</label>
<input type="password"placeholder="Enter Your Password"/>
<label htmlFor="psw-repeat"><b>Repeat Password</b></label>
<input type="password"placeholder="Repeat Password"/>
<label>
    <input type="checkbox"checked="checked"name="ramember" style="margin-bottom:15px">Remember Me</input>
    </label>
    <p>By creating an account you agree to our <a href="#" style="color:dodgerblue">Terms & Privacy</a>.</p>
    <div className="clearfix">
<button type="button" className="cancelbtn">Cancel</button>
<button type="submit" className="signupbtn">Sign Up</button>
    </div>
</div>
        </form>
        </>
    )
}
export default LoginPage;