import React from "react";
import "../Styles/Payment.css";
import "../Styles/Main.css";
import { Link } from "react-router-dom";

//Chứa các item của giỏ hàng
export function Cart() {
  //Để trống
}

//Chứa các thành phần thanh toán
export function PaymentInfo() {
  return (
    <div>
      <FillUserInfo />
      <FillPaymentMethod />
      <FillNote />
      <ConfirmPayment />
    </div>
  );
}

//Thành phần điền thông tin người dùng
export function FillUserInfo() {
  return (
    <div className="user-info">
      <div className="fill-infor">
        <h1 className="title">FILL YOUR INFORMATION</h1>
        <form className="user-form">
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Name"
            style={{
              backgroundColor: "#d2cdcd53",
              width: "600px",
              height: "35px",
            }}
          />
          <br />
          <input
            type="text"
            id="phonenumber"
            name="phonenumber"
            placeholder="Phone Number"
            style={{
              backgroundColor: "#d2cdcd53",
              width: "600px",
              height: "35px",
            }}
          />
          <br />
          <input
            type="text"
            name="address"
            id="address"
            placeholder="Address"
            style={{
              backgroundColor: "#d2cdcd53",
              width: "600px",
              height: "35px",
            }}
          />
          <br />
        </form>
      </div>
    </div>
  );
}

//Thành phần điền phương thức thanh toán
export function FillPaymentMethod() {
  return (
    <div className="payment-methods">
      <h1 className="title-name">PAYMENT METHODS</h1>
      <div className="methods">
        <div className="methods-detail" onclick="cash()">
          <p>Cash</p>
        </div>
        <div className="methods-detail" onclick="pay()">
          <p>PayPal</p>
        </div>
        <div className="methods-detail" onclick="mas()">
          <p>Master Card</p>
        </div>
        <div className="methods-detail" onclick="visa()">
          <p>Visa Card</p>
        </div>
      </div>
    </div>
  );
}

//Thành phần tùy chọn ghi chú
export function FillNote() {
  return (
    <div className="note-container">
      <h1 className="title-name">COMMENT</h1>
      <div className="d">
        <form className="payment-form">
          <div className="note">
            <input
              type="text"
              id="note"
              name="note"
              placeholder="Do you want to note anything to the restaurant?"
              style={{
                backgroundColor: "white",
                width: "600px",
                height: "35px",
              }}
            />
          </div>
        </form>
        <div id="inHTML"></div>
      </div>
    </div>
  );
}

//Thành phần xác nhận thanh toán - mua hàng
export function ConfirmPayment() {
  return (
    <div className="confirm-payment">
      <button className="btn-confirm">PAY</button>
      <Link to="/" style={{ textDecoration: "underline" }}>
        Add more ? ...
      </Link>
    </div>
  );
}

//Component tổng
export default function Payment() {
  return (
    <div className="payment-container">
      <div className="cart">
        <Cart />
      </div>
      <div className="payment-info">
        <PaymentInfo />
      </div>
    </div>
  );
}
