import { motion } from 'motion/react';
import { Link } from 'react-router';
import Button from '../Button/Button';

type RecipeCardProps = {
  recipe: Recipe;
};

const RecipeCard = ({ recipe }: RecipeCardProps) => {
  return (
    <motion.div layout className="rounded-10 overflow-hidden bg-white px-2 py-4 shadow-md">
      <div className="rounded-10 overflow-hidden">
        <Link to={`/recipes/${recipe.slug}`}>
          <img
            className="rounded-10 hidden h-auto w-full object-cover duration-300 hover:scale-110 md:block"
            src={recipe.image.large}
            alt={recipe.title}
          />
          <img
            className="rounded-10 block h-auto w-full object-cover duration-300 hover:scale-110 md:hidden"
            src={recipe.image.small}
            alt={recipe.title}
          />
        </Link>
      </div>

      <h5 className="text-nunito-preset-five mt-4 text-neutral-900">{recipe.title}</h5>
      <p className="text-nunito-sans-preset-three mt-2.5 max-w-[344px] text-neutral-600">
        {recipe.overview}
      </p>
      <div className="mt-4 flex flex-wrap items-center gap-4">
        <div className="flex items-center gap-0.5">
          <img src="/assets/images/icon-servings.svg" alt="icon serving" />
          <p className="text-nunito-sans-preset-three text-neutral-900">
            Servings: {recipe.servings}
          </p>
        </div>
        <div className="flex items-center gap-0.5">
          <img src="/assets/images/icon-prep-time.svg" alt="icon prep time" />
          <p className="text-nunito-sans-preset-three text-neutral-900">
            Prep: {recipe.prepMinutes} mins
          </p>
        </div>

        <div className="flex items-center gap-0.5">
          <img src="/assets/images/icon-cook-time.svg" alt="icon cook time" />
          <p className="text-nunito-sans-preset-three text-neutral-900">
            Cook: {recipe.cookMinutes} mins
          </p>
        </div>
      </div>
      <Button
        label="View Recipe"
        href={`/recipes/${recipe.slug}`}
        styles="mt-4 rounded-full w-full"
      />
    </motion.div>
  );
};

export default RecipeCard;
