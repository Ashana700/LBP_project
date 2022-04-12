import React, { useState } from "react";
import Button_image from "../../images/button-image.png";
import Card_image1 from "../../images/arusan.jpg";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";

import Project_1_details from "../project_details/project_1";

const Project_1 = () => {
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
        <div className="card-title"> ARUSAN PAINTS & COATING </div>
        <div className="card-description">
          {" "}
          Need of funds for raw materials, lack of funds forces them to contact
          traders instead of manufacturing on their own.
        </div>
        <div className="faculty-heading"> Faculty incharge </div>
        <div className="faculty-name"> Mr. Anshu Anand </div>
        <img className="details" src={Button_image} />
        <div className="button-text"> More details </div>

        <Modal
          open={isModalVisible}
          onClose={handleCancel}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box>
            <Project_1_details />
          </Box>
        </Modal>
      </div>
    </>
  );
};
export default Project_1;
