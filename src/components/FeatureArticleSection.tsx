import { Variants, motion } from "framer-motion";

const variant: Variants = {
  hidden: {
    x: "-100vw",
  },
  visible: {
    x: 0,
    transition: {
      duration: 1,
    },
  },
};

export interface FeatureArticle {
  imageSrc: string;
  title: string;
  content: string;
}

export interface IFeatureArticleSectionProps {
  featureArticles: FeatureArticle[];
}

export const FeatureArticleSection = (props: IFeatureArticleSectionProps) => {
  const { featureArticles } = props;
  return (
    <motion.section variants={variant} animate="visible" initial="hidden">
      {featureArticles.map((article, index) => (
        <article
          key={index}
          className={`flex flex-col ${
            index ? "lg:flex-row" : "lg:flex-row-reverse"
          }`}
        >
          <img
            src={article.imageSrc}
            alt={article.title}
            className="w-full lg:w-1/2"
          />
          <section className="px-7 py-16 text-center lg:flex lg:w-1/2 lg:flex-col lg:items-center lg:justify-center lg:text-left">
            <h2 className="font-serif text-3xl font-black text-very-dark-desaturated-blue lg:max-w-[450px] lg:text-[42px] lg:leading-tight">
              {article.title}
            </h2>
            <p className="py-8 text-lg text-very-dark-grayish-blue lg:max-w-[450px]">
              {article.content}
            </p>
            <motion.a
              whileHover={{ scale: 1.1 }}
              className={`font-serif text-base uppercase tracking-widest text-very-dark-desaturated-blue shadow-md lg:ml-[-315px] ${
                index ? "shadow-soft-red" : "shadow-yellow"
              }`}
              href={`#${article.title}`}
            >
              Learn more
            </motion.a>
          </section>
        </article>
      ))}
    </motion.section>
  );
};
