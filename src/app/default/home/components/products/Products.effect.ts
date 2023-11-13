import { useSearchParams } from 'react-router-dom';
import { useEffect } from 'react';

import { useQuery } from 'hooks';

export const useProducts = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const active = searchParams.get('active') === 'true';
  const promo = searchParams.get('promo') === 'true';
  const search = searchParams.get('search');
  const page = searchParams.get('page');

  const {
    data: productList,
    isLoading,
    isError,
    error,
  } = useQuery(
    'getProducts',
    {
      active: active || undefined,
      promo: promo || undefined,
      search: search || undefined,
      page: page || '1',
    },
    { keepPreviousData: true },
  );

  const lastPage = 1;

  const setPage = (value: number) => {
    setSearchParams((prev) => {
      prev.set('page', value.toString());
      return prev;
    });
  };

  useEffect(() => {
    if (lastPage < Number(page)) {
      setSearchParams((prev) => {
        prev.set('page', '1');
        return prev;
      });
    }
  }, [page, lastPage, setSearchParams]);

  return { productList, isLoading, isError, error, searchParams, page, lastPage, setPage };
};
