import React, { useState } from "react";
import Button_image from "../../images/button-image.png";
import Card_image1 from "../../images/orbit.jpg";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";

import Project_5_details from "../project_details/project_5";

const Project_5 = () => {
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
        <div className="card-title"> ORBIT CABLE INDIA PVT LTD</div>
        <div className="card-description">
          {" "}
          To deal with changing preference of product(innovation). How can we
          help? Assist them in managing their finance so that they can buy new
          technologies.
        </div>
        <div className="faculty-heading"> Faculty incharge </div>
        <div className="faculty-name"> Mr. Abhishek K Behera </div>
        <img className="details" src={Button_image} />
        <div className="button-text"> More details </div>

        <Modal
          open={isModalVisible}
          onClose={handleCancel}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box>
            <Project_5_details />
          </Box>
        </Modal>
      </div>
    </>
  );
};
export default Project_5;
