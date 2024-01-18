import Link from 'next/link'
import React from 'react'
import {Orbitron} from '@next/font/google'




const orbitron = Orbitron({
  subsets:['latin'],
  weight:['400'],
});

const Navbar = () => {
  return (
    <div>
    
    <nav className='navbar'>
  
    <ul className='navbarsub'>
      <li className='navbarsubli'><Link className={orbitron.className } href='/'>SotoWebDev</Link></li>
      <li className='navbarsubli'><Link href='#MySkills'>Skills</Link></li>
      <li className='navbarsubli'><Link href='#MyProyects'>Projects</Link></li>
      <li className='navbarsubli'><Link href='#MyContact'>Contact</Link></li>
      <li className='navbarsubli'><Link href='#MyAboutme'>AboutMe</Link></li>
      <li className='navbarsubli'><Link href='#MyContact'>Resume</Link></li>
      


    </ul>
  </nav>
  </div>
  )
}

export default Navbar