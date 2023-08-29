import { Variants, motion } from "framer-motion";

const variant: Variants = {
  hidden: {
    x: "-100vw",
  },
  visible: {
    x: 0,
    transition: {
      duration: 1.4,
    },
  },
};

export interface Testimonial {
  imageSrc: string;
  text: string;
  name: string;
  position: string;
}

export interface ITestimonialSectionProps {
  testimonials: Testimonial[];
}

export const TestimonialSection = (props: ITestimonialSectionProps) => {
  const { testimonials } = props;
  return (
    <motion.section
      variants={variant}
      animate="visible"
      initial="hidden"
      className="py-10 text-center xl:min-h-[776px] xl:p-40"
    >
      <h2 className="pb-9 font-serif text-base font-bold uppercase tracking-[0.25em] text-grayish-blue xl:text-xl">
        Client testimonials
      </h2>
      <section className="flex flex-col xl:flex-row">
        {testimonials.map((testimonial, index) => (
          <article
            className="flex flex-col items-center px-7 py-6 xl:w-1/3 xl:px-2.5"
            key={index}
          >
            <img
              src={testimonial.imageSrc}
              alt={testimonial.name}
              className="my-2 h-[72px] w-[72px] rounded-full"
            />
            <p className="py-11 text-base text-very-dark-grayish-blue xl:text-lg ">
              {testimonial.text}
            </p>
            <p className="py-2 font-serif text-lg font-black text-very-dark-desaturated-blue">
              {testimonial.name}
            </p>
            <p className="py-2 text-sm text-grayish-blue">
              {testimonial.position}
            </p>
          </article>
        ))}
      </section>
    </motion.section>
  );
};
