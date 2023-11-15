import { Modal } from 'ui/modal/Modal';

import { ProductModalProps } from './ProductModal.types';

export const ProductModal = ({ name, description, image, isOpen, onClose }: ProductModalProps) => {
  return (
    <Modal opened={isOpen} onClose={onClose}>
      <img src={image} alt="Product" className="w-full rounded-t-lg" />
      <div className="px-8 pb-12 pt-8">
        <h2 className="text-h4">{name}</h2>
        <p className="mt-2 text-lg text-gray-dark">{description}</p>
      </div>
    </Modal>
  );
};
