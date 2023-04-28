import React from 'react'

import Image from 'next/image'
import usImage from '../public/me&Love.jpg'
import girlsImage from '../public/germanhusky.jpg'


const Aboutme = () => {
  return (
    <div className='AboutMe' >
      
      <Image className='famillyImage oneimg' src={usImage}/>
      <Image className='famillyImage twoimg' src={girlsImage}/>
     
      <div className='aboutmearea'>
        <h1>About Me</h1>
        <p className='lightgreytext'>Hi there! My name is Delvis Soto, and I&apos;m a firefighter in the US Army. I&apos;ve dedicated my career to helping others and making a positive impact in my community. When I&apos;m not on duty, I love spending time with my family and my two beloved dogs.Overall, I&apos;m passionate about both my career as a firefighter and my work as a web developer. I believe that my diverse skill set and dedication to excellence make me a valuable asset to any team.</p>
        <br/>
        </div>
      </div>
     
  )
}

export default Aboutme