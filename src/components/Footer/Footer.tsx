import Button from '../Button/Button';

const Footer = () => {
  return (
    <footer className="overflow-hidden px-4 md:px-8 lg:mx-auto lg:max-w-[1440px] lg:px-0 lg:max-2xl:px-8">
      <div className="relative z-50 flex flex-col items-center justify-center overflow-hidden rounded-2xl bg-neutral-200 py-12 md:py-20 lg:py-24">
        <div className="absolute -z-10 hidden size-full bg-[url(/assets/images/pattern-fork.svg)] bg-contain bg-left bg-no-repeat md:top-48 md:-left-10 md:block md:size-[180px] lg:top-6 lg:-left-12 lg:block lg:size-full lg:max-2xl:top-32 lg:max-2xl:-left-10 lg:max-2xl:size-[180px]" />

        <div className="flex flex-col items-center justify-center px-4 md:px-0">
          <h5 className="md:text-nunito-preset-two text-nunito-mobile-preset-two text-center text-neutral-900">
            Ready to cook smarter?
          </h5>
          <p className="text-nunito-sans-preset-one mt-3 text-center text-neutral-600">
            Hit the button, pick a recipe, and get dinner on the table—fast.
          </p>
          <Button label="Browse recipes" href="/recipes" styles="mt-10" />
        </div>
        <div className="absolute -z-10 hidden size-full bg-[url(/assets/images/pattern-knife.svg)] bg-contain bg-right bg-no-repeat md:-top-10 md:right-0 md:block md:size-[170px] lg:top-0 lg:-right-14 lg:block lg:size-full lg:max-2xl:-top-10 lg:max-2xl:right-0 lg:max-2xl:size-[170px]" />
      </div>
      <div className="flex flex-col-reverse items-center justify-between gap-6 py-10 md:flex-row md:gap-0">
        <div>
          <p className="text-nunito-sans-preset-three text-neutral-900">Made with ❤️ and 🥑</p>
        </div>

        <div className="flex items-center gap-6">
          <a
            href="https://www.instagram.com/pritam231991/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="/assets/images/icon-instagram.svg" alt="Instagram" />
          </a>
          <a
            href="https://bsky.app/profile/pritam1991.bsky.social"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="/assets/images/icon-bluesky.svg" alt="Bluesky" />
          </a>
          <a href="https://www.tiktok.com/" target="_blank" rel="noopener noreferrer">
            <img src="/assets/images/icon-tiktok.svg" alt="TikTok" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
