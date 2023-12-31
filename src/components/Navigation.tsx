import { Variants, motion } from "framer-motion";
import { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";

const variant: Variants = {
  hidden: {
    y: "-100vh",
  },
  visible: {
    y: 0,
    transition: {
      duration: 3,
    },
  },
};

export const Navigation = () => {
  const [isMenuDisplayed, setIsMenuDisplayed] = useState(false);

  const toggleMenu = () => {
    setIsMenuDisplayed(!isMenuDisplayed);
  };

  return (
    <motion.nav
      variants={variant}
      animate="visible"
      initial="hidden"
      className="fixed z-10 flex w-full items-center justify-between bg-navbar-blue px-6 py-8 lg:px-10"
    >
      <a href="/">
        <img src="./logo.svg" alt="SunnySide" className="h-8 w-40" />
      </a>
      <button className="text-white lg:hidden" onClick={toggleMenu}>
        <RxHamburgerMenu />
      </button>
      {isMenuDisplayed && (
        <ul className="absolute left-0 top-16 flex w-full flex-col items-center bg-white py-2 shadow-lg lg:hidden">
          <li className="py-4 text-center">
            <a className="text-very-dark-desaturated-blue" href="#about">
              About
            </a>
          </li>
          <li className="py-4 text-center">
            <a className="text-very-dark-desaturated-blue" href="#services">
              Services
            </a>
          </li>
          <li className="py-4 text-center">
            <a className="text-very-dark-desaturated-blue" href="#projects">
              Projects
            </a>
          </li>

          <li className="w-fit  rounded-full bg-yellow px-8 py-4 font-serif text-sm font-bold uppercase text-very-dark-desaturated-blue">
            <a href="#contact">Contact</a>
          </li>
        </ul>
      )}
      <ul className="hidden w-[500px] flex-row items-center justify-between px-8 text-lg text-white lg:flex">
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#services">Services</a>
        </li>
        <li>
          <a href="#projects">Projects</a>
        </li>
        <motion.li
          whileHover={{
            backgroundColor: "rgb(78 223 255)",
            color: "white",
          }}
          className="cursor-pointer rounded-full bg-white px-8 py-4 font-serif text-sm font-bold uppercase text-very-dark-desaturated-blue"
        >
          <a href="#contact">Contact</a>
        </motion.li>
      </ul>
    </motion.nav>
  );
};
