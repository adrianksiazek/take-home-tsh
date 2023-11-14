import { useState } from 'react';
import clsx from 'clsx';

import { Button } from 'ui/button/Button';
import { ProductModal } from '../product-modal/ProductModal';

import { ProductProps } from './Product.types';
import { ProductRating } from './ProductRating';
import { ProductBannerPromo } from './ProductBannerPromo';

export const Product = ({ name, promo, image, description, rating, active }: ProductProps) => {
  const [isOpen, toggleModal] = useState(false);

  const handleToggleModal = () => {
    toggleModal(!isOpen);
  };

  return (
    <div data-testid="pw-product">
      <ProductModal name={name} description={description} image={image} isOpen={isOpen} onClose={handleToggleModal} />
      <div className="flex h-full max-w-md flex-col justify-between rounded-lg bg-white">
        <div className="relative">
          <img
            src={image}
            alt="Product"
            className={clsx('max-w-52 w-full rounded-t-lg', !active && 'grayscale')}
            loading="lazy"
          />
          {promo && <ProductBannerPromo />}
        </div>
        <div className="flex h-full flex-col justify-between px-6 pb-6 pt-3">
          <div className="mb-10">
            <h2 className="text-h4">{name}</h2>
            <p className="text-md font-semibold text-gray-dark">{description}</p>
          </div>
          <div>
            <ProductRating rating={rating} />
            <Button
              disabled={!active}
              className="btn-primary btn-lg mt-4 w-full"
              onClick={handleToggleModal}
              name="product-btn"
            >
              {!active ? 'Unavailable' : 'Show details'}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
