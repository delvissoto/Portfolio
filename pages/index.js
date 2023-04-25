import Head from 'next/head'
import Link from 'next/link'
// import {BsFillMoonStarsFill} from 'react-icons/bs'
import Navbar from '@/components/Navbar'
import Image from 'next/image'
import myimage from '../public/DelvisSoto.JPG'
import cssImage from '../public/css.png'
import htmlImage from '../public/html5_0.png'
import jsImage from '../public/JavaScript-Logo.png'
import reactImage from '../public/react.jpg'
import nextImage from '../public/nextjs.png'
import nodeImage from '../public/nodejs.png'


export default function Home() {
  return (
    <div className='HomeScreen'>
      <Head>
        <title>SotoWebDev</title>
      </Head>
      <Navbar/>
    <main >
      <div className='homeSecOne'>

      <div className='homeSecOneinner'>
        <div>
          <h1>FullStack Developer 👋</h1>
          <h3>Hi There! Im Delvis Soto<br/> I'm a FullStack Web Developer<br/> Based in Fort Riley,Kansas.📍</h3>
          <div className='socialMedia'>
            <a className='socialMediaLinks' href='https://www.linkedin.com/in/delvis-soto-soto/'><img  src='https://www.nicepng.com/png/detail/461-4616944_linkedin-logo-png-linked-in-icon-svg.png' alt='linkedin' width={30}></img></a>
            <a className='socialMediaLinks' href='https://github.com/delvissoto'><img src='https://www.logotypes101.com/logos/612/3BF36CF1857F8854E2C416AC23E2397F/github_logo.png' alt='github' width={30}></img></a>
            
          
          </div>
          <div>
            <p>
              
            </p>
          </div>
        </div>
        <div className='profileimagearea'>
          <Image className='ProfileImage' src={myimage} alt='Delvis Soto Soto' />
        </div>
    
  
    </div>
          <div className='TechStacksDiv'>
            <p className='Stacks'>Tech Stack |</p>
              <Image className='TeckStack' src={cssImage} alt=''/>
              <Image className='TeckStack' src={htmlImage} alt=''/>
              <Image className='TeckStack' src={jsImage} alt=''/>
              <Image className='TeckStack' src={reactImage} alt=''/>
              <Image className='TeckStack' src={nextImage} alt=''/>
              <Image className='TeckStack' src={nodeImage} alt=''/>
          </div>
    </div>
    <div >
      <div>
        <p>About Me</p>
        <h2>A dedicated Full-Stack Web Developer based in Fort Riley, Kansas📍</h2>
        <br/>
      </div>
      <div>
        <h4>Proyects</h4>
      </div>
    </div>
    </main>
    </div>
  )
}
