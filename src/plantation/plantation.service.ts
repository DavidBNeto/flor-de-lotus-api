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
    return data.save();
  }

  async findAll(): Promise<PlantationModel[]> {
    return this.model.find().exec();
  }

  async findById(id: string): Promise<PlantationModel> {
    return this.model.findOne({ _id: id }).exec();
  }

  async update(id: number, model: PlantationModel): Promise<PlantationModel> {
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

    return plantationUpdate.save();
  }
}
