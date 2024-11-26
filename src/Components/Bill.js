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
                    {/* {Pizza.map((pizza)=> (
                             <img 
                             className="product-image" 
                             key={pizza.id}
                             src={pizza.img}
                             alt="Product"
                         />
                    ))} */}
                   
                    <div className="product-info">
                        <p className="product-title">Pizza hanh</p>
                        <p className="product-desc">Ngày đặt hàng: </p>
                        
                    </div>
                    <div className="price-info">
                      
                        {/* <p className="discounted-price">đ169.000</p> */}
                    </div>
                </div>
                <div className="total-section">
                    <p className="total-text">Tổng số tiền:</p>
                    {/* <p className="total-price">đ150.063</p> */}
                </div>
               
            </div>
        </Modal>
    );
}
