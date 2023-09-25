import React from 'react';
import Facebook from '../Assets/images/Footer/facebook.png';
import Twitter from '../Assets/images/Footer/twitter.png';
import Instagram from '../Assets/images/Footer/instagram.png';
import LinkedIn from '../Assets/images/Footer/linkedin.png';
import GitHub from '../Assets/images/Footer/github.png';

class Footer extends React.Component {
  render() {
    const footerStyle = {
      backgroundColor: '#343a40',
      color: 'white',
    };

    const linkStyle = {
      color: 'white',
      textDecoration: 'none',
    };

    const containerStyle = {
      bottom: 0,
      left: 0,
      width: '100%',
      zIndex: 1000, // Adjust the z-index as needed
    };

    return (
      <div style={containerStyle}>
        {/* Remove the container if you want to extend the Footer to full width */}
        {/* <div className="container my-5"> */}
          {/* Footer */}
          <footer className="text-center text-lg-start" style={footerStyle}>
            {/* Grid container */}
            <div className="container p-4 pb-0">
              {/* Section: Links */}
              <section>
                {/*Grid row*/}
                <div className="row">

                  <hr className="w-100 clearfix d-md-none" />

                  {/* Grid column */}
                  <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">
                    <h6 className="text-uppercase mb-4 font-weight-bold">Pages</h6>
                    <p>
                      <a href="/" style={linkStyle}>
                        Home
                      </a>
                    </p>
                    <p>
                      <a href="/About" style={linkStyle}>
                        About
                      </a>
                    </p>
                    <p>
                      <a href="/Contact" style={linkStyle}>
                        Contact
                      </a>
                    </p>
                    <p>
                      <a href="/Dashboard" style={linkStyle}>
                        Dashboard
                      </a>
                    </p>
                  </div>
                  {/* Grid column */}

                  <hr className="w-100 clearfix d-md-none" />

                  {/* Grid column */}
                  <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3 "style={{ Color: 'rgb(255, 255, 255)' }}>
                    <h6 className="text-uppercase mb-4 font-weight-bold">Contact</h6>
                    <p>
                      <i className="fas fa-home mr-3"></i> Coimbatore, Tamil Nadu, India
                    </p>
                    <p>
                      <i className="fas fa-envelope mr-3"></i> xyz@gmail.com
                    </p>
                    <p>
                      <i className="fas fa-phone mr-3"></i> + 766824464120
                    </p>
                    <p>
                      <i className="fas fa-print mr-3"></i> + 0123456789
                    </p>
                  </div>
                  {/* Grid column */}

                  {/* Grid column */}
                  <div className="col-md-3 col-lg-2 col-xl-3 mt-3">
                    <h6 className="text-uppercase mb-4 font-weight-bold">Follow us</h6>

                    
                    <a href='https://www.facebook.com' target='_blank'><img src={Facebook}/></a>
                    <a href='https://www.twitter.com' target='_blank'><img src={Twitter}/></a>
                    <a href='https://www.github.com' target='_blank'><img src={GitHub}/></a>

                  </div>
                </div>
                {/* Grid row */}
              </section>
              {/* Section: Links */}
            </div>
            {/* Grid container */}

            {/* Copyright */}
            <div className="text-center p-3" style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
              © 2023 Copyright:
              <a className="text-white" href="/Home">
                AnimePoll
              </a>
            </div>
            {/* Copyright */}
          </footer>
          {/* Footer */}
        {/* </div> */}
        {/* End of .container */}
      </div>
    );
  }
}

export default Footer;

