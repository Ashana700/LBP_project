import React from "react";
import logo from "../images/logo.png"
import text_image from "../images/text_image.png"
import l1 from "../images/l1.png"

function Navbar() {
    return (
        <div>
            <div className="top" ></div>
            <img className="l1" src={l1}/>
            <img className="logo" src={logo}/>
            <img className="heading" src={text_image} />
            <div className="heading-part"></div>
            
        </div>
    );
}

export default Navbar;
