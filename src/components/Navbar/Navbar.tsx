import { motion } from 'motion/react';
import { Link, useLocation } from 'react-router';
import { Button } from '../../components';
import { navLinks } from '../../util/util';

import HamburgerMenu from '../HamburgerMenu/HamburgerMenu';

const Navbar = () => {
  const { pathname } = useLocation();

  return (
    <nav className="sticky inset-0 z-50 flex items-center justify-between border-b border-b-neutral-300 bg-white px-4 py-5 md:px-8 md:py-8 md:pb-5 lg:px-15 lg:py-6.5">
      <div>
        <Link to="/">
          <img src="/assets/images/logo.svg" alt="logo" />
        </Link>
      </div>

      <ul className="hidden gap-10 lg:flex lg:items-center">
        {navLinks.map((link) => (
          <motion.li layout className="group relative" key={link.href}>
            <Link className="text-nunito-preset-six text-neutral-900 capitalize" to={link.href}>
              {link.label}
            </Link>
            <div className="bg-neutral-orange-500 absolute hidden h-[3px] w-full rounded-full group-hover:block" />
            {pathname === link.href && (
              <motion.div
                layoutId="underline"
                className="bg-neutral-orange-500 absolute h-[3px] w-full rounded-full"
              />
            )}
          </motion.li>
        ))}
      </ul>

      <Button label="Browse recipes" href="/recipes" isHidden={true} />

      <HamburgerMenu />
    </nav>
  );
};

export default Navbar;
