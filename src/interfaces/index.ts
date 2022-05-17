export interface Product {
  _id: string;
  name: string;
  code: string;
  volume: string;
  price: string;
  withDevice?: boolean;
  image?: string;
}

export interface IUser {
  uid: string;
  name: string;
}
