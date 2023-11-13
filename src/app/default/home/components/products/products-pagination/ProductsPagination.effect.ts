export const useProductsPagination = (totalPages: number, currentPage: number) => {
  const pagesToShow = [];
  const totalVisiblePages = 6;
  const firstPage = currentPage === 1;
  const lastPage = currentPage === totalPages;

  if (totalPages <= totalVisiblePages) {
    for (let i = 1; i <= totalPages; i++) {
      pagesToShow.push(i);
    }
  } else {
    if (currentPage <= 2) {
      for (let i = 1; i <= 3; i++) {
        pagesToShow.push(i);
      }
      pagesToShow.push('...');
      for (let i = totalPages - 2; i <= totalPages; i++) {
        pagesToShow.push(i);
      }
    } else {
      for (let i = totalPages - 5; i <= totalPages; i++) {
        pagesToShow.push(i);
      }
    }
  }

  return { pagesToShow, firstPage, lastPage };
};
