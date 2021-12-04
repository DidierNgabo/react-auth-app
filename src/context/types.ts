export interface IUser {
  name: string;
  username: string;
  email: string;
  password: string;
  confirmed: boolean;
}

export interface ILogin {
  identifier: string;
  password: string;
}

export type AuthContextState = {
  token: string | null;
  register: (user: IUser) => void;
  login: (user: ILogin) => void;
};
