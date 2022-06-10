import { IFinance } from '../interfaces/finance';
import { IAddOneItemPayload } from '../interfaces/inventory';
import { appApi } from './appApi';

export const inventoryApi = appApi.injectEndpoints({
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
    })
  })
});

export const { useAddOneItemToInventoryMutation, useGetInventoryItemsQuery } = inventoryApi;
