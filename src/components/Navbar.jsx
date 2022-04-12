import React from "react";

import text_image from "../images/text_image.png"
import logo from "../images/navbar/logo.png"
import l1 from "../images/navbar/l1.png"
import l2 from "../images/navbar/l2.png"
import l3 from "../images/navbar/l3.png"
import l4 from "../images/navbar/l4.png"
import r1 from "../images/navbar/r1.png"
import r2 from "../images/navbar/r2.png"
import r3 from "../images/navbar/r3.png"
import r4 from "../images/navbar/r4.png"

function Navbar() {
    return (
        <div>
            <div className="top" ></div>
            <img className="logo" src={logo}/>
            <img className="l1" src={l1}/>
            <img className="l2" src={l2}/>
            <img className="l3" src={l3}/>
            <img className="l4" src={l4}/>
            <img className="r1" src={r1}/>
            <img className="r2" src={r2}/>
            <img className="r3" src={r3}/>
            <img className="r4" src={r4}/>
            
           
            <img className="heading" src={text_image} />
            <div className="heading-part"></div>
            
        </div>
    );
}

export default Navbar;
