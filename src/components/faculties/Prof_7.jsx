<<<<<<< HEAD
import React, { useState } from "react";
import Button_image from "../../images/button-image.png";
import image from "../../images/vidit_gaur.jpg";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";

import Prof_7_details from "../faculties_details/Prof_1";

const Prof_7 = () => {
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
        <div className="card-description">
          {" "}
          Target of the project is to develop a working 3-D printer which can
          cater the need of small automobile parts in industry.{" "}
        </div>
        <div className="faculty-heading"> Faculty incharge </div>
        <div className="faculty-name"> Mr. Akshay Diwedi. </div>
        <ul>
          <li className="tags">3D modelling</li>
          <li className="tags">3D modelling</li>
          <li className="tags">3D modelling</li>
        </ul>

        <img className="details" src={Button_image} onClick={showModal} />
        <div className="button-text"> More details </div>
        <Modal
          open={isModalVisible}
          onClose={handleCancel}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box>
            <Prof_7_details />
          </Box>
        </Modal>
      </div>
    </>
  );
};
export default Prof_7;
=======
import React, { useState } from "react";
import Button_image from "../../images/button-image.png";
import image from "../../images/Akshay_diwedi.jpg";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";

import Prof_7_details from "../faculties_details/Prof_1";

const Prof_7 = () => {
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
        <div className="card-description">
          {" "}
          Target of the project is to develop a working 3-D printer which can
          cater the need of small automobile parts in industry.{" "}
        </div>
        <div className="faculty-heading"> Faculty incharge </div>
        <div className="faculty-name"> Mr. Akshay Diwedi. </div>
        <ul>
          <li className="tags">3D modelling</li>
          <li className="tags">3D modelling</li>
          <li className="tags">3D modelling</li>
        </ul>

        <img className="details" src={Button_image} onClick={showModal} />
        <div className="button-text"> More details </div>
        <Modal
          open={isModalVisible}
          onClose={handleCancel}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box>
            <Prof_7_details />
          </Box>
        </Modal>
      </div>
    </>
  );
};
export default Prof_7;
>>>>>>> 92e2b1c607d9d1ef82b19277d6d043268f0c4f0d
