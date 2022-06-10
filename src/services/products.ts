import { Product } from '../interfaces';
import { appApi } from './appApi';

export const productsApi = appApi.injectEndpoints({
  endpoints: (build) => ({
    getProducts: build.query<Product[], void>({
      query: () => '/products',
      providesTags: ['Products']
    })
  }),
  overrideExisting: false
});

export const { useGetProductsQuery } = productsApi;
