import { IProduct } from './product';

export interface IAddOneItemPayload {
  productId: string;
  quantity: number;
}

export interface IRemoveItemsPayload {
  productId: string;
  quantity: number;
  isPresent?: boolean;
  isDelete?: boolean;
}

export interface IInventoryItem {
  id: string;
  quantity: number;
  product: IProduct;
}
