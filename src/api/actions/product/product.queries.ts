import { AxiosInstance } from 'axios';
import { stringify } from 'qs';

import { GetProductsListArgs, GetProductsResponse } from './product.types';

export const productQueries = {
  getProducts:
    (client: AxiosInstance) =>
    async ({ page = '1', active, limit = '8', promo, search }: GetProductsListArgs) => {
      const queryParams = stringify({ page, active, promo, search, limit }, { addQueryPrefix: true });
      return (await client.get<GetProductsResponse>(`/products/${queryParams}`)).data;
    },
};
