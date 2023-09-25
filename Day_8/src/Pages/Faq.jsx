import React from 'react';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import Footer from './Footer';
import './Faq.css';

const Faq = () => {
  return (
    <>
      <Navbar />
      <div className='main'>
        <Sidebar/>
      <section className='faq-container'>
        <h3 className="text-center mt-3 mb-3 pb-2 text-primary fw-bold">FAQ</h3>
        <p className="text-center mb-5">
          Find the answers to the most frequently asked questions below
        </p>

        <div className="container">
          <div className="row">
            <div className="col-md-12 col-lg-5 mb-4 mx-auto">
              <div className="mb-3 text-primary"><i className="far fa-paper-plane text-primary pe-2"></i>What is AnimePoll</div>
              <p><strong><u>AnimePoll</u></strong> is a dynamic online platform designed for Anime enthusiasts and consumers to voice their opinions and preferences in the ever-evolving world of Animes. Our website empowers users to engage in exciting polls and surveys related to anime, allowing them to express their views on various topics and trends.</p>
            </div>

            <div className="col-md-12 col-lg-5  mb-4 mx-auto">
              <div className="mb-3 text-primary"><i className="fas fa-pen-alt text-primary pe-2"></i>Do you have a newsletter?</div>
              <p><strong><u>No</u></strong> We do not have a Newsletter at the moment but there are plans for one!</p>
            </div>

            <div className="col-md-12 col-lg-5 mb-4 mx-auto">
              <div className="mb-3 text-primary"><i className="fas fa-user text-primary pe-2"></i> How can i contact you?</div>
              <p>The best way to contact us is by visiting our <strong><u>Contact Page!</u></strong></p>
            </div>

            <div className="col-md-12 col-lg-5 mb-4 mx-auto">
              <div className="mb-3 text-primary"><i className="fas fa-rocket text-primary pe-2"></i> Is AnimePoll Free?</div>
              <p><strong><u>Yes!</u></strong> AnimePoll is completely free! We do not monetize AnimePoll as it does not align with our principles.</p>
            </div>

          </div>
        </div>
      </section>
      </div>
      <Footer />
    </>
  );
};

export default Faq;
