import React from "react";
import Card_image1 from "../../images/card_image-1.png";
import Button_image from "../../images/button-image.png";
import Project_1 from "../projects/project_1";
import Project_2 from "../projects/project_2";
import Project_3 from "../projects/project_3";
import Project_4 from "../projects/project_4";
import Project_5 from "../projects/project_5";
import Project_6 from "../projects/project_6";
import Project_7 from "../projects/project_7";
import Project_8 from "../projects/project_8";
import Project_9 from "../projects/project_9";

function Projects() {
  return (
    <div className="content">
      <div className="row-1">
      <div className="card-1">
        <Project_1 />
      </div>
      <div className="card-2">
        <Project_2 />
      </div>
      <div className="card-3">
        <Project_3 />
      </div>
      </div>

      <div className="card-1 row-2">
        <Project_4 />
      </div>
      <div className="card-2 row-2">
        <Project_5 />
      </div>
      <div className="card-3 row-2">
        <Project_6 />
      </div>

      <div className="card-1 row-3">
        <Project_7 />
      </div>
      <div className="card-2 row-3">
        <Project_8 />
      </div>
      <div className="card-3 row-3">
         <Project_9 />
      </div>

    </div>
    
  );
}

export default Projects;