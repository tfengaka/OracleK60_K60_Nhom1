interface BaseUserData {
  fullName: string;
  gender: string;
  address: string;
  phoneNumber: string;
  bod: Date;
  avatar?: any;
}
export interface AuthToken {
  token: string;
}
export interface LoginForm {
  email: string;
  password: string;
}

export interface User extends BaseUserData {
  id: string;
  email: string;
}

export type RegisterForm = BaseUserData & LoginForm;
