import {
  FeatureArticleSection,
  Footer,
  GallerySection,
  GraphicsSection,
  HeroSection,
  Navigation,
  TestimonialSection,
} from "./components";
import { featureArticles, testimonials, images } from "./constants";

const App = () => {
  return (
    <>
      <Navigation />

      <main>
        <HeroSection />

        <FeatureArticleSection featureArticles={featureArticles} />

        <GraphicsSection />

        <TestimonialSection testimonials={testimonials} />

        <GallerySection images={images} />
      </main>

      <Footer />
    </>
  );
};

export default App;
