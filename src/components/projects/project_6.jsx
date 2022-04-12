import React, { useState } from "react";
import Button_image from "../../images/button-image.png";
import Card_image1 from "../../images/grativas.jpg";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";

import Project_6_details from "../project_details/project_6";

const Project_6 = () => {
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
        <div className="card-title"> M/s GRAVITAS INDUSTRIES </div>
        <div className="card-description">
          {" "}
          Unavailability of raw materials (mentioned Specialised steel) in
          Dehradun and is often obtained from Mumbaior even imported. A major
          problem for MSMEs.{" "}
        </div>
        <div className="faculty-heading"> Faculty incharge </div>
        <div className="faculty-name"> Mr. Akshay Dvivedi </div>
        <img className="details" src={Button_image} />
        <div className="button-text"> More details </div>

        <Modal
          open={isModalVisible}
          onClose={handleCancel}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box>
            <Project_6_details />
          </Box>
        </Modal>
      </div>
    </>
  );
};
export default Project_6;
