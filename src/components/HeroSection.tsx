import { Variants, motion } from "framer-motion";

const variant: Variants = {
  hidden: {
    x: "-100vw",
  },
  visible: {
    x: 0,
    transition: {
      duration: 0.8,
    },
  },
};

export const HeroSection = () => {
  return (
    <motion.section
      variants={variant}
      animate="visible"
      initial="hidden"
      className="flex min-h-[540px] flex-col items-center justify-center bg-[url('/mobile/image-header.jpg')] bg-cover bg-center bg-no-repeat text-center md:min-h-[800px] md:justify-start md:bg-[url('/desktop/image-header.jpg')]"
    >
      <h1 className="py-8 font-serif text-[32px] font-black uppercase leading-snug tracking-[0.3em] text-white md:pb-28 md:pt-48 md:text-[52px]">
        We are creatives
      </h1>
      <img src="./icon-arrow-down.svg" alt="arrow-down" className="w-9" />
    </motion.section>
  );
};
