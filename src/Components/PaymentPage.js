import React from "react";
import { PaymentHeader, PayAccountUser, PayOrderProcess, PayyMenthod, PayNote } from "../Components/Payment"; 

export default function Payments(){
    return(
        <div className="payment-page">
        <PaymentHeader />
  
        <div className="payment-content">
          <div className="left-side">
            <PayAccountUser />
            <PayOrderProcess />
          </div>
  
          <div className="right-side">
            <PayyMenthod />
            <PayNote />
          </div>
        </div>
      </div>
  
    );
}