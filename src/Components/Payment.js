import "@fortawesome/fontawesome-free/css/all.min.css";
import React, { useEffect } from "react";
import "../Styles/Payment.css";
import "../Styles/Main.css";
import { Link } from "react-router-dom";
import { useState } from "react";

// const Cart = () => {
//   const [cart, setCart] = useState([]);

//   useEffect(() => {
//     const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
//     setCart(storedCart);
//   }, []);

//   const handleQuantityChange = (id, action) => {
//     const updatedCart = cart.map((item) => {
//       if (item.id === id) {
//         const newQuantity =
//           action === "increase" ? item.quantity + 1 : item.quantity - 1;

//         // Đảm bảo số lượng không âm
//         if (newQuantity >= 0) {
//           return {
//             ...item,
//             quantity: newQuantity,
//             totalPrice: newQuantity * item.price,
//           };
//         } else {
//           return item; // Giữ nguyên nếu số lượng giảm xuống dưới 0
//         }
//       } else {
//         return item; // Giữ nguyên các sản phẩm khác
//       }
//     });

//     setCart(updatedCart);
//     localStorage.setItem("cart", JSON.stringify(updatedCart));
//   };

//   const handleRemoveItem = (id) => {
//     // Lấy danh sách giỏ hàng từ state
//     const updatedCart = cart.filter((item) => item.id !== id);

//     // Tái lập số thứ tự cho giỏ hàng
//     const reindexedCart = updatedCart.map((item, index) => ({
//       ...item,
//       id: index + 1, // Sắp xếp lại ID sản phẩm bắt đầu từ 1
//     }));

//     // Lấy giá trị counter từ localStorage
//     let currentCounter = parseInt(localStorage.getItem("counter"), 10);

//     // Giảm giá trị counter đi 1
//     currentCounter = currentCounter > 0 ? currentCounter - 1 : 0;

//     // Lưu giá trị counter mới vào localStorage
//     localStorage.setItem("counter", currentCounter);

//     // Cập nhật state giỏ hàng
//     setCart(reindexedCart);

//     // Lưu giỏ hàng mới vào localStorage
//     localStorage.setItem("cart", JSON.stringify(reindexedCart));
//   };

//   return (
//     <div className="cart-table">
//       <h2>Your Cart</h2>
//       {cart.length === 0 ? (
//         <p>Cart is empty</p>
//       ) : (
//         <table className="cart-item-table">
//           <thead>
//             <tr>
//               <th>ID</th>
//               <th>Name</th>
//               <th>Price</th>
//               <th>Quantity</th>
//               <th>Total</th>
//               <th>Action</th>
//             </tr>
//           </thead>
//           <tbody>
//             {cart.map((item) => (
//               <tr key={item.id}>
//                 <td>{item.id}</td>
//                 <td>{item.name}</td>
//                 <td>${item.price.toFixed(2)}</td>
//                 <td>
//                   <button
//                     className="quantity-btn"
//                     onClick={() => handleQuantityChange(item.id, "decrease")}
//                     disabled={item.quantity === 1} // Disable decrease button if quantity is 1
//                   >
//                     -
//                   </button>
//                   {item.quantity}
//                   <button
//                     className="quantity-btn"
//                     onClick={() => handleQuantityChange(item.id, "increase")}
//                   >
//                     +
//                   </button>
//                 </td>
//                 <td>${(item.quantity * item.price).toFixed(2)}</td>
//                 <td>
//                   <button
//                     className="remove-btn"
//                     onClick={() => handleRemoveItem(item.id)}
//                   >
//                     Remove
//                   </button>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       )}
//     </div>
//   );
// };

//Chứa các thành phần thanh toán

const Cart = () => {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(storedCart);
  }, []);

  const handleQuantityChange = (id, action) => {
    const updatedCart = cart.map((item) => {
      if (item.id === id) {
        const newQuantity =
          action === "increase" ? item.quantity + 1 : item.quantity - 1;

        if (newQuantity >= 0) {
          return {
            ...item,
            quantity: newQuantity,
            totalPrice: newQuantity * item.price,
          };
        } else {
          return item;
        }
      } else {
        return item;
      }
    });

    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const handleRemoveItem = (id) => {
    const updatedCart = cart.filter((item) => item.id !== id);

    const reindexedCart = updatedCart.map((item, index) => ({
      ...item,
      id: index + 1,
    }));

    let currentCounter = parseInt(localStorage.getItem("counter"), 10);
    currentCounter = currentCounter > 0 ? currentCounter - 1 : 0;

    localStorage.setItem("counter", currentCounter);

    setCart(reindexedCart);
    localStorage.setItem("cart", JSON.stringify(reindexedCart));
  };

  // Tính tổng giá trị của giỏ hàng
  const totalCartValue = cart.reduce(
    (total, item) => total + item.quantity * item.price,
    0
  );

  return (
    <div className="cart-table">
      <h2>Your Cart</h2>
      {cart.length === 0 ? (
        <p>Cart is empty</p>
      ) : (
        <div>
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
                  <td>${item.price.toFixed(2)}</td>
                  <td>
                    <button
                      className="quantity-btn"
                      onClick={() => handleQuantityChange(item.id, "decrease")}
                      disabled={item.quantity === 1}
                    >
                      -
                    </button>
                    {item.quantity}
                    <button
                      className="quantity-btn"
                      onClick={() => handleQuantityChange(item.id, "increase")}
                    >
                      +
                    </button>
                  </td>
                  <td>${(item.quantity * item.price).toFixed(2)}</td>
                  <td>
                    <button
                      className="remove-btn"
                      onClick={() => handleRemoveItem(item.id)}
                    >
                      Remove
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          {/* Dòng tổng giá trị */}
          <div className="cart-total">
            <h3>Total: ${totalCartValue.toFixed(2)}</h3>
          </div>
        </div>
      )}
    </div>
  );
};
export function PaymentInfo() {
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [address, setAddress] = useState("");
  const isFormValid = () => {
    // Check if all required fields are filled and a payment method is selected
    return name && phoneNumber && address;
  };
  return (
    <div>
      <FillUserInfo
        name={name}
        setName={setName}
        phoneNumber={phoneNumber}
        setPhoneNumber={setPhoneNumber}
        address={address}
        setAddress={setAddress}
      />
      <FillPaymentMethod />
      <FillNote />
      <ConfirmPayment isFormValid={isFormValid} />
    </div>
  );
}

