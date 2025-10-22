import { useGSAP } from '@gsap/react'
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import AnimatedTitle from './AnimatedTitle.jsx';
import React from 'react'

gsap.registerPlugin(ScrollTrigger)

const About = () => {
    useGSAP(() =>{
        const clipAnimation = gsap.timeline({
            scrollTrigger:{
                trigger: '#clip',
                start: 'center center',
                end: '+=800 center',
                scrub: 1.5,
                pin:true,
                pinSpacing: true,
            }
        })
    clipAnimation.to('.mask-clip-path', {
        width: '100vw',
        height: '100vh',
        borderRadius: 0
    })
})  
    
  return (
    <div id='about' className='min-h-screen w-screen'>
        <div className='relative mb-8 mt-36 flex flex-col items-center gap-5'>
        <h2 className='font-general text-sm uppercase md:text-[10px]'>
          About Me
        </h2>
        <AnimatedTitle
        title="Building <b>T</b>echnology That <br/> Emp<b>o</b>wers Communities"
        containerClass="mt-5 !text-black text-center "
        />
         <div className='about-subtext'>
           <p>I build technology that empowers people, solves real problems, and opens opportunities</p>
           <p>From healthcare to finance and smart systems — creating impact across Africa</p>
         </div>
        </div>
      <div className="h-dvh w-screen" id='clip'>
        <div className='mask-clip-path about-image'>
            <img src="img/about.webp" alt="Background" 
            className='absolute left-0 top-0 size-full object-cover'/>
        </div>
        </div>  
    </div>
  )
}

export default About