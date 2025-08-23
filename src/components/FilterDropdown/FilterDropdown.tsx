import { motion } from 'motion/react';
import { useRecipeParams } from '../../hooks/useRecipeParams';

type FilterDropdownProps = {
  filterList: FilterDropdown[];
  filterType: 'prepTime' | 'cookTime';
};

const FilterDropdown = ({ filterList, filterType }: FilterDropdownProps) => {
  const { params, setParams } = useRecipeParams();

  const currentValue = filterType === 'prepTime' ? params.prepTime : params.cookTime;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.85 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.2 }}
      exit={{ opacity: 0, scale: 0.85 }}
      className="absolute top-14 left-0 z-30 h-auto w-full transform rounded-lg border border-neutral-300 bg-white p-2 will-change-transform md:w-[240px]"
    >
      {filterList.map((data) => (
        <div key={data.value} tabIndex={0}>
          <div
            className="flex cursor-pointer items-center gap-2 p-2"
            onClick={() => {
              setParams({ [filterType]: data.value ?? '' });
            }}
          >
            <input
              checked={currentValue === data.value}
              type="radio"
              id={`${filterType}-${data.id}`}
              name={filterType}
              className="size-4 accent-neutral-900"
              readOnly
            />
            <label
              htmlFor={`${filterType}-${data.id}`}
              className="text-nunito-preset-six text-neutral-900"
            >
              {data.label}
            </label>
          </div>
        </div>
      ))}

      <button
        onClick={() => {
          setParams({ [filterType]: null, search: null });
        }}
        className="text-nunito-sans-preset-three mt-0.5 cursor-pointer p-2 text-neutral-900"
      >
        Clear
      </button>
    </motion.div>
  );
};

export default FilterDropdown;
