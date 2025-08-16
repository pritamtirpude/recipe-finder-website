const About = () => {
  return (
    <div className="py-12 md:py-20 lg:py-24">
      <section className="grid grid-cols-1 items-start gap-10 md:gap-16 lg:grid-cols-2 lg:items-center lg:max-2xl:grid-cols-1 lg:max-2xl:gap-16">
        <div>
          <div className="bg-neutral-orange-500 w-[120px] rounded-md px-1.5 py-0.5">
            <span className="text-nunito-preset-five text-neutral-900">Our mission</span>
          </div>

          <h1 className="text-nunito-mobile-preset-two md:text-nunito-preset-two mt-6 text-neutral-900">
            Help more people cook nourishing meals, more often.
          </h1>

          <p className="text-nunito-sans-preset-one mt-6 text-neutral-600">
            Healthy Recipe Finder was created to prove that healthy eating can be convenient,
            affordable, and genuinely delicious.
          </p>

          <p className="text-nunito-sans-preset-one mt-4 text-neutral-600">
            We showcase quick, whole-food dishes that anyone can master—no fancy equipment, no
            ultra-processed shortcuts—just honest ingredients and straightforward steps.
          </p>
        </div>

        <div>
          <img
            src="/assets/images/image-about-our-mission-large.webp"
            className="hidden rounded-xl md:block"
            alt="A women chopping carrots"
          />

          <img
            src="/assets/images/image-about-our-mission-small.webp"
            className="block rounded-xl md:hidden"
            alt="A women chopping carrots"
          />
        </div>
      </section>

      <section className="mt-12 grid grid-cols-1 gap-10 md:mt-20 lg:mt-24 lg:grid-cols-2 lg:gap-16 lg:max-2xl:grid-cols-1">
        <div>
          <h2 className="md:text-nunito-preset-two text-nunito-mobile-preset-two text-neutral-900">
            Why we exist
          </h2>
        </div>

        <div className="flex flex-col gap-12">
          <div className="flex gap-5">
            <img
              className="size-8"
              src="/assets/images/icon-bullet-point.svg"
              alt="bullet point icon"
            />

            <div>
              <span className="text-nunito-preset-four text-neutral-600">
                Cut through the noise.
              </span>

              <p className="text-nunito-sans-preset-one mt-3 text-neutral-600">
                The internet is bursting with recipes, yet most busy cooks still default to
                take-away or packaged foods. We curate a tight collection of fool-proof dishes so
                you can skip the scrolling and start cooking.
              </p>
            </div>
          </div>

          <div className="flex gap-5">
            <img
              className="size-8"
              src="/assets/images/icon-bullet-point.svg"
              alt="bullet point icon"
            />

            <div>
              <span className="text-nunito-preset-four text-neutral-600">
                Empower home kitchens.
              </span>

              <p className="text-nunito-sans-preset-one mt-3 text-neutral-600">
                When you control what goes into your meals, you control how you feel. Every recipe
                is built around unrefined ingredients and ready in about half an hour of active
                prep.
              </p>
            </div>
          </div>

          <div className="flex gap-5">
            <img
              className="size-8"
              src="/assets/images/icon-bullet-point.svg"
              alt="bullet point icon"
            />

            <div>
              <span className="text-nunito-preset-four text-neutral-600">
                Make healthy look good.
              </span>

              <p className="text-nunito-sans-preset-one mt-3 text-neutral-600">
                High-resolution imagery shows you exactly what success looks like—because we eat
                with our eyes first, and confidence matters.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mt-12 grid grid-cols-1 gap-10 md:mt-20 lg:mt-24 lg:grid-cols-2 lg:gap-16 lg:max-2xl:grid-cols-1">
        <div>
          <h3 className="md:text-nunito-preset-two text-nunito-mobile-preset-two text-neutral-900">
            Our food philosophy
          </h3>
        </div>

        <div className="flex flex-col gap-12">
          <div className="flex gap-5">
            <img
              className="size-8"
              src="/assets/images/icon-bullet-point.svg"
              alt="bullet point icon"
            />

            <div>
              <span className="text-nunito-preset-four text-neutral-600">
                Whole ingredients first.
              </span>

              <p className="text-nunito-sans-preset-one mt-3 text-neutral-600">
                Fresh produce, grains, legumes, herbs, and quality fats form the backbone of every
                recipe.
              </p>
            </div>
          </div>

          <div className="flex gap-5">
            <img
              className="size-8"
              src="/assets/images/icon-bullet-point.svg"
              alt="bullet point icon"
            />

            <div>
              <span className="text-nunito-preset-four text-neutral-600">
                Flavor without compromise.
              </span>

              <p className="text-nunito-sans-preset-one mt-3 text-neutral-600">
                Spices, citrus, and natural sweetness replace excess salt, sugar, and additives.
              </p>
            </div>
          </div>

          <div className="flex gap-5">
            <img
              className="size-8"
              src="/assets/images/icon-bullet-point.svg"
              alt="bullet point icon"
            />

            <div>
              <span className="text-nunito-preset-four text-neutral-600">Respect for time.</span>

              <p className="text-nunito-sans-preset-one mt-3 text-neutral-600">
                Weeknight meals should slot into real schedules; weekend cooking can be leisurely
                but never wasteful.
              </p>
            </div>
          </div>

          <div className="flex gap-5">
            <img
              className="size-8"
              src="/assets/images/icon-bullet-point.svg"
              alt="bullet point icon"
            />

            <div>
              <span className="text-nunito-preset-four text-neutral-600">Sustainable choices.</span>

              <p className="text-nunito-sans-preset-one mt-3 text-neutral-600">
                Short ingredient lists cut down on food waste and carbon footprint, while
                plant-forward dishes keep things planet-friendly.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mt-12 grid grid-cols-1 gap-10 md:mt-20 lg:mt-24 lg:grid-cols-3 lg:items-center lg:gap-16 lg:max-2xl:grid-cols-1">
        <div>
          <h4 className="md:text-nunito-preset-two text-nunito-mobile-preset-two text-neutral-900">
            Beyond the plate
          </h4>

          <p className="text-nunito-sans-preset-one mt-5 text-neutral-600">
            We believe food is a catalyst for community and well-being. By sharing approachable
            recipes, we hope to:
          </p>

          <ul className="mt-3 ml-10 list-disc">
            <li className="text-nunito-sans-preset-one text-neutral-600">
              Encourage family dinners and social cooking.
            </li>
            <li className="text-nunito-sans-preset-one text-neutral-600">
              Reduce reliance on single-use packaging and delivery waste.
            </li>
            <li className="text-nunito-sans-preset-one text-neutral-600">
              Spark curiosity about seasonal produce and local agriculture.
            </li>
          </ul>
        </div>

        <div className="lg:col-span-2">
          <img
            className="hidden rounded-xl md:block"
            src="/assets/images/image-about-beyond-the-plate-large.webp"
            alt="A family holding tomatoes and herbs in the kitchen"
          />

          <img
            className="block rounded-xl md:hidden"
            src="/assets/images/image-about-beyond-the-plate-small.webp"
            alt="A family holding tomatoes and herbs in the kitchen"
          />
        </div>
      </section>
    </div>
  );
};

export default About;
