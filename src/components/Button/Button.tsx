import { motion } from 'motion/react';
import { useNavigate } from 'react-router';
import useMobileStore from '../../store/mobileStore';
import { cn } from '../../util/util';

type ButtonProps = {
  label: string;
  href: string;
  isHidden?: boolean;
  styles?: string;
  isMobile?: boolean;
  isActive?: 'home' | 'about' | 'recipes';
};

const Button = ({ label, href, isHidden, styles, isMobile, isActive }: ButtonProps) => {
  const navigate = useNavigate();
  const { toggle, setIsActive } = useMobileStore();

  const handleClick = () => {
    navigate(href);
    if (isActive) {
      setIsActive(isActive);
    }
    if (isMobile) {
      toggle();
    }
  };

  return (
    <motion.button
      whileTap={{ scale: 0.95 }}
      onClick={handleClick}
      className={cn(
        'rounded-10 text-nunito-preset-five cursor-pointer bg-neutral-900 px-4 py-3 font-bold text-white transition-colors duration-150 hover:bg-neutral-600 focus:outline-offset-4 focus:outline-neutral-900 lg:block',
        styles,
        isHidden ? 'hidden' : 'block',
      )}
    >
      {label}
    </motion.button>
  );
};

export default Button;
