import Link from "next/link"

const SmallFooter = () => {
  return (
    <footer className="footersmall">
        <ul className='navbarsubFooter'>
            <li className='navbarsubli'><Link href='#MySkills'>Skills</Link></li>
            <li className='navbarsubli'><Link href='#MyProyects'>Proyects</Link></li>
            <li className='navbarsubli'><Link href='#MyContact'>Contact</Link></li>
            <li className='navbarsubli'><Link href='#MyAboutme'>AboutMe</Link></li>
        </ul>
    </footer>
  )
}

export default SmallFooter