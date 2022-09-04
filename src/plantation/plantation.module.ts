import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { PlantationService } from './plantation.service';
import { PlantationSchema } from './schemas/plantation.schema';
import { PlantationController } from './plantation.controller';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'Plantation', schema: PlantationSchema },
    ]),
  ],
  providers: [PlantationService],
  exports: [PlantationService],
  controllers: [PlantationController],
})
export class PlantationModule {}
