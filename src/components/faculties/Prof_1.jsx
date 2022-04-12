import React, { useState } from "react";
import Button_image from "../../images/button-image.png";
import image from "../../images/Akshay_diwedi.jpg";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";

import Prof_1_details from "../faculties_details/Prof_1";

const Prof_1 = () => {
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
        <div className="card-title"> Akshay dwiwedi</div>
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
        <div className="faculty-name"> akshaydvivedi@me.iitr.ac.in </div>
        <div className="faculty-heading research"> Research fields </div>
        <div className="faculty-name">
          {" "}
          Advanced Manufacturing Processes, Nontraditional Micro-machining,
          Metal Matrix Composites, Primary and Secondary Processing of MMC,
          Quality Management, QFD for service sector.{" "}
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
            <Prof_1_details />
          </Box>
        </Modal>
      </div>
    </>
  );
};
export default Prof_1;
