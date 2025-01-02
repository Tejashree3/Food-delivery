import React from 'react'
import img1 from "../../assets/images/testimonial-img.png"
import { motion, useInView } from 'framer-motion'
import { UpdateFollower } from 'react-mouse-follower'
const About = () => {
 




  
  return (
<section className='bg-primary font-Karla py-8'>
    <div className='container py-10 grid grid-cols-1 md:grid-cols-2 space-y-5 md:space-y-0 gap-12'>
<div className='flex justify-center items-center'>
    <motion.img
                    initial={{opacity:0,x:-100,rotate:-180}}
                    whileInView={{opacity:1,x:0,rotate:0}}

   
transition={{duration:0.8 ,delay:0.2,ease:"easeInOut"}}

    src={img1} alt="" className='w-[200px] md:w-[350px]'/>
</div>

<div className='flex justify-center items-center space-y-4 lg:max-w-[450px] '>
    <div className='text-center md:text-left'>
   
   
    <UpdateFollower
                  mouseOptions={{
                    backgroundColor: "white",
                    zIndex: 999,
                    followSpeed: 0.5,
                    rotate: -720,
                    scale: 6,
                    mixBlendMode: "difference",
                  }}
                >
    <h1 className='text-3xl lg:text-4xl text-white font-semibold '
>Lorem ipsum dolor sit amet 
 </h1>
 </UpdateFollower>
 <UpdateFollower
                  mouseOptions={{
                    backgroundColor: "white",
                    zIndex: 999,
                    followSpeed: 0.5,
                    rotate: -720,
                    scale: 6,
                    mixBlendMode:"hue"
                  }}
                  >
 <p className='text-xl text-white pt-4 dark:text-white '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id reprehenderit magni error magnam labore assumenda saepe blanditiis architecto tempore dolores illum nostrum odit adipisci, autem nemo suscipit qui ratione dolore!</p>
 <button className='px-4 py-2  mt-5 border-2 border-gray/500 text-white font-normal rounded-sm'>Lorem</button>
 
 
 </UpdateFollower>
 </div>
    </div>
    </div>
</section>
  )
}

export default About