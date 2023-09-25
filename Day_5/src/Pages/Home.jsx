import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import Sidebar from './Sidebar';
import './Home.css';
import { Button } from 'antd';
import { Link } from 'react-router-dom';
import logoImage from '../Assets/images/APoll.png';

const Home = () => {
  return (
    <>
      <Navbar />
      <div className='main'>
        <Sidebar />
        <div className='title'>
        <img src={logoImage} alt="AnimePoll Logo" className="logo" />
          
          <p className='summary'>
          AnimePoll is a comprehensive and user-friendly online
           polling application designed exclusively for anime 
           enthusiasts and fans. It provides a platform for creating, 
           conducting, and analyzing polls and surveys related to anime content, characters, and more. Whether you're an avid anime viewer, a content creator, or part of an anime community, AnimePoll is your go-to tool for engaging with the vibrant world of anime in exciting new ways.
    
          </p>
          <p>Most anime covers adult themes that will go over 
          your child's head. That isn't bad, it just means that your child won't necessarily understand everything they see, and they may get bored.</p>
          <Link to="/AnimeVoting"> {/* Add your login route */}
            <Button className='new' type="primary" size="large" style={{ marginTop: '20px' }}>
              Get Started
            </Button>
          </Link>
        </div>
        <div className='bg'></div>
      </div>
    
      <Footer />
    </>
  );
};

export default Home;
