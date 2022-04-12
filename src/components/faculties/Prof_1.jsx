import React, { useState} from "react";
import Button_image from "../../images/button-image.png";
import Card_image1 from "../../images/card_image-1.png";
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';

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
        <img className="card_image" src={Card_image1} />
        <div className="card-title"> Akshay dwiwedi</div>
        <div className="card-description"> Target of the project is to develop a working 3-D printer which can cater the need of small automobile parts in industry.  </div>
        <div className="faculty-heading"> Faculty incharge </div>
        <div className="faculty-name"> Mr. Akshay Diwedi. </div>
        <ul >
          <li className="tags">3D modelling</li>
          <li className="tags">3D modelling</li>
          <li className="tags">3D modelling</li>
        </ul>

        
        <img className="details" src={Button_image} onClick={showModal}/>
        <div className="button-text"> More details </div>
        <Modal
          open={isModalVisible}
          onClose={handleCancel}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box>
          <Prof_1_details/>
          </Box>
         
        </Modal>
      </div>
    </>
  );
}
export default Prof_1;