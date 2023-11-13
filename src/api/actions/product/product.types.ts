export type Product = {
  name: string;
  description: string;
  buttonText: string;
  rating: number;
  promo: boolean;
  active: boolean;
  image: string;
};

type Meta = {
  currentPage: number;
  totalPages: number;
};

export type GetProductsResponse = {
  items: Product[];
  meta: Meta;
};

export type GetProductsListArgs = {
  limit?: string;
  page?: string;
  search?: string;
  promo?: boolean;
  active?: boolean;
};
