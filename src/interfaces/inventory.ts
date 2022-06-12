import { IProduct } from './product';

export interface IAddOneItemPayload {
  productId: string;
  itemAmount: number;
}

export interface IRemoveItemsPayload {
  productId: string;
  itemAmount: number;
  isPresent?: boolean;
  isDelete?: boolean;
}

export interface IInventoryItem {
  itemAmount: number;
  _id: string;
  product: IProduct;
}

export interface IInventory {
  _id: string;
  products: IInventoryItem[];
}
