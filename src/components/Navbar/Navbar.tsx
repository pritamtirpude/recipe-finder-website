import { motion } from 'motion/react';
import { Link, useLocation, useNavigate } from 'react-router';
import { navLinks } from '../../util/util';
import HamburgerMenu from '../HamburgerMenu/HamburgerMenu';

const Navbar = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  console.log(pathname);

  return (
    <nav className="flex items-center justify-between border-b border-b-neutral-300 px-4 py-5 md:px-8 md:py-8 md:pb-5 lg:px-15 lg:py-6.5">
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

      <button
        onClick={() => navigate('/recipes')}
        className="rounded-10 text-nunito-preset-five hidden cursor-pointer bg-neutral-900 px-4 py-3 font-bold text-white focus:outline-offset-4 focus:outline-neutral-900 lg:block"
      >
        Browse recipes
      </button>

      <HamburgerMenu />
    </nav>
  );
};

export default Navbar;
