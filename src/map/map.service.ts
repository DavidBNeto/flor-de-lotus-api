import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { MapModel } from './models/map.model';

@Injectable()
export class MapService {
  constructor(@InjectModel('Map') private readonly model: Model<MapModel>) {}

  async create(model: MapModel): Promise<MapModel> {
    const data = new this.model(model);
    return await data.save();
  }

  async findAll(): Promise<MapModel[]> {
    return await this.model.find().exec();
  }

  async findById(id: string): Promise<MapModel> {
    return await this.model.findOne({ _id: id }).exec();
  }
}
