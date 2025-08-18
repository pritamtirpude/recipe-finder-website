import { useEffect, useRef } from 'react';

type UseOutsideClickParams = {
  onOutsideClick: () => void;
  isOpen: boolean;
};

const useWindowOutsideClick = <T extends HTMLElement = HTMLDivElement>({
  onOutsideClick,
  isOpen,
}: UseOutsideClickParams) => {
  const ref = useRef<T>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      // Only handle clicks when the dropdown is open
      if (!isOpen) return;

      // Check if the click was outside the referenced element
      if (ref.current && !ref.current.contains(event.target as Node)) {
        onOutsideClick();
      }
    };

    const handleEscapeKey = (event: KeyboardEvent) => {
      // Close on Escape key when dropdown is open
      if (isOpen && event.key === 'Escape') {
        onOutsideClick();
      }
    };

    // Add event listeners
    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleEscapeKey);

    // Cleanup event listeners
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleEscapeKey);
    };
  }, [isOpen, onOutsideClick]);

  return ref;
};

export default useWindowOutsideClick;
