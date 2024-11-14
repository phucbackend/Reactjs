import React, {useState} from "react";
import "../Styles/Payment.css"
import "../Styles/Main.css"
import Pizza from "../Data/Pizza";
import { Link } from "react-router-dom";

export function PaymentHeader(){
 
    return(
        <div className="hearder">
        <h1>Payment</h1>
      </div> 
    );
}

export function PayAccountUser(){
    return(
      <div className="left">
        <div className="fill-infor">
          <h1 className="title">FILL YOUR INFORMATION</h1>
          <form className="payment-form">
            <input type="text" id="name" name="name" placeholder="Name" style={ { backgroundColor: '#d2cdcd53', width: '600px', height: '35px'}}/><br />
            <input type="text" id="phonenumber" name="phonenumber" placeholder="Phone Number" style={ { backgroundColor: '#d2cdcd53', width: '600px', height: '35px'}} /><br />
            <input type="text" name="address" id="address" placeholder="Address" style ={ { backgroundColor: '#d2cdcd53', width: '600px', height: '35px'}}/><br />
          </form>
        </div>
      </div>
    ); 
}
export function PayOrderProcess(){
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toogleDropDown = () =>{
      setIsMenuOpen(!isMenuOpen)
  } ; 
  return(
    <div className="order-processing">
        <div className="order-title">
          <h1 className="title" style={{marginRight:"10%"}}>ORDER PROCESSING</h1>
          <div className="dropdown">
            <div className="more" onClick={toogleDropDown}>More dishes</div>
            <div id="menu" className= {isMenuOpen ? "show-menu":"hide-menu" }>
              <ul>             
                <Link to="/"><li style={{width:"200px"}}>Add More Pizza</li></Link>  
             </ul>
            </div>
          </div>
        </div>
        <div id="list-order"></div>
      </div>
  ); 
}
export function PayyMenthod(){
  return(
    <div className="payment-methods">
        <h1 className="title1" >PAYMENT METHODS</h1>
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
 export function PayNote(){
    return(
      <div>
        <div className="invoice">
        <h1 className="title1">INVOICE</h1>
        <div className="methods">
          <form className="payment-form">
            <div className="note">
              <input type="text" id="note" name="note" placeholder="Do you want to note anything to the restaurant?"
               style={{ backgroundColor: 'white', width: '520px', height: '35px'}} />
            </div>
          </form>
          <div id="inHTML"></div>
        </div>
      </div>
      </div>
    );
}


