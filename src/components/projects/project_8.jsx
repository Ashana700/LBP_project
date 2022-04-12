import React, { useState } from "react";
import Button_image from "../../images/button-image.png";
import Card_image1 from "../../images/fahad.jpeg";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";

import Project_8_details from "../project_details/project_8";

const Project_8 = () => {
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
        <div className="card-title"> M/s FAHAD FABRICATION </div>
        <div className="card-description">
          {" "}
          Unavailability of raw materials and high costs while obtaining them
          from different suppliers. Fluctuating wood prices
        </div>
        <div className="faculty-heading"> Faculty incharge </div>
        <div className="faculty-name"> Mr. Rahul Mullik </div>
        <img className="details" src={Button_image} />
        <div className="button-text"> More details </div>

        <Modal
          open={isModalVisible}
          onClose={handleCancel}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box>
            <Project_8_details />
          </Box>
        </Modal>
      </div>
    </>
  );
};
export default Project_8;
