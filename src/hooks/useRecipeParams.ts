import { parseAsString, useQueryStates } from 'nuqs';

export function useRecipeParams() {
  const [params, setParams] = useQueryStates(
    {
      prepTime: parseAsString,
      cookTime: parseAsString,
      search: parseAsString,
    },
    {
      urlKeys: {
        prepTime: 'prep',
        cookTime: 'cook',
      },
    },
  );

  return { params, setParams };
}
