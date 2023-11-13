import { Checkbox } from 'ui';

import { useHeaderFilters } from './HeaderFilters.effect';

export const HeaderFilters = () => {
  const { active, promo, handleClickActive, handleClickPromo } = useHeaderFilters();

  return (
    <div className="flex max-w-fit items-center gap-8">
      <Checkbox label="Active" checked={active} name="active" onChange={handleClickActive} />
      <Checkbox label="Promo" checked={promo} name="promo" onChange={handleClickPromo} />
    </div>
  );
};
