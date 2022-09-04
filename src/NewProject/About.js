import React from "react";
import Same from './Same';
import img1 from '../Images/img1.jpeg'
function About(){
    return(
        <>
        <Same
          title="Know More About us"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros, 
          pulvinar facilisis justo mollis, auctor consequat urna. "
          imgsrc={img1}
          btn="Know more"
       />
        </>
    )
}
export default About;