import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import Sidebar from './Sidebar';
import './Privacy.css'; // Import your CSS file

const PrivacyPolicy = () => {
  return (
    <div>
      <Navbar />
      <div className='main'>
        <Sidebar />
        <div className="privacy-policy-container mx-auto">
          <h1 className='section-title'>Privacy Policy</h1>
          <p className='col-lg-10 mx-auto mb-5'>
            Welcome to AnimePoll! Your privacy is important to us, and we are committed to protecting your personal information.
          </p>
          <section className="privacy-policy-section">
            <h2 className="section-title">Information We Collect</h2>
            <p className="section-text">
              At AnimePoll, we collect certain information to provide you with the best possible experience on our platform.
              This information may include (but is not limited to) your name, email address, and preferences.
            </p>
          </section>
          <section className="privacy-policy-section">
            <h2 className="section-title">How We Use Your Information</h2>
            <p className="section-text">
              We use the information we collect to improve our services, personalize your experience, and ensure the security of your data.
              We do not share your information with third parties without your consent unless required by law.
            </p>
          </section>
          <section className="privacy-policy-section">
            <h2 className="section-title">Your Choices</h2>
            <p className="section-text">
              You have the right to review, update, or delete your personal information at any time.
              We also provide options for you to manage your communication preferences.
            </p>
          </section>
          <section className="privacy-policy-section">
            <h2 className="section-title">Contact Us</h2>
            <p className="section-text">
              If you have any questions or concerns about our Privacy Policy, please don't hesitate to <a href="/Contact">Contact Us</a>.
            </p>
          </section>
          {/* Add more sections as needed */}
        </div>
      </div>
      <Footer />
    </div>
  )
};

export default PrivacyPolicy;
