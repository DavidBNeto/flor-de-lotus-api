import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { UserModel } from './models/user.model';
import * as crypto from 'crypto';

@Injectable()
export class UserService {
  constructor(@InjectModel('User') private readonly model: Model<UserModel>) {}

  async deleteById(id: string): Promise<UserModel> {
    return this.model.findByIdAndDelete(id);
  }

  async create(model: UserModel): Promise<UserModel> {
    const hash = crypto
      .createHmac('sha256', model.pin)
      .update('The cake is a lie')
      .digest('hex');
    model.pin = hash;
    const data = new this.model(model);
    return data.save();
  }

  async findAll(): Promise<UserModel[]> {
    return this.model.find().exec();
  }

  async findById(id: string): Promise<UserModel> {
    return this.model.findOne({ _id: id }).exec();
  }

  async findByPIN(pin: string): Promise<UserModel> {
    return this.model.findOne({ pin: pin }).exec();
  }
}
