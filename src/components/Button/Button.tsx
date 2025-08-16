import { useNavigate } from 'react-router';
import { cn } from '../../util/util';

type ButtonProps = {
  label: string;
  href: string;
  isHidden?: boolean;
  styles?: string;
};

const Button = ({ label, href, isHidden, styles }: ButtonProps) => {
  const navigate = useNavigate();
  return (
    <button
      onClick={() => navigate(href)}
      className={cn(
        'rounded-10 text-nunito-preset-five w-fit cursor-pointer bg-neutral-900 px-4 py-3 font-bold text-white focus:outline-offset-4 focus:outline-neutral-900 lg:block lg:w-auto',
        styles,
        isHidden ? 'hidden' : 'block',
      )}
    >
      {label}
    </button>
  );
};

export default Button;
