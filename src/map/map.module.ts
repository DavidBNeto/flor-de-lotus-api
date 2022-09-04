import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { MapService } from './map.service';
import { MapSchema } from './schemas/map.schema';
import { MapController } from './map.controller';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Map', schema: MapSchema }])],
  providers: [MapService],
  exports: [MapService],
  controllers: [MapController],
})
export class MapModule {}
