export interface IGallerySectionProps {
  images: string[];
}

export const GallerySection = (props: IGallerySectionProps) => {
  const { images } = props;
  return (
    <section className="flex w-full flex-wrap">
      {images.map((image, index) => (
        <picture className="w-1/2 md:w-1/4" key={index}>
          <source media="(min-width:1024px)" srcSet={`./desktop/${image}`} />
          <img src={`./mobile/${image}`} alt={`gallery-${index}`} />
        </picture>
      ))}
    </section>
  );
};
