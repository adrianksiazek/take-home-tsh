import { Loader } from 'ui';

import { useProducts } from './Products.effect';
import { ProductsEmptyList } from './ProductEmptylist';
import { Pagination } from './products-pagination/ProductsPagination';
import { ProductList } from './product-list/ProductList';

export const Products = () => {
  const { productList, isLoading, isError, setPage, page } = useProducts();

  if (isLoading) {
    return <Loader />;
  }

  if (isError) {
    return (
      <div className="absolute left-1/2 top-1/2 -translate-y-1/2 bg-white p-12">
        <h2>An error occured</h2>
      </div>
    );
  }

  if (productList) {
    return (
      <>
        {productList.items.length > 0 && (
          <>
            <ProductList productList={productList.items} />
            <Pagination
              currentPage={page ? Number(page) : productList.meta.currentPage}
              totalPages={productList.meta.totalPages}
              setPage={setPage}
            />
          </>
        )}
        {productList.items.length === 0 && <ProductsEmptyList />}
      </>
    );
  }
};
