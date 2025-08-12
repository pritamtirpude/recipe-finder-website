import { Link, useNavigate } from 'react-router';
import { navLinks } from '../../util/util';

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <nav className="flex items-center justify-between px-4 py-5 md:px-8 md:py-8 md:pb-5 lg:px-15 lg:py-6.5">
      <div>
        <img src="/assets/images/logo.svg" alt="logo" />
      </div>

      <ul className="flex space-x-10">
        {navLinks.map((link) => (
          <li key={link.href}>
            <Link className="capitalize" to={link.href}>
              {link.label}
            </Link>
          </li>
        ))}
      </ul>

      <button
        onClick={() => navigate('/recipes')}
        className="rounded-10 text-nunito-preset-five cursor-pointer bg-neutral-900 px-4 py-3 font-bold text-white"
      >
        Browse recipes
      </button>
    </nav>
  );
};

export default Navbar;
