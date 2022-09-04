import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Plantmodel } from './model/plants.model';


@Injectable()
export class PlantService{
    constructor(@InjectModel('Plants') private readonly model: Model<Plantmodel>) {}

    async create(model: Plantmodel): Promise<Plantmodel> {
        const data = new this.model(model);
        return await data.save();
    }

    async updatePlant( id: string): Promise<Plantmodel>{
        return await this.model.findByIdAndUpdate({_id: id}, this.model.body, {new:true}).exec();
    }

    async findAll(): Promise<Plantmodel[]> {
        return await this.model.find().exec();
    }

    async findById(id: string): Promise<Plantmodel> {
        return await this.model.findOne({ _id: id}).exec();
    }

    async findByName(name: string): Promise<Plantmodel> {
        return await this.model.findOne({plant: name}).exec();
    }

    async delete(id: string){
        return await this.model.deleteOne({_id: id});
    }    

}