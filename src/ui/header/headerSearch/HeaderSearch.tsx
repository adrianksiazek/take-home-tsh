import { Input } from 'ui';
import { HeaderButtonSearch } from '../headerButtonSearch/HeaderButtonSearch';
import { HeaderFilters } from '../headerFilters/HeaderFilters';

import { useHeaderSearch } from './HeaderSearch.effect';

export const HeaderSearch = () => {
  const { search, setSearch } = useHeaderSearch();

  return (
    <>
      <div className="relative flex w-full items-center lg:max-w-sm">
        <Input
          name="search"
          placeholder="Search"
          value={search ?? ''}
          onChange={(e) => setSearch(e.target.value)}
          formControlClass="w-full"
        />
        <HeaderButtonSearch />
      </div>
      <HeaderFilters />
    </>
  );
};
