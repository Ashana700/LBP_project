import React, { useState } from "react";
import Button_image from "../../images/button-image.png";
import  Card_image1 from "../../images/card_image-1.png";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";

import Project_9_details from "../project_details/project_9";

const Project_9 = () => {
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

      <img className="card_image" src={Card_image1} />
        <div className="card-title"> SAFEGUARD INDUSTRIES </div>
        <div className="card-description"> Battery backup is the common problem
Making good batteries at same cost
By minimizing the fake alarm sounding
 </div>
        <div className="faculty-heading"> Faculty incharge </div>
        <div className="faculty-name"> Mr. Manoj Tripathi </div>
        <img className="details" src={Button_image} />
        <div className="button-text"> More details </div>

        <Modal
          open={isModalVisible}
          onClose={handleCancel}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box>
            <Project_9_details/>
          </Box>
        </Modal>
      </div>
    </>
  );
};
export default Project_9;
