import { IProduct } from './product';

export interface IAddOneItemPayload {
  productId: string;
  itemAmount: number;
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
