import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./Home";
import LoginPage from "./NewProject/LoginPage";
import Signin from "./NewProject/Signin";
import Logout from "./NewProject/Signin";
const App = () => {
  const [tokenActive, setTokenActive] = useState(null);
  const handleToken = () => {
    const token = localStorage.getItem("userLogin");
    if (token) {
      setTokenActive(true);
    }
  };
  useEffect(() => {
    console.log("okok");
  });
  return (
    <>{tokenActive ? <Home /> : <LoginPage handleToken={handleToken} />}</>
  );
};
export default App;
