import React from 'react'
import img1 from "../../assets/images/icons/1.png"
import img2 from "../../assets/images/icons/2.png"
import img3 from "../../assets/images/icons/3.png"
import img4 from "../../assets/images/icons/4.png"
import img5 from "../../assets/images/icons/images.png"
import { delay } from 'framer-motion'
import { UpdateFollower } from 'react-mouse-follower'

const serviceData=[
  {
    id:1,
    title:"SwiftServe",
    icons:img1,
    delay:0.5,
    desc:"  SwiftServe is your trusted partner for on-time food delivery."
  },
  {
    id:2,
    title:"RightOnTime",
    icons:img2,
    delay:0.8,
    desc:" Never worry about late meals again with RightOnTime. "
  },
  {
    id:3,
    title:"QuickBite",
    icons:img5,
    delay:1.1,
    desc:" Hungry? Satisfy your cravings with QuickBite!."
  },
  {
    id:4,
    title:"FreshFeast",
    icons:img4,
    delay:1.3,
    desc:"  Experience the joy of fresh, gourmet meals delivered to your door with FreshFeast."
  },
  {
    id:5,
    title:"QuickBite",
    icons:img5,
    delay:1.5,

    desc:"  Hungry? Satisfy your cravings with QuickBite!"
  },
  {
    id:6,
    title:"SwiftServe",
    icons:img1,
    delay:1.7,

    desc:"  SwiftServe is your trusted partner for on-time food delivery."
  },

]

const Services = () => {
  return (
  <section className='bg-gray-100 font-Karla py-8'>
    <div className='container py-14'>
      <h1 className='text-3xl font-bold text-center pb-10'>Services

      </h1>

   
    <div className='p-2 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3'>
      {serviceData.map((data)=>(
          <UpdateFollower
          mouseOptions={{
              backgroundColor: 'white',
              zIndex: 9999,
              followSpeed: 0.5,
              scale: 6,
              rotate:-720,
              mixBlendMode: 'darken',
              backgroundElement:(
                <div>
                  <img src={data.icons} alt="" />
                </div>
              )
          }}
      >
<div className='shadow-lg rounded-md bg-white flex flex-col justify-center items-center p-5 max-w-[300px] h-[300px] mx-auto'>
<img className='w-[100px] mb-4 rounded-full border-[3px] p-2 border-primary' src={data.icons} alt="" />
            <div className='text-center space-y-2'>
<h1 className='text-xl text-black font-semibold'>{data.title}</h1>
<p className='text-center text-sm text-black/70'>{data.desc}</p>
            </div>
          </div>
        </UpdateFollower>
      ))}
    </div> 
    </div>
  </section>
  )
}

export default Services