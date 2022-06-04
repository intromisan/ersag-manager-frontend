export interface IUserSession {
  accessToken: string;
  refreshToken: string;
}

export interface IUser {
  email: string;
  name: string;
  password: string;
  passwordConfirmation: string;
}
