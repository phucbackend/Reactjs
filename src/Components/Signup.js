import React from "react";
import "../Styles/Signup.css";
import { Link } from "react-router-dom";

export default function SignupPage(){
    return(
        <div>
        <form className="wrapper_login" action="/login" method="POST">
            <div className="content_login">
            <h2 className="title">SIGN UP</h2>
            <div className="signup_user">
                <input type="text" placeholder="Phone" style={{ backgroundColor: 'white', width: '400px', height: '30px'}}/>
            </div>
                <p className="content_password"></p> 
                <p style={{textAlign: "left"}}></p>
                <Link to="/homepage"><button>SIGN UP</button></Link> 
            </div>
        </form>
    </div>
    )
}