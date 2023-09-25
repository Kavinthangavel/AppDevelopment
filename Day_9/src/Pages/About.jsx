import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import Sidebar from './Sidebar';
import './About.css'

const About = () => {
  return (
    <div>
      <Navbar />
      <div className='main'>
        <Sidebar />
        <div className="about-container mx-auto">
        <h2 className="section-title">About AnimePoll</h2>
          <p className='col-lg-10 mx-auto mb-5'>
            Welcome to AnimePoll! We are committed to providing a secure and convenient platform for polling and voting.
          </p>
          <p className='col-lg-10 mx-auto mb-5'>
            Our system allows you to participate in various polls and elections, making your voice heard in the decision-making process.
            We take data privacy and security seriously, ensuring that your information is safeguarded at all times. Read our <a href='/Privacy'>Privacy Policy</a> for more information.
          </p>
          <section className="commitment-section">
            <h2 className="section-title">Our Commitment</h2>
            <p className="commitment-text">
              At AnimePoll, we are committed to providing a safe, inclusive, and respectful environment for all anime fans.
              We have strict guidelines in place to ensure that discussions remain respectful and enjoyable for everyone.
              Hate speech, harassment, and any form of discrimination are not tolerated.
            </p>
          </section>
          <p className='col-lg-10 mx-auto mb-5'>
            If you have any questions or feedback, please don't hesitate to <a href="/Contact">Contact Us</a> or give us <a href="/Feedback">Feedback</a>.
            Make sure to also read the <a href='/Terms'>Terms and Conditions</a>. We appreciate your trust in our platform and look forward to serving you.
          </p>
          <p className='col-lg-10 mx-auto mb-5'>
            And Thank You for using AnimePoll!
          </p>
        </div>
      </div>
      <Footer />
    </div>
  )
};

export default About;
