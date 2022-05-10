import React, { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
//import ReactDOM from "react-dom";
import "./Login.css";
import user_logo from"./user_logo.svg";

function Register() {
  // React States
  const navigate = useNavigate();

  function loginClick(){
    navigate("/")
  }
  const [errorMessages, setErrorMessages] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  // User Login info
  const database = [
    {
      username: "user1",
      password: "pass1"
    },
    {
      username: "user2",
      password: "pass2"
    }
  ];

  const errors = {
    uname: "invalid username",
    pass: "invalid password"
  };

  const handleSubmit = (event) => {
    //Prevent page reload
    Navigate.push("/register");

    var { uname, pass } = document.forms[0];

    // Find user login info
    const userData = database.find((user) => user.username === uname.value);

    // Compare user info
    if (userData) {
      if (userData.password !== pass.value) {
        // Invalid password
        setErrorMessages({ name: "pass", message: errors.pass });
      } else {
        setIsSubmitted(true);
      }
    } else {
      // Username not found
      setErrorMessages({ name: "uname", message: errors.uname });
    }
  };

  // Generate JSX code for error message
  const renderErrorMessage = (name) =>
    name === errorMessages.name && (
      <div className="error">{errorMessages.message}</div>
    );

    const [customerID, setCustomerID] = useState("");
    const [password, setPassword] = useState("");

    function validateForm(){
        return customerID.length > 0 && password.length > 0;
    }

  // JSX code for login form
  const renderForm = (
    <div className="form">
      <div class="imgcontainer">
        <img src={user_logo} class="avatar" alt="Avatar"></img>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="input-container">
          <input type="text" placeholder="Enter Username" name="uname" required
          autoFocus
          onChange={(e) => setCustomerID(e.target.value)} />
          {renderErrorMessage("uname")}
        </div>
        <div className="input-container">
          <input type="password" placeholder="Enter Password" name="pass" required 
          value={password}
          onChange={(e) => setPassword(e.target.value)}/>
          {renderErrorMessage("pass")}
        </div>
        <button className="regbtn" type="submit" onClick={loginClick}disabled={!validateForm()}>Registration</button>
      </form>
    </div>
  );

  return (
    <div className="app">
      <div className="login-form">
        <div className="title">Register an account</div>
        {isSubmitted ? <div>User is successfully logged in</div> : renderForm}
      </div>
    </div>
  );
}


export default Register;