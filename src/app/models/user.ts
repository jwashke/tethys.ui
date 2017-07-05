import { IUser } from '../interfaces/';

export class User implements IUser {
  name: string;
  email: string;
  password: string;
}
