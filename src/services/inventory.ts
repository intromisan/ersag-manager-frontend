import { IDashboardData } from '../interfaces/finance';
import { IInventoryItem, IRemoveItemsPayload, IAddItemInventory } from '../interfaces/inventory';
import { appApi } from './appApi';

export const inventoryApi = appApi.injectEndpoints({
  endpoints: (build) => ({
    getInventoryItems: build.query<IInventoryItem[], void>({
      query: () => '/inventoryItem',
      providesTags: ['Inventory']
    }),
    addItemInventory: build.mutation<void, IAddItemInventory>({
      query: (body) => {
        return {
          url: '/inventoryItem/add',
          method: 'POST',
          body
        };
      },
      invalidatesTags: ['Inventory', 'Dashboard']
    }),
    removeItemsFromInventory: build.mutation<void, IRemoveItemsPayload>({
      query: (body) => ({
        url: '/inventoryItem/remove',
        method: 'POST',
        body
      }),
      invalidatesTags: ['Inventory', 'Dashboard']
    })
  })
});

export const { useGetInventoryItemsQuery, useRemoveItemsFromInventoryMutation, useAddItemInventoryMutation } = inventoryApi;
