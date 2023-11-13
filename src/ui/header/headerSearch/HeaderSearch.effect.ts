import { useSearchParams } from 'react-router-dom';

export const useHeaderSearch = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const search = searchParams.get('search');

  const setSearch = (value: string) => {
    setSearchParams((prev) => {
      prev.set('search', value);
      return prev;
    });
  };

  return { search, setSearch };
};
