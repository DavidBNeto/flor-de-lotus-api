import { UserModel } from "../../user/models/user.model";

export interface JwtPayload {
    _id: string;
    pin: string;
  }

export interface AuthUser{
  user: UserModel;
  token: string;
}