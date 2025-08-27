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

export const prepData = [
  {
    id: 'prepTime0',
    label: '0 Minutes',
    value: '0',
  },
  {
    id: 'prepTime5',
    label: '5 Minutes',
    value: '5',
  },
  {
    id: 'prepTime10',
    label: '10 Minutes',
    value: '10',
  },
];

export const cookData = [
  {
    id: 'cookTime0',
    label: '0 Minutes',
    value: '0',
  },
  {
    id: 'cookTime5',
    label: '5 Minutes',
    value: '5',
  },
  {
    id: 'cookTime10',
    label: '10 Minutes',
    value: '10',
  },
  {
    id: 'cookTime15',
    label: '15 Minutes',
    value: '15',
  },
  {
    id: 'cookTime20',
    label: '20 Minutes',
    value: '20',
  },
];
