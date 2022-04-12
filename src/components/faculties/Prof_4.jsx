import React, { useState } from "react";
import Button_image from "../../images/button-image.png";
import image from "../../images/vidit_gaur.jpg";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";

import Prof_4_details from "../faculties_details/Prof_4";

const Prof_4 = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    console.log(true);
    setIsModalVisible(true);
  };

  const handleCancel = () => {
    console.log(false);
    setIsModalVisible(false);
  };

  return (
    <>
      <div>
        <img className="card_image_prof" src={image} />
        <div className="card-title"> Vidit Gaur</div>
        {/* <div className="card-description">
          {" "}
          Advanced Manufacturing Processes, Nontraditional Micro-machining,
          Metal Matrix Composites, Primary and Secondary Processing of MMC,
          Quality Management, QFD for service sector.{" "}
        </div> */}
        <div className="faculty-heading">
          {" "}
          Mechanical and Industrial Engineering{" "}
        </div>
        <div className="faculty-name"> vidit.gaur@me.iitr.ac.in </div>
        <div className="faculty-heading research"> Research fields </div>
        <div className="faculty-name">
          {" "}
          Fatigue, Fracture, FEM, CPFEM,Damage, Fracture Mechanics,
          Environmental Fatigue, Modeling of Materials, Failure Analysis.{" "}
        </div>
        {/* <ul>
          <li className="tags">3D modelling</li>
          <li className="tags">3D modelling</li>
          <li className="tags">3D modelling</li>
        </ul> */}

        <img className="details" src={Button_image} onClick={showModal} />
        <div className="button-text"> More details </div>
        <Modal
          open={isModalVisible}
          onClose={handleCancel}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box>
            <Prof_4_details />
          </Box>
        </Modal>
      </div>
    </>
  );
};
export default Prof_4;
