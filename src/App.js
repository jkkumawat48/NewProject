import React from "react";
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
import Login from "./NewProject/Context";
const App=()=>{
  const token = localStorage.getItem("token")
  const history=useHistory()
console.log(token)
if(token){
  history.push("/")
}
  return(
    <>
  
   { token ?
   <>
   <List/>
    <Switch>
      <Route path="/"component={Home}/>
      <Route path="/about"component={About}/>
      <Route path="/services"component={Services}/>
      <Route path="/context"component={Context}/>
      <Route path="/policy"component={Policy}/>
      <Route path="/Error" component={Error}/>
    </Switch>
    <Footer/>
    </>: <LoginPage/>
    }
    
    </>
  )
}
export default App;