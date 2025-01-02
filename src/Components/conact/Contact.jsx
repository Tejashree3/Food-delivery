import React from "react";
import { motion } from "framer-motion";
const Contact = () => {
  return (
    <>
     
      <div  className="dark:bg-black font-Karla dark:text-white bg-slate-100 py-8">
        <div className="container ">
          <div className="grid max-w-6xl grid-cols-1 px-6 mx-auto lg:px-8 md:grid-cols-2 " >
           
           
           
            <motion.div
                 initial={{opacity:0,x:-150}}
                 whileInView={{opacity:1,x:0}}
                 transition={{duration:1,delay:0.4}}
            
            className="py-6 md:py-0 md:px-6" style={{ borderRight: '1px solid gray' }}>
              <h1 className="text-4xl font-bold">Get in touch</h1>
              <p className="pt-2 pb-4">Fill in the form to start a conversation</p>
              <div className="space-y-4">
                <p className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 mr-2 sm:mr-6">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"></path>
                  </svg>
                  <span>Fake address, 9999 City</span>
                </p>
                <p className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 mr-2 sm:mr-6">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path>
                  </svg>
                  <span>123456789</span>
                </p>
                <p className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 mr-2 sm:mr-6">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                  </svg>
                  <span>contact@business.com</span>
                </p>
              </div>
            </motion.div >
            
            
            <motion.form 
            
            initial={{opacity:0,x:150}}
            whileInView={{opacity:1,x:0}}
            transition={{duration:1,delay:0.4}}
            noValidate="" className="flex flex-col py-6 space-y-6 md:py-0 md:px-6">
              <label className="block">
                <span className="mb-3">Full name</span>
                <input type="text" placeholder="Leroy Jenkins" className="block w-full px-3 rounded-md shadow-sm py-3 focus:ring-2 focus:ring-primary focus:outline-none dark:bg-gray-100" />
              </label>
              <label className="block">
                <span className="mb-3">Email address</span>
                <input type="email" placeholder="leroy@jenkins.com" className="focus:ring-2 px-3 focus:ring-primary focus:outline-none dark:bg-gray-100 block w-full rounded-md shadow-sm py-3" />
              </label>
              <label className="block">
                <span className="mb-3">Message</span>
                <textarea rows="3" className="block w-full rounded-md focus:ring-2 px-3 focus:ring-primary focus:outline-none py-3 dark:bg-gray-100"></textarea>
              </label>
              <button  className="px-4 py-2  mt-5 border-2 border-primary text-primary font-normal hover:text-white hover:bg-primary rounded-sm">
                Get Started
              </button>
            </motion.form >
          
          
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
