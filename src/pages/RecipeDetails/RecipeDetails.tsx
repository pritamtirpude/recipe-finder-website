import { Link, useParams } from 'react-router';
import { RecipeCard } from '../../components';
import { useRecipesStore } from '../../store/recipesStore';

const RecipeDetails = () => {
  const { slug } = useParams();

  const { getRecipeBySlug, recipes } = useRecipesStore();

  const recipe = getRecipeBySlug(slug ?? '');

  if (!recipe) {
    return <div className="text-center text-neutral-600">Recipe not found</div>;
  }

  const filteredRecipes = recipes.filter((r) => r.slug !== slug);
  const moreRecipes = filteredRecipes.sort(() => Math.random() - 0.5).slice(0, 3);

  return (
    <div className="py-12 md:py-20 lg:py-24">
      <div className="flex items-center gap-1.5">
        <Link to="/recipes" className="text-nunito-preset-six text-neutral-900/60">
          Recipes
        </Link>
        <span className="text-nunito-preset-six text-neutral-900/60">/</span>
        <span className="text-nunito-preset-six truncate text-neutral-900">{recipe?.title}</span>
      </div>

      <section className="mt-4 grid grid-cols-1 gap-10 lg:grid-cols-2">
        <div>
          <img
            className="hidden h-auto w-full rounded-2xl object-cover md:block"
            src={recipe?.image.large}
            alt={recipe?.title}
          />
          <img
            className="block h-auto w-full rounded-2xl object-cover md:hidden"
            src={recipe?.image.small}
            alt={recipe?.title}
          />
        </div>

        <div>
          <h1 className="lg:text-nunito-preset-two text-nunito-mobile-preset-two text-neutral-900">
            {recipe?.title}
          </h1>

          <p className="text-nunito-sans-preset-one mt-5 text-neutral-600">{recipe?.overview}</p>

          <div className="mt-5 flex flex-wrap items-center gap-4">
            <div className="flex items-center gap-2">
              <img src="/assets/images/icon-servings.svg" alt="icon servings" className="size-5" />

              <span className="text-nunito-preset-six">Servings: {recipe?.servings}</span>
            </div>

            <div className="flex items-center gap-2">
              <img
                src="/assets/images/icon-prep-time.svg"
                alt="icon prep time"
                className="size-5"
              />

              <span className="text-nunito-preset-six">Prep: {recipe?.prepMinutes}</span>
            </div>

            <div className="flex items-center gap-2">
              <img
                src="/assets/images/icon-cook-time.svg"
                alt="icon cook time"
                className="size-5"
              />

              <span className="text-nunito-preset-six">Cook: {recipe?.cookMinutes}</span>
            </div>
          </div>

          <div className="mt-5">
            <span className="text-nunito-preset-four text-neutral-900">Ingredients:</span>

            <ul className="mt-4">
              {recipe?.ingredients.map((ingredient) => (
                <li
                  className="text-nunito-sans-preset-one mb-2 flex items-center gap-2 text-neutral-600"
                  key={ingredient}
                >
                  <img
                    src="/assets/images/icon-bullet-point.svg"
                    alt="icon bullet point"
                    className="size-6"
                  />
                  {ingredient}
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-5">
            <span className="text-nunito-preset-four text-neutral-900">Instructions:</span>

            <ul className="mt-4">
              {recipe?.instructions.map((instruction) => (
                <li
                  className="text-nunito-sans-preset-one mb-2 flex gap-2 text-neutral-600"
                  key={instruction}
                >
                  <img
                    src="/assets/images/icon-bullet-point.svg"
                    alt="icon bullet point"
                    className="size-6"
                  />
                  {instruction}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="mt-32">
        <h2 className="text-nunito-preset-three text-neutral-900">More Recipes</h2>
        <div className="mt-6 grid grid-cols-1 gap-8 lg:grid-cols-3">
          {moreRecipes.map((recipe) => (
            <RecipeCard key={recipe.id} recipe={recipe} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default RecipeDetails;
