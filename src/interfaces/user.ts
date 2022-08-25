export interface IUserSession {
  access_token: string;
  // refreshToken: string;
}

export interface IUser {
  email: string;
  name: string;
  password: string;
  passwordConfirmation: string;
}
