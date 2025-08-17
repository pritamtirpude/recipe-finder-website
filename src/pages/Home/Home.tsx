import { Button } from '../../components';
import { features } from '../../util/util';

const Home = () => {
  return (
    <div className="py-12 md:py-20 lg:py-24">
      <section>
        <div className="flex flex-col lg:items-center lg:justify-center">
          <h1 className="lg:text-nunito-desktop-preset-one text-nunito-mobile-preset-one md:text-nunito-tablet-preset-one text-neutral-900">
            <span className="after:bg-neutral-orange-500 relative after:absolute after:top-8 after:left-0 after:-z-10 after:h-6 after:w-full after:rounded after:opacity-40 after:content-[''] after:md:top-12 after:md:h-7 after:lg:h-10">
              Healthy
            </span>
            &nbsp; meals, zero fuss
          </h1>
          <p className="text-nunito-sans-preset-one mb-8 max-w-[580px] text-neutral-600 lg:mb-10 lg:text-center">
            Discover eight quick, whole-food recipes that you can cook tonight—no processed junk, no
            guesswork.
          </p>
          <Button label="Start exploring" href="/recipes" styles="px-8 py-4" />
        </div>

        <div className="mt-10 lg:mt-20">
          <div className="absolute left-0 -z-10 size-full bg-[url(/assets/images/pattern-squiggle-1.svg)] bg-contain bg-no-repeat 2xl:top-1/2" />
          <img
            className="hidden rounded-xl md:block lg:block"
            src="/assets/images/image-home-hero-large.webp"
            alt="hero image"
          />
          <img
            className="block rounded-xl md:hidden lg:hidden"
            src="/assets/images/image-home-hero-small.webp"
            alt="hero image"
          />
        </div>
      </section>

      <section className="mt-16 md:mt-20 lg:mt-24">
        <h2 className="text-nunito-mobile-preset-two md:text-nunito-preset-two text-left text-neutral-900 lg:text-center">
          What you'll get
        </h2>
        <div className="mt-12 grid grid-cols-1 gap-6 md:gap-8 lg:grid-cols-3">
          {features.map((feature) => (
            <div key={feature.title}>
              <div className="flex size-14.5 flex-col items-center justify-center rounded-xl bg-white p-2.5 shadow-md">
                <img src={feature.icon} alt={feature.title} />
              </div>
              <h3 className="text-nunito-preset-three mt-6 text-neutral-900">{feature.title}</h3>
              <p className="text-nunito-sans-preset-one mt-3 text-neutral-600">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-16 flex flex-col gap-8 md:mt-20 md:gap-10 lg:mt-24 lg:flex-row lg:items-center lg:gap-12">
        <div>
          <h4 className="md:text-nunito-preset-two text-nunito-mobile-preset-two text-neutral-900">
            Built for real life
          </h4>

          <p className="text-nunito-sans-preset-one mt-5 text-neutral-600">
            Cooking shouldn’t be complicated. These recipes come in under&nbsp;
            <span className="after:md:bg-neutral-orange-500 relative font-bold after:md:absolute after:md:top-3 after:md:left-0 after:md:-z-20 after:md:h-3 after:md:w-full after:md:rounded after:md:content-['']">
              30 minutes
            </span>
            &nbsp; of active time, fit busy schedules, and taste good enough to repeat.
          </p>
          <p className="text-nunito-sans-preset-one mt-5 text-neutral-600">
            Whether you’re new to the kitchen or just need fresh ideas, we’ve got you covered.
          </p>
        </div>

        <div>
          <img
            src="/assets/images/image-home-real-life-large.webp"
            className="hidden rounded-2xl md:block"
            alt="women cutting green vegetables"
          />

          <img
            src="/assets/images/image-home-real-life-small.webp"
            className="rounded-10 block md:hidden"
            alt="women cutting green vegetables"
          />
        </div>
      </section>
    </div>
  );
};

export default Home;
