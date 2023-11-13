import EmptyProductsListIcon from 'assets/images/empty_products.svg?react';

export const ProductsEmptyList = () => (
  <div className="py-12" data-testid="pw-product-empty-list">
    <div className="mx-auto flex h-80 w-full flex-col items-center justify-center gap-4 rounded-lg bg-white px-28 py-12 lg:max-w-xl">
      <EmptyProductsListIcon />
      <div className="text-center">
        <h2 className="text-h4">Ooops… It’s empty here</h2>
        <p className="text-gray-dark">There are no products on the list</p>
      </div>
    </div>
  </div>
);
