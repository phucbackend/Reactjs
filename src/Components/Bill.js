import Modal from "react-modal";
import Pizza from "../Data/Pizza"
import "../Styles/Bill.css";

export default function OrderBill({  
    isOpen, 
    onRequestClose
}) {
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
                    <div className="product-info">
                        <p className="product-title"></p>
                        <p className="product-desc">Ngày đặt hàng: </p>
                    </div>
                    <div className="price-info">
              </div>
                </div>
                <div className="total-section">
                    <p className="total-text">Tổng số tiền:</p>
                </div>
               
            </div>
        </Modal>
    );
}
