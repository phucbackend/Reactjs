import React, { useState } from "react";
// import "../Styles/Main.css";
import "../Styles/Success.css";

import { Link } from "react-router-dom";
import Success from "../Data/Success";
import OrderBill from "./Bill";

export default function SuccessPage() {
  const [modalIsOpen, setmodalIsOpen] = useState(false);

  const openModal = () => {
    setmodalIsOpen(true);
  };

  const closeModal = () => {
    setmodalIsOpen(false);
  };

  return (
    <div className="header_success">
      <div className="conten">
        <h2>ORDER SUCCESSFUL!</h2>
      </div>
      <div>
        {Success.map((success, index) => (
          <img
            src={success.img}
            style={{
              width: "350px",
              height: "450px",
              margin: "auto",
            }}
          />
        ))}
      </div>

      <div className="button-control">
        <button className="button_success" onClick={openModal}>
          Tracking your order
        </button>
        <Link to="/">
          <button className="button_success">Keep Ordering</button>
        </Link>
      </div>

      <OrderBill isOpen={modalIsOpen} onRequestClose={closeModal}></OrderBill>
    </div>
  );
}
