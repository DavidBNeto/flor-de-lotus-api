import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { PlantService } from './plant.service';
import { PlantsSchema } from './schemas/plants.schema';
import { PlantController } from './plants.controller';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Plants', schema: PlantsSchema }])],
  providers: [PlantService],
  exports: [PlantService],
  controllers: [PlantController],
})
export class PlantModule {}