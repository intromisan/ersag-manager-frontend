export interface Product {
  _id: string;
  productId: string;
  name: string;
  code: string;
  volume: string;
  price: string;
  withDevice?: boolean;
  image?: string;
}
