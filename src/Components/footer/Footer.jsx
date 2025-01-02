import React from "react";
import { FaFacebook, FaGoogle, FaInstagram, FaPhone } from "react-icons/fa";
import { FaMapLocation } from "react-icons/fa6";
import { motion } from "framer-motion";
import { UpdateFollower } from "react-mouse-follower";
const Footer = () => {
  return (
    <footer className="bg-primary pt-12 pb-8 text-white">
      <div className="container p-2">
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
        <div className="grid p-2 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          <motion.div 
            initial={{opacity:0,y:100}}
            whileInView={{opacity:1,y:0}}
            transition={{duration:0.6,delay:0.2}}
          
          
          
          className="space-y-6">
            <h1 className="text-3xl font-bold uppercase">Food Delivery</h1>
            <p className="text-sm max-w-[300px]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci
              necessitatibus reprehenderit sunt
            </p>
            <div className="">
              <p className="flex items-center gap-2">
                <FaPhone />
                +91 9879878987
              </p>
              <p className="flex items-center gap-2">
                <FaMapLocation />
                lorem lorem
              </p>
            </div>
          </motion.div>
          <motion.div 
              initial={{opacity:0,y:100}}
              whileInView={{opacity:1,y:0}}
              transition={{duration:0.6,delay:0.4}}
            
            
          
          className="space-y-6">
            <h1 className="text-3xl font-bold">Ouick Links</h1>

            <div className="grid grid-cols-1 sm:grid-cols-2  gap-3">
              <div className="space-y-2">
                <ul>
                  <li>Home</li>
                  <li>about</li>
                  <li>service</li>
                  <li>contact</li>
                </ul>
              </div>

              <div className="space-y-2">
                <ul>
                  <li>Home</li>
                  <li>about</li>
                  <li>service</li>
                  <li>contact</li>
                </ul>
              </div>
            </div>
          </motion.div>

          <motion.div 
              initial={{opacity:0,y:100}}
              whileInView={{opacity:1,y:0}}
              transition={{duration:0.6,delay:0.6}}
            
            
          className="space-y-6">
          <h1 className="text-3xl font-bold">
            Follow
          </h1>
          <div className="flex items-center gap-3 ">
            <FaFacebook className="text-3xl hover:scale-105 duration-300"/>
            <FaInstagram className="text-3xl hover:scale-105 duration-300"/>
            <FaGoogle className="text-3xl hover:scale-105 duration-300"/>
          </div>
          </motion.div>
</div>
          </UpdateFollower>
<p className="text-white text-center mt-6 border-t-2 pt-8">
    @2024 . All Rights Reserved  
</p>


   
      </div>
    </footer>
  );
};

export default Footer;
