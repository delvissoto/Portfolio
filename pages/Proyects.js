import React from 'react'
import Image from 'next/image'
import myWebSiteOne from '../public/websiteDesktop.png'
import shibgame from '../public/shibgame.png'


const Proyects = () => {
  return (
    <div className='proyectsArea'>
       <h1 className='proyect'>PORTFOLIO</h1>
    <div className='proyectssections'>
     <div className='portfolioSubDiv'>
        <Image className='portfolioImage' src={myWebSiteOne}/>
        
        <div className='portfoliotext'>
          <h3>ChitChat</h3>
          <p  className='lightgreytext'>lorem ipsumn Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facilis sint eum vero numquam cum enim sequi id mollitia et, inventore nisi quos natus officiis dolorem facere optio repudiandae atque laudantium.</p>
          <a className='lenguageused'>Next JS</a> <a className='lenguageused'>Postgresql</a> <br/>
        <a href='https://github.com/delvissoto/chitchat' className='codeDemo'>Code </a> <a className='codeDemo'>Live Demo</a>
        </div>
        
     </div>


     <div className='portfolioSubDiv'>
        
        
        <div className='portfoliotext'>
          <h3>Gaming Social</h3>
          <p  className='lightgreytext'>lorem ipsumn Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facilis sint eum vero numquam cum enim sequi id mollitia et, inventore nisi quos natus officiis dolorem facere optio repudiandae atque laudantium.</p>
          <a className='lenguageused'>React</a> <a className='lenguageused'>CSS</a> <br/>
        <a href='https://github.com/delvissoto/gaming_social' className='codeDemo'>Code </a> <a className='codeDemo'>Live Demo</a>
        </div>
        <Image className='portfolioImage' src={myWebSiteOne}/>
        
     </div>
     <div className='portfolioSubDiv'>
        <Image className='portfolioImage' src={myWebSiteOne}/>
        
        <div className='portfoliotext'>
          <h3>lore ipsumn</h3>
          <p  className='lightgreytext'>lorem ipsumn Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facilis sint eum vero numquam cum enim sequi id mollitia et, inventore nisi quos natus officiis dolorem facere optio repudiandae atque laudantium.</p>
          <a className='lenguageused'>React</a> <a className='lenguageused'>SCSS</a> <br/>
        <a className='codeDemo'>Code </a> <a className='codeDemo'>Live Demo</a>
        </div>
        
     </div>
     <div className='portfolioSubDiv'>
        
        
        <div className='portfoliotext'>
          <h3>lore ipsumn</h3>
          <p  className='lightgreytext'>lorem ipsumn Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facilis sint eum vero numquam cum enim sequi id mollitia et, inventore nisi quos natus officiis dolorem facere optio repudiandae atque laudantium.</p>
          <a className='lenguageused'>React</a> <a className='lenguageused'>SCSS</a> <br/>
        <a className='codeDemo'>Code </a> <a className='codeDemo'>Live Demo</a>
        </div>
        <Image className='portfolioImage' src={myWebSiteOne}/>
        
     </div>
     <div className='portfolioSubDiv'>
        <Image className='portfolioImage' src={myWebSiteOne}/>
        
        <div className='portfoliotext'>
          <h3>lore ipsumn</h3>
          <p  className='lightgreytext'>lorem ipsumn Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facilis sint eum vero numquam cum enim sequi id mollitia et, inventore nisi quos natus officiis dolorem facere optio repudiandae atque laudantium.</p>
          <a className='lenguageused'>React</a> <a className='lenguageused'>SCSS</a> <br/>
        <a className='codeDemo'>Code </a> <a className='codeDemo'>Live Demo</a>
        </div>
        
     </div>
     <div className='portfolioSubDiv'>
       
        
        <div className='portfoliotext'>
          <h3>Whack a Shib</h3>
          <p  className='lightgreytext'>This is just a game that is being made with vanillaJs, CSS and HTML here you can hit Shib dogs in a rocker and try to get the do better every time you played it. </p>
          <a className='lenguageused'>JavaScript</a> <a className='lenguageused'>CSS</a><a className='lenguageused'>HTML</a> <br/>
        <a href='https://github.com/delvissoto/Whack-a-Shib' className='codeDemo'>Code </a> <a href='https://whack-a-shib.vercel.app/' className='codeDemo'>Live Demo</a>
        </div>
        <Image className='portfolioImage' src={shibgame}/>
        
     </div>
    </div>
    </div>
  )
}

export default Proyects