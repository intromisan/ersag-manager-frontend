import { createApi } from '@reduxjs/toolkit/query/react';
import { Product } from '../interfaces';
import { baseQuery } from './baseQuery';

export const productsApi = createApi({
  reducerPath: 'productsApi',
  baseQuery: baseQuery,
  tagTypes: ['Products'],
  endpoints: (build) => ({
    getProducts: build.query<Product[], void>({
      query: () => '/products',
      providesTags: ['Products']
    })
  })
});

export const { useGetProductsQuery } = productsApi;
