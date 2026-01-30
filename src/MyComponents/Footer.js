import React from 'react'
import profileImage from '../dpp.jpeg'

const Footer = () => {
  const footerStyle = {
    backgroundColor: '#f5efe6',
    backdropFilter: 'none',
    borderTop: '1px solid rgba(0, 0, 0, 0.06)',
    padding: '40px 20px',
    marginTop: '50px',
    color: '#222'
  };

  const sectionStyle = {
    marginBottom: '30px'
  };

  const imageStyle = {
    width: '80px',
    height: '80px',
    borderRadius: '50%',
    objectFit: 'cover',
    marginBottom: '15px'
  };

  return (
    <footer style={footerStyle}>
      <div className="container">
        <div className="row">
          {/* Profile Section */}
          <div className="col-md-3" style={sectionStyle}>
            <h5 className="fw-bold mb-3">About Me</h5>
            <img
              src={profileImage}
              alt="Profile"
              style={imageStyle}
            />
            <p>Hi, I'm Niranjan Singh. A passionate web developer creating amazing digital experiences.</p>
          </div>

          {/* Navigation */}
          <div className="col-md-3" style={sectionStyle}>
            <h5 className="fw-bold mb-3">Navigation</h5>
            <ul className="list-unstyled">
              <li><a href="#" className="text-decoration-none text-dark" style={{color: '#222'}}>🏠 Home</a></li>
              <li><a href="#" className="text-decoration-none text-dark" style={{color: '#222'}}>📝 Projects</a></li>
              <li><a href="#" className="text-decoration-none text-dark" style={{color: '#222'}}>💼 Services</a></li>
              <li><a href="#" className="text-decoration-none text-dark" style={{color: '#222'}}>📧 Contact</a></li>
            </ul>
          </div>

          {/* Address */}
          <div className="col-md-3" style={sectionStyle}>
            <h5 className="fw-bold mb-3">Address</h5>
            <p>
              📍 Jodhpur Rajasthan, India<br/>
              📧 niranjansingh74330@gmail.com<br/>
              📱 +91 7339966750<br/>
              🔗 LinkedIn | GitHub | Twitter
            </p>
          </div>

          {/* Quick Links */}
          <div className="col-md-3" style={sectionStyle}>
            <h5 className="fw-bold mb-3">Quick Links</h5>
            <ul className="list-unstyled">
              <li><a href="#" className="text-decoration-none text-dark" style={{color: '#222'}}>Privacy Policy</a></li>
              <li><a href="#" className="text-decoration-none text-dark" style={{color: '#222'}}>Terms & Conditions</a></li>
              <li><a href="#" className="text-decoration-none text-dark" style={{color: '#222'}}>Sitemap</a></li>
              <li><a href="#" className="text-decoration-none text-dark" style={{color: '#222'}}>FAQ</a></li>
            </ul>
          </div>
        </div>

        <hr />

        {/* Copyright */}
        <div className="text-center">
          <p className="mb-0">&copy; 2026 Niranjan Singh. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
