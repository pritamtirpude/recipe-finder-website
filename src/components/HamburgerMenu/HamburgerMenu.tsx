import { motion, MotionConfig, spring } from 'motion/react';
import useMobileStore from '../../store/mobileStore';

const HamburgerMenu = () => {
  const { isOpen, toggle } = useMobileStore();

  return (
    <MotionConfig transition={{ duration: 0.5, type: spring, bounce: 0 }}>
      <button
        aria-expanded={isOpen}
        onClick={toggle}
        className="flex size-10 cursor-pointer flex-col gap-1 rounded-sm bg-neutral-300 p-3 lg:hidden"
      >
        <motion.div
          animate={{ rotate: isOpen ? 45 : 0, y: isOpen ? 8 : 0 }}
          className="h-0.5 w-4.5 rounded-full bg-neutral-900"
        />
        <motion.div
          animate={{
            opacity: isOpen ? 0 : 1,
            visibility: isOpen ? 'hidden' : 'visible',
          }}
          className="h-0.5 w-4.5 rounded-full bg-neutral-900"
        />
        <motion.div
          animate={{ rotate: isOpen ? -45 : 0, y: isOpen ? -4 : 0 }}
          className="h-0.5 w-4.5 rounded-full bg-neutral-900"
        />
      </button>
    </MotionConfig>
  );
};

export default HamburgerMenu;
