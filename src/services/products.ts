import { IProduct } from '../interfaces/product';
import { appApi } from './appApi';

export const productsApi = appApi.injectEndpoints({
  endpoints: (build) => ({
    getProducts: build.query<IProduct[], void>({
      query: () => '/products',
      providesTags: ['Products']
    })
  }),
  overrideExisting: false
});

export const { useGetProductsQuery } = productsApi;
