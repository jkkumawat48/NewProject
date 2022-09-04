import React from "react";

import '../CSS/Service.css';
import Card from './Card';
import Data from './Data'
function Services(){
    return(
       <> 
            <h1 className="h1">Our Services</h1>
            <div className="Service">
                <Card/>
{/* {
 Data.map((value)=>{
    return(
        <Card 
        title1={value.Stitle}
        imgSource={value.imgsrc}
        desc1={value.desc1}
        btnServices={value.btnService}
        />
    )
})} */}
            </div>
            </>
    )
}
export default Services;