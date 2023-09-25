import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './SignUp.css';

import username_icon from '../Assets/images/username_icon.png';
import email_icon from '../Assets/images/email_icon.png';
import password_icon from '../Assets/images/password_icon.png';
import confirm_password_icon from '../Assets/images/confirm_password_icon.png';

function SignUp() {

  const[username, setUsername] = useState("");
  const[email, setEmail] = useState("");
  const[password, setPassword] = useState("");
  const[confirmPassword, setConfirmPassword] = useState("");
  const[errors, setErrors] = useState({});
  const nav = useNavigate();

  const validatePassword = () => {
    if (password.length < 8) {
      return 'Password must be at least 8 characters long';
    }
    return '';
  };

  const validateEmail = () => {
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    if (!emailRegex.test(email)) {
      return 'Please enter a valid email address';
    }
    return '';
  };


  const handleSubmit = (e) => {
    e.preventDefault();
    
    const emailError = validateEmail();
    const passwordError = validatePassword();
    const validationErrors = {};
    
    if (passwordError) {
      validationErrors.password = passwordError;
    }

    if (emailError) {
      validationErrors.email = emailError;
    }

    if(password!==confirmPassword) {
      validationErrors.confirmPassword = 'Enter the same password';
    }

    if (Object.keys(validationErrors).length === 0) {
      setErrors({});  
      nav('/Login');
      return;
    }
    else {
      setErrors(validationErrors);
    }

  };
  
    const routeLogin = () => {
        nav('/Login')
    }

  return (
    <div className="scontainer">
      <div className="sheader">
        <div className="stext">Sign Up</div>
      
      </div>
      <form className="sinputs" onSubmit={handleSubmit}>
        <div className="sinput">
          <img src={username_icon}/>
          <input type="text" value={username} placeholder='Username' onChange={(e)=>setUsername(e.target.value)} name='username' required/>
        </div>
        <div className="sinput">
          <img src={email_icon}/>
          <input type="email" value={email} placeholder='Email' onChange={(e)=>setEmail(e.target.value)} name='email' required/>
        </div>
        {errors.email && <div className="error">{errors.email}</div>}
        <div className="sinput">
          <img src={password_icon}/>
          <input type="password" value={password} placeholder='Password' onChange={(e)=>setPassword(e.target.value)} name='password' required/>
        </div>
        {errors.password && <div className="error">{errors.password}</div>}
        <div className="sinput">
          <img src={confirm_password_icon}/>
          <input type="password" value={confirmPassword} placeholder='Confirm Password' onChange={(e)=>setConfirmPassword(e.target.value)} name='confirm_password' required/>
        </div>
        {errors.confirm_password && <div className="error">{errors.confirm_password}</div>}
        <div className="ssubmit-container">
          <button className="ssubmit" onSubmit={handleSubmit}>Sign Up</button>
          <button className="ssubmit sgray" onClick={routeLogin}>Login</button>
        </div>
      </form>
    </div>
  );
}

export default SignUp;