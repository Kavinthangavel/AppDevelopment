import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { login } from '../Redux/UserSlice';
import './Login.css';

import password_icon from '../Assets/images/password_icon.png';

// Add the SVG as a React component
const UserIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" height="1.25em" viewBox="0 0 448 512">
  <path d="M304 128a80 80 0 1 0 -160 0 80 80 0 1 0 160 0zM96 128a128 128 0 1 1 256 0A128 128 0 1 1 96 128zM49.3 464H398.7c-8.9-63.3-63.3-112-129-112H178.3c-65.7 0-120.1 48.7-129 112zM0 482.3C0 383.8 79.8 304 178.3 304h91.4C368.2 304 448 383.8 448 482.3c0 16.4-13.3 29.7-29.7 29.7H29.7C13.3 512 0 498.7 0 482.3z"/></svg>
);
const PassIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" height="1.25em" viewBox="0 0 512 512">
  <path d="M336 352c97.2 0 176-78.8 176-176S433.2 0 336 0S160 78.8 160 176c0 18.7 2.9 36.8 8.3 53.7L7 391c-4.5 4.5-7 10.6-7 17v80c0 13.3 10.7 24 24 24h80c13.3 0 24-10.7 24-24V448h40c13.3 0 24-10.7 24-24V384h40c6.4 0 12.5-2.5 17-7l33.3-33.3c16.9 5.4 35 8.3 53.7 8.3zM376 96a40 40 0 1 1 0 80 40 40 0 1 1 0-80z"/></svg>
);

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});
  const dispatch = useDispatch();
  const nav = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const passwordIsValid = password.length >= 8;

    const validationErrors = {};

    if (!passwordIsValid) {
      validationErrors.password = 'Password must be at least 8 characters long';
    }

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    dispatch(login(username));
    nav('/');
  };

  const routeSignUp = () => {
    nav('/SignUp');
  };

  return (
    <div>
      <div className="lcontainer">
        <div className="lheader">
          <div className="ltext">Login</div>
         
        </div>
        <form className="linputs" onSubmit={handleSubmit}>
        <div className="linput">
        <UserIcon /> {/* Use the SVG component for the user icon */}
            <input type="text" value={username} placeholder='Username' onChange={(e) => setUsername(e.target.value)} name='username' required />
          </div>
          <div className="linput">
          <PassIcon /> 
            <input type="password" value={password} placeholder='Password' onChange={(e) => setPassword(e.target.value)} name='password' required />
          </div>
          {errors.password && <div className="error">{errors.password}</div>}
          <div className="lsubmit-container">
            <button className="lsubmit" type="submit">Login</button>
            <button className="lsubmit lgray" onClick={routeSignUp}>Sign Up</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
