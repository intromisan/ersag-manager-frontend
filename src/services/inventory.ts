import { createApi } from '@reduxjs/toolkit/dist/query/react';
import { IFinance } from '../interfaces/finance';
import { IAddOneItemPayload } from '../interfaces/inventory';
import { baseQuery } from './baseQuery';

export const inventoryApi = createApi({
  reducerPath: 'inventoryApi',
  baseQuery: baseQuery,
  tagTypes: ['Inventory', 'Finances'],
  endpoints: (build) => ({
    getInventoryItems: build.query<any, void>({
      query: () => '/userInventory',
      providesTags: ['Inventory']
    }),
    addOneItemToInventory: build.mutation<any, IAddOneItemPayload>({
      query: (body) => ({
        url: '/userInventory/addItem',
        method: 'PATCH',
        body
      }),
      invalidatesTags: ['Inventory', 'Finances']
    }),
    getFinance: build.query<IFinance, void>({
      query: () => '/finance',
      providesTags: ['Finances']
    })
  })
});

export const { useAddOneItemToInventoryMutation, useGetInventoryItemsQuery, useGetFinanceQuery } = inventoryApi;
