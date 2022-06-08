import { createApi } from '@reduxjs/toolkit/dist/query/react';
import { IFinance } from '../interfaces/finance';
import { baseQuery } from './baseQuery';

export const financesApi = createApi({
  reducerPath: 'financesApi',
  baseQuery: baseQuery,
  tagTypes: ['Finances'],
  endpoints: (build) => ({
    getFinance: build.query<IFinance, void>({
      query: () => '/finance',
      providesTags: ['Finances']
    })
  })
});

export const { useGetFinanceQuery } = financesApi;
