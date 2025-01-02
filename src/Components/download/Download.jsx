import React from "react";
import img from "../../assets/images/download-app.png";
import img1 from "../../assets/images/icons/1.png";
import img2 from "../../assets/images/icons/2.png";
import img3 from "../../assets/images/icons/6.png";
import img6 from "../../assets/images/icons/7.png";
import img7 from "../../assets/images/play_store.png";
import img8 from "../../assets/images/app_store.png";
import { motion } from "framer-motion";
import img5 from "../../assets/images/icons/images.png";
import { UpdateFollower } from "react-mouse-follower";

const Download = () => {
  return (
    <section className="font-Karla py-28">
      <div className="container bg-primary rounded-3xl py-16 grid grid-cols-1 md:grid-cols-2 space-y-5 md:space-y-0 gap-12">
        <div className="flex justify-center items-center space-y-4 lg:max-w-[450px] ">
          <div className="text-center md:text-left">
            <UpdateFollower
              mouseOptions={{
                backgroundColor: "white",
                zIndex: 999,
                followSpeed: 0.5,
                scale: 6,
                mixBlendMode: "difference",
              }}
            >
              <h1 className="text-3xl lg:text-4xl text-white font-semibold">
                Lorem ipsum dolor sit amet
              </h1>
            </UpdateFollower>
            <UpdateFollower
              mouseOptions={{
                backgroundColor: "white",
                zIndex: 999,
                followSpeed: 0.5,
                scale: 6,
                mixBlendMode: "difference",
              }}
            >
              <p className="text-xl text-white pt-4 dark:text-white">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Id
                reprehenderit magni error magnam labore assumenda saepe
              </p>
              <div className="flex justify-start items-center mt-3 flex-col md:flex-row">
                <img src={img7} alt="" className="w-[150px]" />
                <img src={img8} alt="" className="w-[150px]" />
              </div>
            </UpdateFollower>
          </div>
        </div>

        <div className="flex justify-center items-center relative">
          <motion.div
            initial={{ opacity: 0, y: 150 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            whileHover={{
              y: -30,
              transition: { duration: 0.5 },
            }}
            className="md:-mt-[130px] mt-0 p-2"
          >
            <img src={img} alt="" className="w-[250px] " />
          </motion.div>
          <motion.img
            initial={{ opacity: 0, scale: 0, rotate: 0 }}
            whileInView={{ opacity: 1, scale: 1, rotate: 360 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            whileHover={{
              y: -30,
              transition: { duration: 0.1 },
            }}
            src={img1}
            alt=""
            className="absolute w-[70px] top-0 right-10 rounded-full"
          />
          <motion.img
            initial={{ opacity: 0, scale: 0, rotate: 0 }}
            whileInView={{ opacity: 1, scale: 1, rotate: 360 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            whileHover={{
              x: 30,
              transition: { duration: 0.2 },
            }}
            src={img2}
            alt=""
            className="absolute w-[70px] bottom-10 left-12 rounded-full"
          />
          <motion.img
            initial={{ opacity: 0, scale: 0, rotate: 0 }}
            whileInView={{ opacity: 1, scale: 1, rotate: 360 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            whileHover={{
              x: 20,
              transition: { duration: 0.2 },
            }}
            src={img5}
            alt=""
            className="absolute w-[50px] top-50 -right-5 rounded-full"
          />
          <motion.img
            initial={{ opacity: 0, scale: 0, rotate: 0 }}
            whileInView={{ opacity: 1, scale: 1, rotate: 360 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            whileHover={{
              y: 30,
              transition: { duration: 0.2 },
            }}
            src={img3}
            alt=""
            className="absolute w-[50px] bottom-0 right-10 rounded-full"
          />
          <motion.img
            initial={{ opacity: 0, scale: 0, rotate: 0 }}
            whileInView={{ opacity: 1, scale: 1, rotate: 360 }}
            transition={{ duration: 0.5, delay: 1 }}
            whileHover={{
              y: -30,
              transition: { duration: 0.2 },
            }}
            src={img6}
            alt=""
            className="absolute w-[80px] top-0 left-5 rounded-full"
          />
        </div>
      </div>
    </section>
  );
};

export default Download;
