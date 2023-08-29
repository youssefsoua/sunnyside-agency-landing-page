import { motion, Variants } from "framer-motion";
import {
  FaInstagram,
  FaPinterest,
  FaSquareFacebook,
  FaTwitter,
} from "react-icons/fa6";

const variant: Variants = {
  hidden: {
    y: "100vh",
  },
  visible: {
    y: 0,
    transition: {
      duration: 3,
    },
  },
};

export const Footer = () => {
  return (
    <motion.footer
      variants={variant}
      animate="visible"
      initial="hidden"
      className="flex h-[352px] flex-col items-center bg-footer-cyan p-8 "
    >
      <motion.img
        whileHover={{ scale: 1.1, opacity: 0.8 }}
        src="./logo-footer.svg"
        alt="SunnySide"
        className="mb-4 mt-8 h-8 w-40 cursor-pointer"
      />
      <div className="flex w-[300px] justify-between py-6 text-dark-moderate-cyan">
        <motion.a whileHover={{ scale: 1.1, color: "white" }} href="#About">
          About
        </motion.a>
        <motion.a whileHover={{ scale: 1.1, color: "white" }} href="#Services">
          Services
        </motion.a>
        <motion.a whileHover={{ scale: 1.1, color: "white" }} href="#Projects">
          Projects
        </motion.a>
      </div>
      <div className="flex w-[165px] justify-between py-16 text-dark-desaturated-cyan">
        <a href="#facebook">
          <FaSquareFacebook />
        </a>
        <a href="#instagram">
          <FaInstagram />
        </a>
        <a href="#twitter">
          <FaTwitter />
        </a>
        <a href="#pinterest">
          <FaPinterest />
        </a>
      </div>
    </motion.footer>
  );
};
