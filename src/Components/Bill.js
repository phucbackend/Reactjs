import React, { useState, useEffect } from "react";
import Modal from "react-modal";
import "../Styles/Bill.css";

// Group bills by date function
const groupBillsByDate = (bills) => {
  return bills.reduce((groups, bill) => {
    const dateTime = new Date(bill.id).toLocaleString("en-US", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    }); // Định dạng đầy đủ ngày, giờ, phút, giây
    if (!groups[dateTime]) {
      groups[dateTime] = [];
    }
    groups[dateTime].push(bill);
    return groups;
  }, {});
};

export default function OrderBill({ isOpen, onRequestClose }) {
  const [bills, setBills] = useState([]);

  useEffect(() => {
    // Correctly parse the data and handle edge cases
    const storedData = JSON.parse(localStorage.getItem("bill")) || { bill: [] };
    setBills(storedData.bill);
  }, []);

  // Group bills by order date
  const groupedBills = groupBillsByDate(bills);

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
          <span className="store-name">Order History</span>
        </div>
        <div className="order-details">
          {Object.keys(groupedBills).length === 0 ? (
            <div className="empty-message">Không có đơn hàng nào</div>
          ) : (
            Object.keys(groupedBills)
              .sort((a, b) => new Date(b) - new Date(a)) // Sắp xếp giảm dần theo ngày
              .map((date, index) => {
                const total = groupedBills[date].reduce(
                  (sum, bill) => sum + bill.totalPrice,
                  0
                );
                const representativeBill = groupedBills[date][0];
                return (
                  <div key={index} className="date-group">
                    <div className="date">{date}</div>
                    <div className="common-info-inline">
                      <div>Name: {representativeBill.username}</div>
                      <div>Address: {representativeBill.address}</div>
                    </div>
                    <table className="product-table">
                      <thead>
                        <tr>
                          <th>Product</th>
                          <th>Price</th>
                          <th>Size</th>
                          <th>Quantity</th>
                          <th>Total Price</th>
                        </tr>
                      </thead>
                      <tbody>
                        {groupedBills[date].map((bill, idx) => (
                          <tr key={idx} className="product-info no-border">
                            <td>{bill.name}</td>
                            <td>${bill.price}</td>
                            <td>{bill.size}</td>
                            <td>x{bill.quantity}</td>
                            <td>${bill.totalPrice}</td>
                          </tr>
                        ))}
                        <tr>
                          <td colSpan="4" className="text-right">
                            <strong>Total</strong>
                          </td>
                          <td>
                            <strong>${total}</strong>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                );
              })
          )}
        </div>
      </div>
    </Modal>
  );
}
