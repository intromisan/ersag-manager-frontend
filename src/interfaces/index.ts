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
  email: string;
  name: string;
  password: string;
  passwordConfirmation: string;
}
