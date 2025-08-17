import { create } from 'zustand';
import recipesData from '../data.json';

interface RecipeStoreState {
  recipes: Recipe[];
  filteredRecipes: Recipe[];
  searchQuery: string;
  selectedRecipe: Recipe | null;
  isLoading: boolean;

  // Filter state
  filters: {
    prepTime: number | null;
    cookTime: number | null;
  };

  // Actions
  setRecipes: (recipes: Recipe[]) => void;
  setSearchQuery: (query: string) => void;
  searchRecipes: (query: string) => void;
  getRecipeBySlug: (slug: string) => Recipe | undefined;
  getRecipeById: (id: number) => Recipe | undefined;
  resetFilters: () => void;
  setSelectedRecipe: (recipe: Recipe | null) => void;
  filterPrepTimeRecipes: (prepTime: string) => void;
  filterCookTimeRecipes: (cookTime: string) => void;
  applyAllFilters: () => void;
}

export const useRecipesStore = create<RecipeStoreState>((set, get) => ({
  recipes: recipesData as Recipe[],
  filteredRecipes: recipesData as Recipe[],
  searchQuery: '',
  selectedRecipe: null,
  isLoading: false,

  filters: {
    prepTime: null,
    cookTime: null,
  },

  setRecipes: (recipes) => set({ recipes, filteredRecipes: recipes }),

  setSearchQuery: (query) => set({ searchQuery: query }),

  searchRecipes: (query: string) => {
    set({ searchQuery: query });
    // Apply all filters after updating search query
    get().applyAllFilters();
  },

  getRecipeBySlug: (slug) => {
    const { recipes } = get();
    return recipes.find((recipe) => recipe.slug === slug);
  },

  getRecipeById: (id) => {
    const { recipes } = get();
    return recipes.find((recipe) => recipe.id === id);
  },

  resetFilters: () => {
    const { recipes } = get();
    set({
      filteredRecipes: recipes,
      searchQuery: '',
      filters: { prepTime: null, cookTime: null },
    });
  },

  setSelectedRecipe: (recipe) => set({ selectedRecipe: recipe }),

  applyAllFilters: () => {
    const { recipes, filters, searchQuery } = get();

    let filtered = [...recipes];

    // Apply prep time filter
    if (filters.prepTime !== null && filters.prepTime > 0) {
      filtered = filtered.filter((recipe) => recipe.prepMinutes <= filters.prepTime!);
    }

    // Apply cook time filter
    if (filters.cookTime !== null && filters.cookTime > 0) {
      filtered = filtered.filter((recipe) => recipe.cookMinutes <= filters.cookTime!);
    }

    // Apply search filter
    if (searchQuery.trim() !== '') {
      filtered = filtered.filter(
        (recipe) =>
          recipe.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          recipe.ingredients.some((ingredient) =>
            ingredient.toLowerCase().includes(searchQuery.toLowerCase()),
          ),
      );
    }

    set({ filteredRecipes: filtered });
  },

  filterPrepTimeRecipes: (prepTime: string) => {
    const prepTimeNumber = parseInt(prepTime);
    const newPrepTime = prepTimeNumber === 0 ? null : prepTimeNumber;

    set((state) => ({
      filters: { ...state.filters, prepTime: newPrepTime },
    }));

    // Apply all filters after updating prep time
    get().applyAllFilters();
  },

  filterCookTimeRecipes: (cookTime: string) => {
    const cookTimeNumber = parseInt(cookTime);
    const newCookTime = cookTimeNumber === 0 ? null : cookTimeNumber;

    set((state) => ({
      filters: { ...state.filters, cookTime: newCookTime },
    }));

    // Apply all filters after updating cook time
    get().applyAllFilters();
  },
}));
