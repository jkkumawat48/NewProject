import React from "react";
// import { NavLink } from "react-router-dom";
import homeimg from '../Images/homeimg.jpg'
import Same from './Same';
import '../CSS/Homeabout.css';
const Home=()=>{
    return(
       <>
      
       <Same
          title="Learning made easy"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros, 
          pulvinar facilisis justo mollis, auctor consequat urna. "
          imgsrc={homeimg}
          btn="Read more"
       />
       </>
    )
}
export default Home;