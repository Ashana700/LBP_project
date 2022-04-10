import React from "react";
import top_image from "../images/top_image.png";

function Navbar() {
    return (
        <div>
            <img className="top_image" src={top_image} />
            <div className="heading"> Oppty Connect-IITR </div>
        </div>
    );
}

export default Navbar;