//Thành phần điền thông tin người dùng
export function FillUserInfo({
  name,
  setName,
  phoneNumber,
  setPhoneNumber,
  address,
  setAddress,
}) {
  return (
    <div className="user-info">
      <div className="fill-infor">
        <h1 className="title">FILL YOUR INFORMATION</h1>
        <form className="user-form">
          <input
            type="text"
            id="name"
            value={name}
            name="name"
            placeholder="Name"
            onChange={(e) => setName(e.target.value)}
            style={{
              backgroundColor: "#d2cdcd53",
              width: "600px",
              height: "35px",
            }}
          />
          <br />
          <input
            type="tel"
            pattern="^[0-9]{10}$"
            id="phonenumber"
            name="phonenumber"
            value={phoneNumber}
            placeholder="Phone Number"
            onChange={(e) => setPhoneNumber(e.target.value)}
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
            value={address}
            id="address"
            placeholder="Address"
            onChange={(e) => setAddress(e.target.value)}
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
  const [selectedMethod, setselectedMethod] = useState("Cash"); // Mặc định là "Cash"

  const handleSelect = (method) => {
    setselectedMethod(method);
  };

  return (
    <div className="payment-methods">
      <h1 className="title-name">PAYMENT METHODS</h1>

      <div className="methods">
        <div
          className={`methods-detail ${
            selectedMethod === "Cash" ? "selected" : ""
          }`}
          onClick={() => handleSelect("Cash")}
        >
          <i class="fa-solid fa-money-bill"></i>
          <p>Cash</p>
        </div>

        <div
          className={`methods-detail ${
            selectedMethod === "PayPal" ? "selected" : ""
          }`}
          onClick={() => handleSelect("PayPal")}
        >
          <i class="fa-brands fa-cc-paypal"></i>
          <p>PayPal</p>
        </div>

        <div
          className={`methods-detail ${
            selectedMethod === "master-cash" ? "selected" : ""
          }`}
          onClick={() => handleSelect("master-cash")}
        >
          <i class="fa-brands fa-cc-mastercard"></i>
          <p>Master Card</p>
        </div>

        <div
          className={`methods-detail ${
            selectedMethod === "visa" ? "selected" : ""
          }`}
          onClick={() => handleSelect("visa")}
        >
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
            <i
              class="fa-solid fa-note-sticky"
              style={{
                paddingLeft: "10px",
                paddingRight: "10px",
                fontSize: "22px",
              }}
            ></i>
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
// export function ConfirmPayment({ isFormValid }) {
//   return (
//     <div className="confirm-payment">
//       <Link to="/successpage">
//         <button
//           className="btn-confirm"
//           onClick={(e) => {
//             if (!isFormValid()) {
//               e.preventDefault();
//               alert("Vui lòng điền thông tin");
//             }
//           }}
//         >
//           PAY
//         </button>
//       </Link>
//       <Link to="/" style={{ textDecoration: "underline" }}>
//         Add more ? ...
//       </Link>
//     </div>
//   );
// }
export function ConfirmPayment({ isFormValid }) {
  const handlePayment = (e) => {
    if (!isFormValid()) {
      e.preventDefault();
      alert("Vui lòng điền thông tin");
      return;
    }

    // Get the cart from localStorage
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];

    // Get the current datetime
    const currentDatetime = new Date().toISOString(); // This will give a UTC string

    // Update cart items with the current datetime as the id and create a new array
    const updatedCartWithDatetime = storedCart.map((item) => ({
      ...item,
      id: currentDatetime, // Replace the item id with the current datetime
    }));

    // Sort the items by datetime (reverse order)
    const sortedCart = updatedCartWithDatetime.sort(
      (a, b) => new Date(b.id) - new Date(a.id)
    );

    // Get the current bill (if exists) from localStorage
    const existingBill = JSON.parse(localStorage.getItem("bill")) || {
      bill: [],
    };

    // Merge the new cart items with the existing items in the bill
    const updatedBill = {
      bill: [...existingBill.bill, ...sortedCart],
    };

    // Save the updated bill data in localStorage
    localStorage.setItem("bill", JSON.stringify(updatedBill));

    // Clear the cart from localStorage after the payment
    localStorage.removeItem("cart");

    // Reset the counter to 1
    localStorage.setItem("counter", "1");

    // Optionally, you can navigate to the success page here:
    // window.location.href = '/successpage';
  };

  return (
    <div className="confirm-payment">
      <Link to="/successpage">
        <button
          className="btn-confirm"
          onClick={handlePayment} // Call the handlePayment function on click
        >
          PAY
        </button>
      </Link>
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
