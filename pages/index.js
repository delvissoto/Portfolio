import Head from 'next/head'
import Link from 'next/link'
// import {BsFillMoonStarsFill} from 'react-icons/bs'
import Navbar from '@/components/Navbar'
import Aboutme from './Aboutme'
import Contact from './Contact'
import Image from 'next/image'
import usImage from '../public/me&Love.jpg'
import profileImage from '../public/myimage.png'
import cssImage from '../public/css.png'
import htmlImage from '../public/html5_0.png'
import jsImage from '../public/jslogo.png'
import reactImage from '../public/react.jpg'
import reduxImage from '../public/Reduxlogo.png'
import nextImage from '../public/nextjs.png'
import nodeImage from '../public/nodejs-icon.svg'
import pythonImage from 'public/Python.png'
import phpImage from '../public/phpImage.png'
import Proyects from './Proyects'




export default function Home() {
  return (
    <div className='HomeScreen'>
      <Head>
        <title>SotoWebDev</title>
      </Head>
      <Navbar/>
    <main >
      <div className='homeSecOne'>

      <div className='homeSecOneinner' id='MySkills'>
        <div>
          <h1>FullStack Developer 👋</h1>
          <p className='lightgreytext'>Hi There! Im Delvis Soto I&apos;m a FullStack<br/> Web Developer Based in Fort Riley,Kansas.📍</p>
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
          <Image className='ProfileImage' src={profileImage} alt='Delvis Soto Soto' />
        </div>
    
  
    </div>
          <div className='TechStacksDiv' >
            <p className='Stacks'>Tech Stack |</p>
              <Image className='TeckStack' src={cssImage} alt='CSS'/>
              <Image className='TeckStack' src={htmlImage} alt='HTML'/>
              <Image className='TeckStack' src={jsImage} alt='JS'/>
              <Image className='TeckStack' src={reactImage} alt='React '/>
              <Image className='TeckStack' src={reduxImage} alt='Redux'/>
              <Image className='TeckStack' src={nextImage} alt='Next Js '/>
              <Image className='TeckStack' src={nodeImage} alt='Node'/>
              <Image className='TeckStack' src={pythonImage} alt='python'/>
              <Image className='TeckStack' src={phpImage} alt='php'/>
              {/* Add images needed to complete my stack knowledge */}
              <Image className='TechStack'/>
          </div>
    </div>
    <div id='MyAboutme'>
    <Aboutme/>
    </div >
    <div id='MyProyects'>
   <Proyects/>
   </div>
   <div id='MyContact'>
   <Contact/>
   </div>
    </main>
    </div>
  )
}
