import React from "react";
import TwiterIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/LinkedIn';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../CSS/Footer.css';

const Footer=()=>{
    return(
        <>
        <footer>
            <div className="container container-flex">
<div className="icons">
<TwiterIcon className="icon"/>
<FacebookIcon className="icon"/>
<InstagramIcon className="icon"/>
<LinkedInIcon className="icon"/>
</div>
<div className="line">
<hr/>
<hr/>
</div>
<div className="copyright">
<p>All rights reserved &copy; </p>
<p>Made by Love by RJ</p>
</div>
            </div>
        </footer>
        </>
    )
}
export default Footer;