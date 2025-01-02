import React from "react";
import { MdMenu } from "react-icons/md";
import { GiScooter } from "react-icons/gi"; // Import the scooter icon
import { UpdateFollower } from 'react-mouse-follower';
import { motion } from "framer-motion";
import DarkMode from "./DrakMode";
import Settings from "./Setting";
const MenuData = [
  {
    id: 1,
    name: "Home",
    link: "/",
  },
  {
    id: 1,
    name: "About",
    link: "/about",
  },
  {
    id: 1,
    name: "Shop",
    link: "/shop",
  },
  {
    id: 1,
    name: "Blog",
    link: "/blog",
  },
];

const Navbar = () => {

    const navVariants = {
        hidden: { opacity: 0, y: -20 },
        visible: (i) => ({
            opacity: 1,
            y: 0,
            transition: { delay: i * 0.2, duration: 0.5 },
        }),
    };
  return (
    <>
 <div className="dark:bg-slate-800 dark:text-white bg-primary py-4 text-white font-Karla">
            <motion.nav 
                initial="hidden"
                animate="visible"
                className="container flex justify-between items-center "
            >
                <motion.div variants={navVariants} custom={0}>
                    <a href="" className="uppercase text-2xl font-bold">
                        <UpdateFollower
                            mouseOptions={{
                                backgroundColor: 'white',
                                zIndex: 999,
                                followSpeed: 1.5,
                                scale: 5,
                                mixBlendMode: 'difference',
                            }}
                        >
                            Food Delivery
                        </UpdateFollower>
                    </a>
                </motion.div>

                <motion.div variants={navVariants} custom={1} className="hidden md:block">
                    <ul className="flex gap-4 items-center">
                        {MenuData.map((item, index) => (
                            <motion.li key={item.id} variants={navVariants} custom={index + 2}>
                                <UpdateFollower
                                    mouseOptions={{
                                        backgroundColor: 'white',
                                        zIndex: 999,
                                        followSpeed: 1.5,
                                        scale: 5,
                                        mixBlendMode: 'difference',
                                    }}
                                >
                                    <a href={item.link} className="inline-block text-lg uppercase py-2 font-semibold px-4">
                                        {item.name}
                                    </a>
                                </UpdateFollower>
                            </motion.li>
                        ))}
                    </ul>
                </motion.div>

                <motion.div
                    variants={navVariants}
                    custom={MenuData.length + 2}
                    className="hidden md:flex flex-row text-4xl font-bold ps-10 justify-center items-center space-x-6"
                >
                    <UpdateFollower
                        mouseOptions={{
                            backgroundColor: 'white',
                            zIndex: 999,
                            followSpeed: 1.5,
                            scale: 5,
                            mixBlendMode: 'difference',
                        }}
                    >
                        <GiScooter />
                    </UpdateFollower>
                    {/* <DarkMode /> */}
                  
                </motion.div>
                <Settings />
                <motion.div
                    variants={navVariants}
                    custom={MenuData.length + 3}
                    className="md:hidden text-3xl"
                >
                    <MdMenu />
                </motion.div>
            </motion.nav>
        </div>
        </>
    );
};

export default Navbar;