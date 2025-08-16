import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const navLinks = [
  { href: '/', label: 'home' },
  { href: '/about', label: 'about' },
  { href: '/recipes', label: 'recipes' },
] as const;

export const features = [
  {
    icon: '/assets/images/icon-whole-food-recipes.svg',
    title: 'Whole-food recipes',
    description: 'Each dish uses everyday, unprocessed ingredients.',
  },
  {
    icon: '/assets/images/icon-minimum-fuss.svg',
    title: 'Minimum fuss',
    description: 'All recipes are designed to make eating healthy quick and easy.',
  },
  {
    icon: '/assets/images/icon-search-in-seconds.svg',
    title: 'Search in seconds',
    description: 'Filter by name or ingredient and jump straight to the recipe you need.',
  },
];
