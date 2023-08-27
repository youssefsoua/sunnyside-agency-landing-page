export const GraphicsSection = () => {
  return (
    <section className="flex flex-col sm:flex-row">
      <article className="flex min-h-[600px] w-full flex-col items-center justify-end bg-[url('/mobile/image-graphic-design.jpg')] bg-cover bg-no-repeat px-6 py-8 text-center text-dark-desaturated-cyan sm:w-1/2 xl:bg-[url('/desktop/image-graphic-design.jpg')]">
        <h2 className="font-serif text-3xl">Graphic design</h2>
        <p className="py-8 text-sm sm:text-base md:max-w-[336px]">
          Great design makes you memorable. We deliver artwork that underscores
          your brand message and captures potential clients’ attention.
        </p>
      </article>
      <article className=" flex min-h-[600px] w-full flex-col items-center justify-end bg-[url('/mobile/image-photography.jpg')] bg-cover bg-no-repeat px-6 py-8 text-center text-dark-blue sm:w-1/2 xl:bg-[url('/desktop/image-photography.jpg')]">
        <h2 className="font-serif text-3xl">Photography</h2>
        <p className="py-8 text-sm sm:text-base md:max-w-[336px]">
          Increase your credibility by getting the most stunning, high-quality
          photos that improve your business image.
        </p>
      </article>
    </section>
  );
};
