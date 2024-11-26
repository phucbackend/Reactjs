import React, { useState } from "react";
import "../Styles/Login.css";

import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

export default function Login() {
  // const [username, setUsername] = useState("");
  // const [password, setPassword] = useState("");
  // const [errorMessage, setErrorMessage] = useState("");
  // const navigate = useNavigate();

  // const handleSubmit = (e) => {
  //   e.preventDefault(); // Prevent the default form submission behavior

  //   // Check if the entered username and password match any user in the users array
  //   const user = Users.find(
  //     (user) => user.username === username && user.password === password
  //   );

  //   if (user) {
  //     // Login successful
  //     setErrorMessage(""); // Clear any previous error message
  //     alert("Login successful!");
  //     navigate("/");
  //   } else {
  //     // Login failed
  //     alert("Fail");
  //   }
  // };

  return (
    <div className="center">
      <h1>Login</h1>
      <form >
        {/* Username input */}
        <div className="txt_field_username">
          <input 
            type="text"
            required
         
          />
          <span></span>
          <label>Username</label>
        </div>

        {/* Password input */}
        <div className="txt_field">
          <input
            type="password"
            required
           
          />
          <span></span>
             <label>Password</label>
        </div>

     

        {/* Forgot password link */}
        <div className="pass">Forgot Password?</div>

        {/* Submit button */}
        <input type="submit" value="Login" />

        {/* Sign-up link */}
        <div className="signup_link">
          Not a member?
          <Link to="/signuppage">Sign up</Link>  
        </div>
      </form>
    </div>
  );
}
