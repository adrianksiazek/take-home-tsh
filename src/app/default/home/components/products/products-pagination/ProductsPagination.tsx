import clsx from 'clsx';

import { ProductPaginationProps } from './ProductsPagination.types';
import { useProductsPagination } from './ProductsPagination.effect';

export const Pagination = ({ currentPage, totalPages, setPage }: ProductPaginationProps) => {
  const { pagesToShow, firstPage, lastPage } = useProductsPagination(totalPages, currentPage);

  return (
    <div className="flex justify-center gap-4 pb-12">
      <button
        className={clsx('btn font-semibold', firstPage && 'text-gray-dark')}
        disabled={firstPage}
        onClick={() => setPage(1)}
      >
        First
      </button>
      {pagesToShow.map((page, index) => (
        <button
          key={index}
          className={clsx(
            'btn font-semibold',
            page === '...' && 'pointer-events-none',
            page === currentPage && 'text-primary',
          )}
          onClick={() => (typeof page === 'number' ? setPage(page) : null)}
        >
          {page}
        </button>
      ))}
      <button
        className={clsx('btn font-semibold', lastPage && 'text-gray-dark')}
        disabled={lastPage}
        onClick={() => setPage(totalPages)}
      >
        Last
      </button>
    </div>
  );
};
