import React from 'react';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import Footer from './Footer';
import './Feedback.css';

class Feedback extends React.Component {
  handleSubmit = (e) => {
    e.preventDefault(); // Prevent the default form submission behavior
    // You can add your form submission logic here, such as sending data to a server.
    // For now, let's just display a message.
    alert('Form submitted!'); // You can replace this with your actual submission logic
  };

  render() {
    return (
      <>
        <Navbar />
        <div className='main'>
          <Sidebar/>
        <section className="container-fluid feedback-container">
          <div className="row">
            <div className="col-md-3">
              <div className="position-fixed"> {/* Add position-fixed class */}
                {/* <Sidebar /> */}
              </div>
            </div>
            <div className="col-md-9 offset-md-2  "> {/* Add offset-md-3 class */}
              <section className="mb-4">
                <h2 className="h1-responsive text-primary fw-bold text-center my-4">Feedback</h2>
                <p className="text-center w-responsive mx-auto mb-5">
                  Do you have any feedback? What could we improve upon?
                </p>
                <form id="contact-form" name="contact-form" onSubmit={this.handleSubmit}>
                  {/* <div className="row">
                    <div className="col-md-6">
                    <div className="md-form mb-0">
                    <label htmlFor="name" className="">
                          Your name
                          </label>
                          <input type="text" id="name" name="name" className="form-control" />
                      </div>
                    </div>
                    <div className="col-md-6">
                    <div className="md-form mb-0">
                    <label htmlFor="email" className="">
                    Your email
                    </label>
                    <input type="text" id="email" name="email" className="form-control" />
                      </div>
                      </div>
                      </div>
                      <div className="row">
                      <div className="col-md-12">
                      <div className="md-form mb-0">
                      <label htmlFor="subject" className="">
                          Subject
                        </label>
                        <input type="text" id="subject" name="subject" className="form-control" />
                        </div>
                        </div>
                      </div> */}
                  <div className="row">
                    {/* <div className="col-md-6 d-flex align-items-center justify-content-center">
                      <div className="md-form">
                      <label htmlFor="message">Your feedback</label>
                      <textarea type="text" id="message" name="message" rows="3" className="form-control md-textarea"></textarea>
                      </div>
                    </div> */}
                    <div class="form-outline mb-4">
                        <label class="form-label" for="form4Example6">Your feedback</label>
                        <textarea class="form-control" id="form4Example6" rows="4">
                        </textarea>
                    </div>
                  </div>
                  <div className="text-center text-md-left">
                    <button className="btn btn-primary mt-4 mb-4" type="submit">
                      Send
                    </button>
                  </div>
                  <div className="status"></div>
                </form>
              </section>
            </div>
          </div>
        </section>
        </div>
        <Footer />
      </>
    );
  }
}

export default Feedback;
