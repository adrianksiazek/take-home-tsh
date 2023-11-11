import { useState } from 'react';

import { Checkbox } from 'components/formControls/checkbox/Checkbox';

export const HeaderFilters = () => {
  const [active, setActive] = useState(false);
  const [promo, setPromo] = useState(false);
  const handleClickActive = () => setActive(!active);
  const handleClickPromo = () => setPromo(!promo);

  return (
    <div className="flex max-w-fit items-center gap-8">
      <Checkbox label="Active" checked={active} name="active" onChange={handleClickActive} />
      <Checkbox label="Promo" checked={promo} name="promo" onChange={handleClickPromo} />
    </div>
  );
};
