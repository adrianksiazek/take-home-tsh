import { useSearchParams } from 'react-router-dom';

export const useHeaderFilters = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const active = searchParams.get('active') === 'true';
  const promo = searchParams.get('promo') === 'true';

  const handleClickActive = () => {
    setSearchParams((prev) => {
      if (active) {
        prev.delete('active');
      } else {
        prev.set('active', (!active).toString());
      }

      prev.set('page', '1');
      return prev;
    });
  };

  const handleClickPromo = () => {
    setSearchParams((prev) => {
      if (promo) {
        prev.delete('promo');
      } else {
        prev.set('promo', (!promo).toString());
      }

      prev.set('page', '1');
      return prev;
    });
  };

  return { active, promo, handleClickActive, handleClickPromo };
};
