import { AnimatePresence, motion } from 'motion/react';
import { Link } from 'react-router';
import { Button } from '../../components';
import useMobileStore from '../../store/mobileStore';
import { navLinks } from '../../util/util';
import HamburgerMenu from '../HamburgerMenu/HamburgerMenu';

const Navbar = () => {
  const { isOpen, toggle, isActive, setIsActive } = useMobileStore();

  return (
    <nav className="sticky inset-0 z-50 flex items-center justify-between border-b border-b-neutral-300 bg-neutral-100 px-4 py-5 md:px-8 md:py-8 md:pb-5 lg:px-15 lg:py-6.5">
      <div>
        <Link to="/">
          <img src="/assets/images/logo.svg" alt="logo" />
        </Link>
      </div>

      <ul className="hidden gap-10 lg:flex lg:items-center">
        {navLinks.map((link) => (
          <motion.li
            onMouseOver={() => setIsActive(link.label)}
            onMouseLeave={() => setIsActive(link.label)}
            onFocus={() => setIsActive(link.label)}
            layout
            className="relative"
            key={link.href}
          >
            <Link className="text-nunito-preset-six text-neutral-900 capitalize" to={link.href}>
              {link.label}
            </Link>
            <div className="bg-neutral-orange-500 absolute hidden h-[3px] w-full rounded-full" />
            {isActive === link.label && (
              <motion.div
                layoutId="underline"
                className="bg-neutral-orange-500 absolute h-[3px] w-full rounded-full"
              />
            )}
          </motion.li>
        ))}
      </ul>

      <Button label="Browse recipes" href="/recipes" isHidden={true} isActive="recipes" />

      <HamburgerMenu />

      <AnimatePresence>
        {isOpen && (
          <motion.div
            layout
            initial={{
              opacity: 0,
              y: -20,
            }}
            transition={{ type: 'spring', visualDuration: 0.2, bounce: 0 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full right-4 left-4 z-50 block rounded-lg border border-neutral-300 bg-white p-2 shadow-md md:right-8 md:left-8 lg:hidden"
          >
            <ul className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <li className="relative" key={link.href}>
                  <Link
                    onClick={toggle}
                    className="text-nunito-preset-six text-neutral-900 capitalize"
                    to={link.href}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <Button
              label="Browse recipes"
              href="/recipes"
              styles="w-full  mt-2.5"
              isHidden={false}
              isMobile={true}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
