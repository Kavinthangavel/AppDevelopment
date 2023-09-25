import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { logout, selectUser } from '../Redux/UserSlice';
import APoll from '../Assets/images/APoll.png';
import './Navbar.css';

function Navbar() {

  const dispatch = useDispatch();
  const nav = useNavigate();
  const user = useSelector(selectUser); 
  const username = user.username;

  const handleLogout = () => {
    dispatch(logout());
    nav('/Login');
  };

  return (
    <nav className='navbar'>
      <div className='left'>
      <div className='navbar-logo'>
        <a href='/'><img src={APoll}/></a>
      </div>
      <ul className='nav-links'>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/About">About</Link>
        </li>
        <li>
          <Link to="/Faq">FAQ</Link>
        </li>
        <li>
          <Link to="/Terms">Terms and Conditions</Link>
        </li>
        <li>
          <Link to="/Privacy">Privacy Policy</Link>
        </li>
      </ul>
      </div>
      <ul className='right'>
        <li>
        <div className="actions">
        {username ? (
          <>
          <button className='link' onClick={handleLogout}>
          Logout
          </button>
          
          </>
        )
        : (
          <>
            <button className='link' onClick={handleLogout}>
                Login
            </button>
          </>
        )
      }
      </div>
      </li>
      </ul>
    </nav>
  );
};

export default Navbar;
