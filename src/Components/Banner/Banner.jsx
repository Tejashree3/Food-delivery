import React, { useEffect, useState } from "react";
import img1 from "../../assets/images/download-app.png";
import img2 from "../../assets/images/download-app.png";
import img3 from "../../assets/images/download-app.png";
import img4 from "../../assets/images/dish/4.png";
import { FaArrowUp } from "react-icons/fa";
import { UpdateFollower } from "react-mouse-follower";

import { AnimatePresence, delay, easeInOut, motion } from "framer-motion";
const bannerData = [
  {
    id: 1,
    img: img1,
    subtitle: "Lorem ipsum is placeholder text",
    title: "Lorem ipsum is placeholder text 1",
    bgColor: "#66bd2d",
    dish: "Lorem",
  },
  {
    id: 2,
    img: img2,
    subtitle: "Lorem ipsum is placeholder text 2",
    title: "Lorem ipsum is placeholder text",
    bgColor: "#942a20",
    dish: "Lorem",
  },
  {
    id: 3,
    img: img3,
    subtitle: "Lorem ipsum is placeholder text 3",
    title: "Lorem ipsum is placeholder text",
    bgColor: "#ca7207",
    dish: "Lorem",
  },
];

const fadeUp = (delay) => {
  return {
    hidden: {
      y: 100,
      opacity: 0,
      scale: 0.5,
    },
    show: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        delay: delay,
        ease: easeInOut,
      },
    },
    exit: {
      y: 50,
      opacity: 0,
      scale: 0.5,
      transition: {
        duration: 0.2,
        delay: delay,
        ease: easeInOut,
      },
    },
  };
};

const Banner = () => {
  const [active, SetActive] = useState(bannerData[0]);
  const [showArrow, setShowArrow] = useState(false);

  const handleActivedata = (data) => {
    SetActive(data);
  };

  const handleScroll = () => {
    if (window.scrollY > 150) {
      setShowArrow(true);
    } else {
      setShowArrow(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <section className="font-Karla bg-primary text-white overflow-hidden">
        <div className="container grid grid-cols-1 md:grid-cols-2 pt-0 pb-10 min-h-[600px]">
          <div
            className="flex flex-col justify-center 
           xl:max-w-[500px]
          p-2 py-14 md:py-0"
          
          >
            <div className="space-y-4 text-left">
              <AnimatePresence mode="wait">
                <UpdateFollower
                  mouseOptions={{
                    backgroundColor: "white",
                    zIndex: 999,
                    followSpeed: 0.5,
                    rotate: -720,
                    scale: 8,
                    mixBlendMode: "difference",
                  }}
                >
                  <motion.h1
                    key={active.id}
                    initial="hidden"
                    variants={fadeUp(0.2)}
                    animate="show"
                    exit="exit"
                    className="text-5xl lg:text-6xl font-bold font-Karla"
                  >
                    {active.title}
                  </motion.h1>
                </UpdateFollower>
           </AnimatePresence>
           <AnimatePresence mode="wait">

                <motion.p
                 key={active.id}
                 initial="hidden"
                 variants={fadeUp(0.1)}
                 animate="show"
                 exit="exit"
                  className="text-sm leading-loose text-white/80"
                >
                  {active.subtitle}
                </motion.p>
              </AnimatePresence>

              <AnimatePresence mode="wait">
                <UpdateFollower
                  mouseOptions={{
                    backgroundColor: active.bgColor,
                    zIndex: 999,
                    followSpeed: 0.5,
                    rotate: -720,
                    scale: 5,
                    // mixBlendMode: "difference",
                    backgroundElement: (
                      <div>
                        <img src={active.img} alt="" />
                      </div>
                    ),
                  }}
                >
                  <motion.button
                    key={active.id}
                    initial="hidden"
                    variants={fadeUp(0.2)}
                    animate="show"
                    exit="exit"
                    style={{
                      backgroundColor: active.bgColor,
                    }}
                    className="px-4 py-2 inline-block font-normal rounded-sm"
                  >
                    Lorem
                  </motion.button>
                </UpdateFollower>
              </AnimatePresence>

              <div className="!mt-10 flex justify-center items-center gap-4">
                <div className="w-20 h-[2px] bg-white"></div>
                <p className="uppercase text-sm">Lorem ipsum voluptatibus?</p>
                <div className="w-20 h-[2px] bg-white"></div>
              </div>

              <div className="p-2 grid grid-cols-3 gap-10">
                {bannerData.map((item) => {
                  return (

                    <UpdateFollower
                    mouseOptions={{
                        backgroundColor: item.bgColor,
                        zIndex: 999,
                        followSpeed: 0.5,
                        scale: 5,
                        // mixBlendMode: "color",
                        text:"View more",
                        textFontSize:"3px"
                    }}
                >
                    <div
                      key={item.id}
                      onClick={() => handleActivedata(item)}
                      className="grid-cols-2 gap-3 grid place-items-center cursor-pointer"
                    >
                      <div className="">
                        <img src={item.img} className="w-[250px] object-cover" />
                      </div>
                      <div className="space-y-2">
                        <p className="text-base">{item.dish}</p>
                      </div>
                    </div>
                    </UpdateFollower>
                  );
                })}
              </div>
            </div>
          </div>

          <div className="flex flex-col justify-center items-center">
            <AnimatePresence mode="wait">
              <motion.img
                key={active.id}
                initial={{
                  opacity: 0,
                  scale: 0.9,
                  y: 100,
                }}
                animate={{
                  opacity: 1,
                  scale: 1,
                  y: 0,
                }}
                transition={{duration:0.4,delay:0.2}}
                exit={{
                  opacity:0,
                  scale:0.9,
                  y:100,
                  transition:{ duration: 0.2 }

                }}
                src={active.img}
                className="w-[100px] md:w-[250px] xl:w-[250px] object-contain"
              />
            </AnimatePresence>
          </div>

          {showArrow && (
            <div
              className="text-black bg-gray-400 p-2 rounded-md text-2xl font-bold fixed bottom-10 right-10 hover:rotate-[360deg] duration-500 z-[99999] cursor-pointer"
              onClick={scrollToTop}
            >
              <FaArrowUp />
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default Banner;
