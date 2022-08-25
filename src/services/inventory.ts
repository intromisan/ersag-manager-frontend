import { IFinance } from '../interfaces/finance';
import { IAddOneItemPayload, IInventoryItem, IDeleteItemsPayload } from '../interfaces/inventory';
import { appApi } from './appApi';

export const inventoryApi = appApi.injectEndpoints({
  endpoints: (build) => ({
    getInventoryItems: build.query<IInventoryItem[], void>({
      query: () => '/inventoryItem',
      providesTags: ['Inventory']
    }),
    addOneItemToInventory: build.mutation<IInventoryItem[], IAddOneItemPayload>({
      query: (body) => {
        return {
          url: '/inventoryItem/add',
          method: 'POST',
          body
        };
      },
      invalidatesTags: ['Inventory', 'Finances']
    }),
    removeItemsFromInventory: build.mutation<void, IDeleteItemsPayload>({
      query: (body) => ({
        url: '/inventoryItem/remove',
        method: 'POST',
        body
      }),
      invalidatesTags: ['Inventory', 'Finances']
    })
  })
});

export const { useAddOneItemToInventoryMutation, useGetInventoryItemsQuery, useRemoveItemsFromInventoryMutation } = inventoryApi;
