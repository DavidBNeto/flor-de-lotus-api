import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { HiveModel } from './models/hive.model';

@Injectable()
export class HiveService {
  constructor(@InjectModel('Hive') private readonly model: Model<HiveModel>) {}

  async create(model: HiveModel): Promise<HiveModel> {
    const data = new this.model(model);
    return data.save();
  }
  async update(id: number, model: HiveModel): Promise<HiveModel> {
    const hiveUpdate = await this.model.findOne({ _id: id }).exec();
    const { x, y, ip, status } = model;
    if (x) {
      hiveUpdate.x = x;
    }
    if (y) {
      hiveUpdate.y = y;
    }
    if (ip) {
      hiveUpdate.ip = ip;
    }
    if (status) {
      hiveUpdate.status = status;
    }

    return hiveUpdate.save();
  }
  async findAll(): Promise<HiveModel[]> {
    return this.model.find().exec();
  }

  async findById(id: string): Promise<HiveModel> {
    return this.model.findOne({ _id: id }).exec();
  }
}
