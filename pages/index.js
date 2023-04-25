import Head from 'next/head'
import Link from 'next/link'
// import {BsFillMoonStarsFill} from 'react-icons/bs'
import Navbar from '@/components/Navbar'
import Image from 'next/image'
import myimage from '../public/DelvisSoto.JPG'



export default function Home() {
  return (
    <div className='HomeScreen'>
      <Head>
        <title>SotoWebDev</title>
      </Head>
      <Navbar/>
    <main >
      <div className='homeSecOne'>
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
    <div className='HomeScreentwo'>

    </div>
    </main>
    </div>
  )
}
