import SearchLogo from 'assets/images/search.svg?react';

export const HeaderButtonSearch = () => {
  return (
    <button type="button" className="absolute right-0 h-full w-9">
      <SearchLogo />
    </button>
  );
};
