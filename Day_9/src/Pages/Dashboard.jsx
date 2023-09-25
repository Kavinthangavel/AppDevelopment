import React, { useEffect } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import Sidebar from './Sidebar';
import './Dashboard.css';

function Dashboard() {
  useEffect(() => {
    // Add animations using Animate.css classes
    const elementsToAnimate = document.querySelectorAll('.animated');
    elementsToAnimate.forEach((element) => {
      element.classList.add('animate__animated', 'animate__fadeInUp');
    });
  }, []);

  return (
    <div>
      <Navbar />
      <div className='main'>
        <Sidebar />
        <div className="dashboard-container">
          <h1 className='text-center text-primary mt-3 mb-5 animated'>Dashboard</h1>
          <div className="polls1">
            <div className='d1 animated'>
              <h2>No. of Animes</h2>
              <h3>3</h3>
            </div>
            <div className='d2 animated'>
              <h2>No. of Characters</h2>
              <h3>10</h3>
            </div>
          </div>
          <div className="polls2">
            <div className='d3 animated'>
              <h2>Votes Tallied</h2>
              <h3>34</h3>
            </div>
            <div className='d4 animated'>
              <h2>Vote Ratio</h2>
              <h3>90%</h3>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Dashboard;
