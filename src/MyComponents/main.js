import React from 'react'
import HeroImage from '../bg2.jpg'

export default function Main() {
  const heroStyle = {
    minHeight: '80vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#fff',
    textAlign: 'center',
    backgroundImage: `linear-gradient(rgba(0,0,0,0.45), rgba(0,0,0,0.45)), url(${HeroImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    padding: '60px 20px'
  }

  const titleStyle = {
    fontSize: 'clamp(28px, 6vw, 64px)',
    fontWeight: 800,
    textShadow: '0 6px 30px rgba(0,0,0,0.6)',
    margin: 0
  }

  const subtitleStyle = {
    fontSize: 'clamp(14px, 2.5vw, 24px)',
    marginTop: '12px',
    textShadow: '0 4px 20px rgba(0,0,0,0.45)'
  }

  return (
    <main style={heroStyle} aria-label="Main hero">
      <div className="hero-content">
        <h1 style={titleStyle}>Hii! I'm Niranjan Singh</h1>
        <p className="hero-subtitle" style={subtitleStyle}>WebDeveloper</p>
      </div>
    </main>
  )
}
