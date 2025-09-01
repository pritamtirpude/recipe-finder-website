import { useRecipeParams } from '../../hooks/useRecipeParams';

const SearchInput = () => {
  const { params, setParams } = useRecipeParams();

  return (
    <div className="rounded-10 relative w-full lg:w-auto" tabIndex={0}>
      <img
        src="/assets/images/icon-search.svg"
        alt="Search Icon"
        className="absolute top-1/2 left-4 -translate-y-1/2 transform"
      />
      <input
        id="search"
        name="search"
        value={params.search ?? ''}
        onChange={(e) => {
          setParams({ search: e.target.value || null });
        }}
        className="rounded-10 text-nunito-preset-six w-full border border-neutral-300 bg-white py-2.5 pl-11 placeholder:text-neutral-900 hover:outline hover:outline-neutral-900 focus:outline-2 lg:w-[310px]"
        type="text"
        placeholder="Search by name or ingredient..."
      />
    </div>
  );
};

export default SearchInput;
