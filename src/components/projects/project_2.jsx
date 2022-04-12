import React, { useState } from "react";
import Button_image from "../../images/button-image.png";
import  Card_image1 from "../../images/card_image-1.png";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";

import Project_2_details from "../project_details/project_2";

const Project_2 = () => {
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
        <div className="card-title"> AYKA PAINTS PVT LIMITED </div>
        <div className="card-description"> Import duties on raw materials lead to increase in input cost because of which small scale industries find it difficult to survive and compete with bigger established companies.
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
            <Project_2_details/>
          </Box>
        </Modal>
      </div>
    </>
  );
};
export default Project_2;
