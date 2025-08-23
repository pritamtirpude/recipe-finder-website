import { AnimatePresence, motion } from 'motion/react';
import { useEffect } from 'react';
import { FilterDropdown, RecipeCard, SearchInput } from '../../components';
import { useRecipeParams } from '../../hooks/useRecipeParams';
import useWindowOutsideClick from '../../hooks/useWindowOutsideClick';
import { useFilterStore } from '../../store/filterStore';
import { useRecipesStore } from '../../store/recipesStore';
import { cookData, prepData } from '../../util/util';

const Recipes = () => {
  const { params } = useRecipeParams();

  const {
    filteredRecipes,
    filterPrepTimeRecipes,
    filterCookTimeRecipes,
    resetFilters,
    searchRecipes,
  } = useRecipesStore();
  const {
    togglePrepTime,
    isPrepTimeOpen,
    toggleCookTime,
    isCookTimeOpen,
    closePrepTime,
    closeCookTime,
  } = useFilterStore();

  // Outside click hooks for closing dropdowns
  const prepTimeRef = useWindowOutsideClick<HTMLDivElement>({
    onOutsideClick: closePrepTime,
    isOpen: isPrepTimeOpen,
  });

  const cookTimeRef = useWindowOutsideClick<HTMLDivElement>({
    onOutsideClick: closeCookTime,
    isOpen: isCookTimeOpen,
  });

  useEffect(() => {
    if (params.prepTime) {
      filterPrepTimeRecipes(params.prepTime);
    }
  }, [params.prepTime, filterPrepTimeRecipes]);

  useEffect(() => {
    if (params.cookTime) {
      filterCookTimeRecipes(params.cookTime);
    }
  }, [params.cookTime, filterCookTimeRecipes]);

  useEffect(() => {
    if (params.search) {
      searchRecipes(params.search);
    } else {
      searchRecipes('');
    }
  }, [params.search, searchRecipes]);

  useEffect(() => {
    if (!params.prepTime && !params.cookTime && !params.search) {
      resetFilters();
    }
  }, [params.prepTime, params.cookTime, params.search, resetFilters]);

  useEffect(() => {
    if (params.prepTime && params.cookTime) {
      filterPrepTimeRecipes(params.prepTime);
      filterCookTimeRecipes(params.cookTime);
    }
  }, [filterCookTimeRecipes, filterPrepTimeRecipes, params.cookTime, params.prepTime]);

  return (
    <div className="py-12 md:py-20 lg:py-24">
      <section className="flex flex-col items-start justify-start lg:items-center lg:justify-center">
        <h1 className="md:text-nunito-preset-two text-nunito-mobile-preset-two text-neutral-900">
          Explore our simple, healthy recipes
        </h1>

        <p className="text-nunito-sans-preset-one mt-3 w-full text-neutral-600 lg:max-w-[724px] lg:text-center">
          Discover eight quick, whole-food dishes that fit real-life schedules and taste amazing.
          Use the search bar to find a recipe by name or ingredient, or simply scroll the list and
          let something delicious catch your eye.
        </p>
      </section>

      <div className="mt-16 flex flex-col items-center gap-3 md:flex-row md:justify-normal lg:justify-between">
        <div className="flex w-full flex-col items-center gap-3 md:flex-row lg:gap-4">
          <div
            ref={prepTimeRef}
            onClick={() => togglePrepTime()}
            onMouseEnter={() => {
              if (isCookTimeOpen) {
                toggleCookTime();
              }
            }}
            title="Max Prep Time"
            tabIndex={0}
            role="button"
            aria-expanded={isPrepTimeOpen}
            aria-label="Max Prep Time filter"
            className="rounded-10 relative flex w-full cursor-pointer items-center justify-center gap-2 border border-neutral-300 bg-white px-4 py-2.5 hover:outline hover:outline-neutral-900 focus:outline-2 focus:outline-neutral-900 md:justify-normal lg:w-auto"
          >
            <span className="text-nunito-preset-six text-neutral-900 md:truncate">
              Max Prep Time
            </span>
            <img src="/assets/images/icon-chevron-down.svg" alt="icon chevron" />
            <AnimatePresence>
              {isPrepTimeOpen && <FilterDropdown filterList={prepData} filterType="prepTime" />}
            </AnimatePresence>
          </div>
          <div
            ref={cookTimeRef}
            onClick={() => toggleCookTime()}
            onMouseEnter={() => {
              if (isPrepTimeOpen) {
                togglePrepTime(); // Close prep time if it's open
              }
            }}
            title="Max Cook Time"
            tabIndex={0}
            role="button"
            aria-expanded={isCookTimeOpen}
            aria-label="Max Cook Time filter"
            className="rounded-10 relative flex w-full cursor-pointer items-center justify-center gap-2 border border-neutral-300 bg-white px-4 py-2.5 hover:outline hover:outline-neutral-900 focus:outline-2 md:justify-normal lg:w-auto"
          >
            <span className="text-nunito-preset-six text-neutral-900 md:truncate">
              Max Cook Time
            </span>
            <img src="/assets/images/icon-chevron-down.svg" alt="icon chevron" />
            <AnimatePresence>
              {isCookTimeOpen && <FilterDropdown filterList={cookData} filterType="cookTime" />}
            </AnimatePresence>
          </div>
        </div>

        <SearchInput />
      </div>

      <motion.div layout className="mt-6 grid grid-cols-1 gap-8 lg:grid-cols-3 lg:gap-10">
        {filteredRecipes.map((recipe) => (
          <RecipeCard key={recipe.slug} recipe={recipe} />
        ))}
      </motion.div>
    </div>
  );
};

export default Recipes;
