import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CulturesService } from './cultures.service';
import { CulturesSchema } from './schemas/cultures.schema';
import { CulturesController } from './cultures.controller';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Cultures', schema: CulturesSchema }]),
  ],
  providers: [CulturesService],
  exports: [CulturesService],
  controllers: [CulturesController],
})
export class CulturesModule {}
