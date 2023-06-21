import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Contact = () => {
  return (
  <footer className='footer'>
    
    <ul className='ContactUl'>
      <h3>Contact me:</h3>
        <li><a href='mailto:delvissoto99@icloud.com'>delvissoto99@icloud.com</a></li>
          <li><a href='(302)567-9707'>(302)567-9707</a></li>
    </ul>
    <ul className='navbarsubFooter'>
      <li className='navbarsubli'><Link href='#MySkills'>Skills</Link></li>
      <li className='navbarsubli'><Link href='#MyProyects'>Proyects</Link></li>
      <li className='navbarsubli'><Link href='#MyContact'>Contact</Link></li>
      <li className='navbarsubli'><Link href='#MyAboutme'>AboutMe</Link></li>

    </ul>
    
    
    
    
  </footer>
  )
}

export default Contact