import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { PlantModel } from './model/plants.model';

@Injectable()
export class PlantService {
    constructor(@InjectModel('Plants') private readonly model: Model<PlantModel>) {}

    async create(model: PlantModel): Promise<PlantModel> {
        const data = new this.model(model);
        return data.save();
    }

    async updatePlant( id: string, plant: PlantModel): Promise<PlantModel> {
        return this.model.findByIdAndUpdate({_id: id}, plant, {new: true}).exec();
    }

    async findAll(): Promise<PlantModel[]> {
        return this.model.find().exec();
    }

    async findById(id: string): Promise<PlantModel> {
        return this.model.findOne({ _id: id}).exec();
    }

    async findByName(name: string): Promise<PlantModel> {
        return this.model.findOne({plant: name}).exec();
    }

    async delete(id: string) {
        return this.model.deleteOne({_id: id});
    }
}
