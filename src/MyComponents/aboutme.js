import React from 'react'
import profileImage from '../main.jpeg'

export default function AboutMe() {
  const container = {
    display: 'flex',
    gap: '40px',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '40px',
    maxWidth: '1100px',
    margin: '0 auto',
    backgroundColor: '#f3ebeb',
    borderRadius: '12px',
    boxShadow: '0 6px 24px rgba(191, 159, 159, 0.06)',
    height: '100vh',
    overflow: 'hidden',
    flexWrap: 'wrap'
  }

  const imgStyle = {
    width: '320px',
    height: '320px',
    objectFit: 'cover',
    borderRadius: '12px',
    boxShadow: '0 10px 30px rgba(0,0,0,0.4)'
  }

  const content = {
    flex: 1,
    minWidth: '260px',
    color: '#222'
  }

  const heading = {
    fontSize: 'clamp(22px, 4vw, 36px)',
    margin: '0 0 12px 0'
  }

  const desc = {
    fontSize: '16px',
    lineHeight: 1.6,
    marginBottom: '18px'
  }

  const skills = [
    'HTML', 'CSS', 'JavaScript', 'React', 'Node.js', 'Bootstrap', 'Responsive Design'
  ]

  const qualifications = [
    'Secondary Education - RBSE, 2019',
    'Senior Secondary Education - RBSE, 2021',
    'Bachelor of Computer Applications - JNVU, 2024',
    'Master of Computer Applications - BTU, 2026 (Pursuing)'
  ]

  const skillStyle = {
    display: 'inline-block',
    background: '#e9e3d8',
    color: '#222',
    padding: '8px 12px',
    borderRadius: '999px',
    marginRight: '8px',
    marginBottom: '8px',
    fontWeight: 600,
    fontSize: '14px'
  }

  const qualificationStyle = {
    display: 'list-item',
    marginLeft: '20px',
    marginBottom: '8px',
    fontSize: '15px',
    color: '#222'
  }

  return (
    <section style={container} aria-labelledby="about-heading">
      <img src={profileImage} alt="Profile" style={imgStyle} />
      <div style={content}>
        <h2 id="about-heading" style={heading}>About Me</h2>
        <p style={desc}>Hi, I'm Niranjan Singh — a passionate web developer focused on building accessible, performant, and responsive web experiences. I enjoy turning ideas into user-friendly interfaces and learning new tools in the front-end ecosystem.</p>

        <div>
          <h3 style={{margin: '0 0 10px 0'}}>Skills</h3>
          <div>
            {skills.map((s) => (
              <span key={s} style={skillStyle}>{s}</span>
            ))}
          </div>
        </div>

        <div style={{marginTop: '20px'}}>
          <h3 style={{margin: '0 0 10px 0'}}>Qualifications</h3>
          <ul style={{margin: 0, padding: 0}}>
            {qualifications.map((q) => (
              <li key={q} style={qualificationStyle}>{q}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
