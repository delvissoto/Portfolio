import Link from 'next/link'
import React from 'react'
import {Orbitron} from '@next/font/google'




const orbitron = Orbitron({
  subsets:['latin'],
  weight:['400'],
});

const Navbar = () => {
  return (
    <nav className='navbar'>
    <ul className='navbarsubone'>
      <li className={orbitron.className}><Link href='/'>SotoWebDev</Link></li>
      
    </ul>
    <ul className='navbarsub'>
      <li className='navbarsubli'><Link href='/Skills'>Skills</Link></li>
      <li className='navbarsubli'><Link href='/Proyects'>Proyects</Link></li>
      <li className='navbarsubli'><Link href='/Contact'>Contact</Link></li>
      <li className='navbarsubli'><Link href='/Aboutme'>AboutMe</Link></li>

    </ul>
  </nav>
  )
}

export default Navbar