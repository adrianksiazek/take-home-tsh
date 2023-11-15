import { Product } from '../product/Product';

import { ProductListProps } from './ProductList.types';

export const ProductList = ({ productList }: ProductListProps) => (
  <div className="grid place-content-center gap-6 py-12 2xs:grid-cols-2 lg:grid-cols-4">
    {productList.map((product, index) => (
      <Product
        key={index}
        name={product.name}
        description={product.description}
        rating={product.rating}
        active={product.active}
        image={product.image}
        promo={product.promo}
        buttonText="Show details"
        data-testid="pw-product"
      />
    ))}
  </div>
);
