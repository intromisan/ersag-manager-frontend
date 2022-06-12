import { IFinance } from '../interfaces/finance';
import { IAddOneItemPayload, IInventory, IRemoveItemsPayload } from '../interfaces/inventory';
import { appApi } from './appApi';

export const inventoryApi = appApi.injectEndpoints({
  endpoints: (build) => ({
    getInventoryItems: build.query<IInventory, void>({
      query: () => '/userInventory',
      providesTags: ['Inventory']
    }),
    addOneItemToInventory: build.mutation<IInventory, IAddOneItemPayload>({
      query: (body) => ({
        url: '/userInventory/addItem',
        method: 'PATCH',
        body
      }),
      invalidatesTags: ['Inventory', 'Finances']
    }),
    removeItemsFromInventory: build.mutation<IInventory, IRemoveItemsPayload>({
      query: (body) => ({
        url: '/userInventory/removeItem',
        method: 'PATCH',
        body
      }),
      invalidatesTags: ['Inventory', 'Finances']
    })
  })
});

export const { useAddOneItemToInventoryMutation, useGetInventoryItemsQuery, useRemoveItemsFromInventoryMutation } = inventoryApi;
