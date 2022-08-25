import { IProduct } from './product';

export interface IAddOneItemPayload {
  productId: string;
  quantity: number;
}

export interface IDeleteItemsPayload {
  productId: string;
  quantity: number;
}

export interface IInventoryItem {
  id: string;
  quantity: number;
  product: IProduct;
}
