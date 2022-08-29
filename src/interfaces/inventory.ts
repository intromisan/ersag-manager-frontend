import { IProduct } from './product';

export interface IAddItemInventory {
  productId: string;
  quantity: number;
  isGift?: boolean;
}

export interface IRemoveItemsPayload {
  productId: string;
  quantity: number;
  isDelete?: boolean;
  isGift?: boolean;
  price?: number;
}

export interface IInventoryItem {
  id: string;
  quantity: number;
  product: IProduct;
}
