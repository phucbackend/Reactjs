import Modal from "react-modal";
import "../Styles/Bill.css";

export default function OrderBill({ isOpen, onRequestClose }) {
  // Mock data for the order with dateTime
  const orderItems = [
    {
      name: "Pizza Margherita",
      price: 150000,
      quantity: 2,
      total: 300000,
      dateTime: "2024-11-25 12:30:00", // Example date and time
    },
    {
      name: "Pizza Pepperoni",
      price: 180000,
      quantity: 1,
      total: 180000,
      dateTime: "2024-11-25 12:30:00",
    },
    {
      name: "Pizza Veggie",
      price: 120000,
      quantity: 3,
      total: 360000,
      dateTime: "2024-11-25 12:30:00",
    },
  ];

  // Calculate total price
  const totalPrice = orderItems.reduce((sum, item) => sum + item.total, 0);

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Order Bill"
      className="modal-content"
      overlayClassName="modal-overlay"
    >
      <div className="order-container">
        <div className="header">
          <span className="store-name">Order History 01</span>
        </div>
        <div className="order-details">
          {orderItems.map((item, index) => (
            <div key={index} className="product-info">
              <p className="product-title">{item.name}</p>
              <p className="product-desc">
                Giá: {item.price.toLocaleString()} VND
              </p>
              <p className="product-desc">Số lượng: {item.quantity}</p>

              <p className="product-desc">Ngày đặt hàng: {item.dateTime}</p>
            </div>
          ))}
        </div>
        <div className="total-section">
          <p className="total-text">
            Tổng số tiền: {totalPrice.toLocaleString()} VND
          </p>
        </div>
      </div>
    </Modal>
  );
}
