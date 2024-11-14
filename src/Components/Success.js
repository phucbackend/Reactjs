// SuccessPage.js

import React, { useState } from "react";
import Modal from "react-modal";
import Pizza from "../Data/Pizza"; // Import Pizza data
import "../Styles/Main.css";
import "../Styles/Success.css";
import { Link } from "react-router-dom";

// Required for react-modal accessibility
Modal.setAppElement('#root');

export default function SuccessPage() {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  // Functions to handle modal open and close
  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <div className="header_success">
      <div className="conten">
        <h2>ORDER SUCCESSFUL!</h2>
      </div>

      <div className="button">
        <button onClick={openModal}>Tracking your order</button>
        <Link to="/">
          <button>Keep Ordering</button>
        </Link>
      </div>

      {/* Modal for success message and displaying pizza images */}
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Order Success Modal"
        className="modal_content"
        overlayClassName="modal_overlay"
      >
        <h2>Your Order has been placed!</h2>
        <button onClick={closeModal} className="close_modal">Close</button>

        {/* Display pizza images from Pizza.js */}
        <div className="pizza_images">
          {Pizza.map((item, index) => (
            <img key={index} src={item.img} alt={`Pizza ${index}`} className="pizza_img" />
          ))}
        </div>
      </Modal>
    </div>
  );
}
