import Modal from "react-modal"; 
import "../Styles/Bill.css"
export default function OrderBill({  
    isOpen, 
    onRequestClose,
 }){

    return(
        <Modal
        isOpen = {isOpen}
        onRequestClose={onRequestClose}
        contentLabel="Order Bill"
        className="">
        <div>
            <h3 className="hi">Order History</h3>
        </div>
        </Modal>
    ); 
}
