import { Variants, motion } from "framer-motion";

const variant: Variants = {
  hidden: {
    x: "-100vw",
  },
  visible: {
    x: 0,
    transition: {
      duration: 1.6,
    },
  },
};

export interface IGallerySectionProps {
  images: string[];
}

export const GallerySection = (props: IGallerySectionProps) => {
  const { images } = props;
  return (
    <motion.section
      variants={variant}
      animate="visible"
      initial="hidden"
      className="flex w-full flex-wrap"
    >
      {images.map((image, index) => (
        <picture className="w-1/2 md:w-1/4" key={index}>
          <source media="(min-width:1024px)" srcSet={`./desktop/${image}`} />
          <img src={`./mobile/${image}`} alt={`gallery-${index}`} />
        </picture>
      ))}
    </motion.section>
  );
};
