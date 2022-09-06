import React from "react";
import { useEffect,useState } from "react";
import Home from './NewProject/Home';
import About from './NewProject/About';
import Services from './NewProject/Services';
import Context from './NewProject/Context';
import Policy from './NewProject/Policy';
import Error from './NewProject/Error';
import List from './NewProject/List';
import Footer from './NewProject/Footer'
import LoginPage from "./NewProject/LoginPage";
import { Switch,Route, useHistory } from "react-router-dom";
const App=()=>{
  const [token,setToken]= useState(null)
  const history=useHistory()
 const handleToken=()=>{
    const token = localStorage.getItem("token")
    setToken(token)
  }
  const logout=()=>{
    const token=localStorage.removeItem(token)
    setToken(token)
  }

  return(
    <>
  
   { token ?
   <>
   <List logout={logout} />
    <Switch>
      <Route exact path="/"component={Home}/>
      <Route path="/about"component={About}/>
      <Route path="/services"component={Services}/>
      <Route path="/context"component={Context}/>
      <Route path="/policy"component={Policy}/>
      <Route path="/Error" component={Error}/>
    </Switch>
    <Footer/>
    </>: <LoginPage handleToken={handleToken} />
    }
    
    </>
  )
}
export default App;