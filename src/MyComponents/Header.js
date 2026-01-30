import React from 'react'
import { FaLinkedin, FaInstagram, FaSnapchatGhost, FaWhatsapp } from 'react-icons/fa'
// ...existing code...
export default function header(props) {
  const handleResumeDownload = () => {
    const link = document.createElement('a');
    link.href = '/NiranjanResume.pdf';
    link.download = 'NiranjanResume.pdf';
    link.click();
  };

  const navStyle = {
    background: '#f5efe6',
    backdropFilter: 'none',
    border: '1px solid rgba(0, 0, 0, 0.06)',
    color: '#222'
  };

  const socialBarStyle = {
    background: '#f5efe6',
    padding: '12px 20px',
    borderTop: '1px solid rgba(0, 0, 0, 0.06)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '24px'
  };

  const nameStyle = {
    fontWeight: 600,
    color: '#222',
    marginRight: '16px'
  };

  const socialLinkStyle = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '40px',
    height: '40px',
    borderRadius: '50%',
    background: '#e9e3d8',
    color: '#222',
    textDecoration: 'none',
    fontSize: '20px',
    transition: 'all 0.3s ease',
    cursor: 'pointer'
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg" style={navStyle}>
        <div className="container-fluid">
          <a className="navbar-brand" href="#" style={{color: '#222'}}>{props.title}</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#" style={{color: '#222'}}>Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#" onClick={(e) => { e.preventDefault(); handleResumeDownload(); }} style={{color: '#222', cursor: 'pointer'}}>Resume</a>
              </li>
                <li className="nav-item">
                  <a className="nav-link" href="#about-heading" style={{color: '#222'}}>About Me</a>
                </li>
            </ul>
          </div>
        </div>
      </nav>

      <div style={socialBarStyle}>
        <a href="https://www.linkedin.com/in/niranjan-singh-75ab10241" target="_blank" rel="noopener noreferrer" style={socialLinkStyle} title="LinkedIn" aria-label="LinkedIn">
          <FaLinkedin />
        </a>
        <a href="https://www.instagram.com/niikksaaa._?igsh=MWlnbWJyeWtqdXNuaQ==" target="_blank" rel="noopener noreferrer" style={socialLinkStyle} title="Instagram" aria-label="Instagram">
          <FaInstagram />
        </a>
       
        
        <a href="https://wa.me/7339966750" target="_blank" rel="noopener noreferrer" style={socialLinkStyle} title="WhatsApp" aria-label="WhatsApp">
          <FaWhatsapp />
        </a>
      </div>
    </>
  );
}
// ...existing code...