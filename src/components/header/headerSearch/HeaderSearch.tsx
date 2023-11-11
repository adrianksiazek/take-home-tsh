import { useState } from 'react';

import { Input } from 'components/formControls/input/Input';
import { HeaderButtonSearch } from '../headerButtonSearch/HeaderButtonSearch';
import { HeaderFilters } from '../headerFilters/HeaderFilters';

export const HeaderSearch = () => {
  const [searchValue, setSearchValue] = useState('');

  return (
    <>
      <div className="relative flex w-full items-center lg:max-w-sm">
        <Input
          name="search"
          placeholder="Search"
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          formControlClass="w-full"
        />
        <HeaderButtonSearch />
      </div>
      <HeaderFilters />
    </>
  );
};
