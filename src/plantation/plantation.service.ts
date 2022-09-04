import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { PlantationModel } from './models/plantation.model';

@Injectable()
export class PlantationService {
  constructor(
    @InjectModel('Plantation') private readonly model: Model<PlantationModel>,
  ) {}

  async create(model: PlantationModel): Promise<PlantationModel> {
    const data = new this.model(model);
    return await data.save();
  }

  async findAll(): Promise<PlantationModel[]> {
    return await this.model.find().exec();
  }

  async findById(id: string): Promise<PlantationModel> {
    return await this.model.findOne({ _id: id }).exec();
  }

  async update(id: Number, model: PlantationModel): Promise<PlantationModel> {
    const plantationUpdate = await this.model.findOne({ _id: id }).exec();
    const { coordenadas, hive, cultures } = model;
    if (coordenadas) {
      plantationUpdate.coordenadas = coordenadas;
    }
    if (hive) {
      plantationUpdate.hive = hive;
    }
    if (cultures) {
      plantationUpdate.cultures = cultures;
    }

    return await plantationUpdate.save();
  }
}
