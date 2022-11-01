import * as mongoose from 'mongoose';
import { UserModel } from '../user/models/user.model';
import { HiveModel } from '../hive/models/hive.model';

export const users: UserModel[] = [
  {
    _id: '000000000000000000000001',
    pin: '0000',
    access_lvl: 'admin',
  },
];

export const hives: HiveModel[] = [
  {
    _id: '000000000000000000000001',
    x: '1',
    y: '1',
    ip: '127.0.0.2',
    status: true,
  },
  {
    _id: '000000000000000000000002',
    x: '1',
    y: '2',
    ip: '127.0.0.1',
    status: true,
  },
  {
    _id: '000000000000000000000003',
    x: '1',
    y: '3',
    ip: '127.0.0.3',
    status: true,
  },
];
