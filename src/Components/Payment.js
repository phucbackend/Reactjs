import React from "react";
import "../Styles/Payment.css"
import "../Styles/Main.css"


 function PaymentHeader(){
 
    return(
        <div className="hearder">
        <h1>Payment</h1>
      </div> 
    );
}

 function PayAccountUser(){
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

 function PayyMenthod(){
  return(
    <div className="payment-methods">

      <h1 className="title-name" >PAYMENT METHODS</h1>
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
function PayNote(){
    return(
      <div>
        <div className="invoice">
        <h1 className="title-name">COMMENT</h1>
        <div className="methods">
          <form className="payment-form">
            <div className="note">
              <input type="text" id="note" name="note" placeholder="Do you want to note anything to the restaurant?"
               style={{ backgroundColor: 'white', width: '550px', height: '35px'}} />
            </div>
          </form>
          <div id="inHTML"></div>
        </div>
      </div>
      </div>
    );
}


export default function Payment() {
  return(
    <div className="container">
      <PaymentHeader /><PayAccountUser /><PayyMenthod /><PayNote />
      </div>
  );
};

