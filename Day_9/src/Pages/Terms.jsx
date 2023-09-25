import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import Sidebar from './Sidebar';
import './Terms.css'; // Import your CSS file

const TermsAndConditions = () => {
  return (
    <div>
      <Navbar />
      <div className='main'>
        <Sidebar />
        <div className="terms-and-conditions-container mx-auto">
          <h1 className="section-title">Terms and Conditions</h1>
          <p className='col-lg-10 mx-auto mb-5'>
            Welcome to AnimePoll! These terms and conditions govern your use of our platform. By using AnimePoll, you agree to comply with these terms.
          </p>
          <section className="terms-and-conditions-section">
            <h2 className="section-title">User Responsibilities</h2>
            <p className="section-text">
              As a user of AnimePoll, you are responsible for following our guidelines, respecting the rights of others, and using the platform in a lawful manner.
            </p>
          </section>
          <section className="terms-and-conditions-section">
            <h2 className="section-title">Intellectual Property</h2>
            <p className="section-text">
              All content on AnimePoll, including text, images, and logos, is protected by copyright and other intellectual property laws.
            </p>
          </section>
          <section className="terms-and-conditions-section">
            <h2 className="section-title">Termination of Account</h2>
            <p className="section-text">
              AnimePoll reserves the right to terminate or suspend user accounts that violate these terms and conditions.
            </p>
          </section>
          <section className="terms-and-conditions-section">
            <h2 className="section-title">Contact Us</h2>
            <p className="section-text">
              If you have any questions or concerns about our Terms and Conditions, please don't hesitate to <a href="/Contact">Contact Us</a>.
            </p>
          </section>
          {/* Add more sections as needed */}
        </div>
      </div>
      <Footer />
    </div>
  )
};

export default TermsAndConditions;
