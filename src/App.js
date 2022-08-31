import logo from './logo.svg';
import './App.css';
import { ReactDOM } from 'react';
import Header from './Component/LeyOut/Header';
import Footer from './Component/LeyOut/Footer';
import Nav from './Component/LeyOut/Nav';
import Home from './Component/LeyOut/Home'
import About from './Component/LeyOut/About'
import Form from './Component/LeyOut/Form'
import {BrowserRouter as Router, Route,Link} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      
      <Header/>
      <Footer/>
           <Nav/> 
                      <Home/>
            <Form/>
    </div>
  );
}

export default App;
