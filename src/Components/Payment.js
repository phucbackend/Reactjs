import "@fortawesome/fontawesome-free/css/all.min.css";
import React, {useEffect} from "react";
import "../Styles/Payment.css";
import "../Styles/Main.css";
import { Link } from "react-router-dom";
import { useState } from "react";

const Cart = () => {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(storedCart);
  }, []);

  const handleQuantityChange = (id, action) => {
    const updatedCart = cart.map(item => {
      if (item.id === id) {
        const newQuantity = action === "increase" ? item.quantity + 1 : item.quantity - 1;
        if (newQuantity > 0) {
          return { ...item, quantity: newQuantity, totalPrice: newQuantity * item.price };
        }
      }
      return item;
    });

    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const handleRemoveItem = (id) => {
    const updatedCart = cart.filter(item => item.id !== id);
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  return (
    <div className="cart-table">
      <h2>Your Cart</h2>
      {cart.length === 0 ? (
        <p>Cart is empty</p>
      ) : (
        <table className="cart-item-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Total</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {cart.map((item) => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>${item.price}</td>
                <td>
                  <button className="quantity-btn" onClick={() => handleQuantityChange(item.id, "decrease")}>
                    -
                  </button>
                  {item.quantity}
                  <button className="quantity-btn" onClick={() => handleQuantityChange(item.id, "increase")}>
                    +
                  </button>
                </td>
                <td>${item.totalPrice.toFixed(2)}</td>
                <td>
                  <button className="remove-btn" onClick={() => handleRemoveItem(item.id)}>
                    Remove
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

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
const [selectedMethod, setselectedMethod] = useState(null); 
const handleSelect = (menthod) =>{
  setselectedMethod (menthod); 
}
  return (
   
    <div className="payment-methods">
      <h1 className="title-name">PAYMENT METHODS</h1>
            
      <div className="methods">

        <div className= {`methods-detail ${selectedMethod === "Cash" ? "selected": ""}`} 
          onClick= {() =>handleSelect("Cash")}>
        <i class="fa-solid fa-money-bill"></i>
        <p>Cash</p>
        </div>

        <div className=  {`methods-detail ${selectedMethod === "PayPal" ? "selected": ""}`} 
            onClick= {() =>handleSelect("PayPal")}>
        <i class="fa-brands fa-cc-paypal"></i>
          <p>PayPal</p>
        </div>

        <div className={`methods-detail ${selectedMethod === "master-cash" ? "selected": ""}`} 
        onClick= {() =>handleSelect("master-cash")}>
        <i class="fa-brands fa-cc-mastercard"></i>
          <p>Master Card</p>
        </div>

        <div className=  {`methods-detail ${selectedMethod === "visa" ? "selected": ""}`} 
        onClick= {() =>handleSelect("visa")}>
        <i class="fa-brands fa-cc-visa"></i>
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
          <i class="fa-solid fa-note-sticky" 
          style={{paddingLeft: "10px", 
                  paddingRight: "10px",
                  fontSize: "22px"}}></i>
            <input
              type="text"
              id="note"
              name="note"
              placeholder="Do you want to note anything to the restaurant?"
              style={{
                backgroundColor: "white",
                width: "550px",
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
      
     <Link to="/successpage"><button className="btn-confirm">PAY</button></Link> 
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
