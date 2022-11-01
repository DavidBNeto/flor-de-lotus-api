import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CulturesModel } from './models/cultures.model';

@Injectable()
export class CulturesService {
  constructor(
    @InjectModel('Cultures') private readonly model: Model<CulturesModel>,
  ) {}

  async create(model: CulturesModel): Promise<CulturesModel> {
    const data = new this.model(model);
    return data.save();
  }

  async findAll(): Promise<CulturesModel[]> {
    return this.model.find().exec();
  }

  async findById(id: string): Promise<CulturesModel> {
    return this.model.findOne({ _id: id }).exec();
  }

  async delete(id: string): Promise<CulturesModel> {
    return this.model.findByIdAndRemove({ _id: id }).exec();
  }

  async update(id: string, model: CulturesModel): Promise<CulturesModel> {
    const cultureUpdate = await this.model.findOne({ _id: id }).exec();
    const { nome, coordenadas, irrigacao } = model;
    if (nome) {
      cultureUpdate.nome = nome;
    }
    if (coordenadas) {
      cultureUpdate.coordenadas = coordenadas;
    }
    if (irrigacao) {
      cultureUpdate.irrigacao = irrigacao;
    }

    return cultureUpdate.save();
  }
}
