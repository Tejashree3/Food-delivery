import React, { useState, useEffect, useRef } from 'react';
import { motion, useAnimation } from 'framer-motion';
import img1 from "../../assets/images/icons/1.png";
import img2 from "../../assets/images/icons/2.png";
import img3 from "../../assets/images/icons/6.png";
import img6 from "../../assets/images/icons/7.png";
import { UpdateFollower } from 'react-mouse-follower';
const testimonials = [
  {
    img: img1,
    quote: "The ability to capture responses is a game-changer. If a user gets tired of the sign up and leaves, that data is still persisted. Additionally, it's great to select between formats.",
    name: 'Delivery',
  
  },
  {
    img: img2,
    quote: "Having the power to capture user feedback is revolutionary. Even if a participant abandons the sign-up process midway, their valuable input remains intact.",
    name: 'On Time',
  
  },
  {
    img: img3,
    quote: "The functionality to capture responses is a true game-changer. Even if a user becomes fatigued during sign-up and abandons the process, their information remains stored.",
    name: 'Delivery',
   
  },
];

const Slider = () => {
  const [active, setActive] = useState(0);
  const [autorotate, setAutorotate] = useState(true);
  const autorotateTiming = 7000;
  const controls = useAnimation();

  useEffect(() => {
    if (autorotate) {
      const interval = setInterval(() => {
        setActive(prevActive => (prevActive + 1) % testimonials.length);
      }, autorotateTiming);

      return () => clearInterval(interval);
    }
  }, [autorotate]);

  useEffect(() => {
    controls.start({
      opacity: 1,
      scale: 1,
      rotate: 0,
      transition: {
        duration: 0.7,
        ease: "easeInOut"
      }
    });
  }, [active, controls]);

  return (
    <div className="relative font-inter antialiased">
      <main className="relative py-12 flex font-Karla flex-col justify-center bg-gray-100 overflow-hidden">
        <div className="w-full max-w-6xl mx-auto px-4 md:px-6 py-8">
          <div className="flex justify-center">
            <div className="w-full max-w-3xl mx-auto text-center">
              <div className="relative h-40 ">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[480px] h-[480px] pointer-events-none before:absolute before:inset-0 before:bg-gradient-to-b before:from-indigo-500/25 before:via-indigo-500/5 before:via-25% before:to-indigo-500/0 before:to-75% before:rounded-full before:-z-10">
                  <motion.div className="h-60"
                   style={{
                      maskImage: 'linear-gradient(0deg, transparent, var(--primary-color) 20%, var(--primary-color) 100%)'
                    }}

                  >
                    {testimonials.map((testimonial, index) => (
                      active === index && (
                        <div
                        key={active} 

                        animate={controls}
                        initial={{ opacity: 0, scale: 0.5, rotate: -60 }}
                          className="absolute inset-0 -z-10 testimonial-slide"
                          style={{
                            transition: 'opacity 0.7s cubic-bezier(0.68,-0.3,0.32,1), transform 0.7s cubic-bezier(0.68,-0.3,0.32,1)',
                            opacity: active === index ? 1 : 0,
                            transform: active === index ? 'rotate(0)' : 'rotate(-60deg)'
                            

                          }}
                          
                        >
                          <motion.img
                            className="relative top-10 left-[190px] -translate-x-1/2 rounded-full"
                            width="100"
                            height="100"
                            src={testimonials[active].img}
                            
                            alt={testimonials[active].name}
                            initial={{ opacity: 0, scale: 0.5, rotate: -60 }}
                            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                            transition={{duration:0.6 ,delay:0.5}}
                            animate={controls}
                          />
                        </div>
                      )
                    ))}
                  </motion.div>
                </div>
              </div>
              <div className="mb-9">
              <UpdateFollower
                  mouseOptions={{
                    backgroundColor: "white",
                    zIndex: 999,
                    followSpeed: 0.5,
                    rotate: -720,
                    scale: 5,
                    mixBlendMode: "difference",
                  
                  }}
                >
                <motion.div
                  className="relative flex flex-col pt-6 transition-all duration-150 delay-300 ease-in-out"
                  key={active} // Key to trigger re-render on active change
                  initial={{ opacity: 0, translateX: -4 }}
                  animate={{ opacity: 1, translateX: 0 }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                >
                  {testimonials.map((testimonial, index) => (
                    active === index && (
                      <div
                        key={index}
                        className="text-xl font-bold text-slate-800 before:content-['\201C'] after:content-['\201D']"
                        style={{
                          transition: 'opacity 0.5s ease-in-out, transform 0.5s ease-in-out',
                          opacity: active === index ? 1 : 0,
                          transform: active === index ? 'translateX(0)' : 'translateX(-4px)'
                        }}
                      >
                        {testimonial.quote}
                      </div>
                    )
                  ))}
                </motion.div>
                </UpdateFollower>
              </div>

              <UpdateFollower
                  mouseOptions={{
                    backgroundColor: "white",
                    zIndex: 999,
                    followSpeed: 0.5,
                    rotate: -720,
                    scale: 5,
                    mixBlendMode: "difference",
                  
                  }}
                >
              <div className="flex flex-wrap justify-center -m-1.5">
                {testimonials.map((testimonial, index) => (
                  <button
                    key={index}
                    className={`inline-flex justify-center whitespace-nowrap 
                        rounded-full px-3 py-1.5 m-1.5 text-md shadow-sm
                         focus-visible:outline-none
                          focus-visible:ring transition-colors duration-150 ${active === index ? 'bg-primary text-white shadow-indigo-950/10' : 'bg-white hover:bg-indigo-100 text-slate-900'}`}
                    onClick={() => {
                      setActive(index);
                      setAutorotate(false);
                    }}
                  >
                    <span>{testimonial.name}</span>
                    <span className={active === index ? 'text-primary' : 'text-slate-300'}>-</span>
                 
                  </button>
                ))}
              </div>
              </UpdateFollower>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Slider;
