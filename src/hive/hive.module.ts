import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { HiveService } from './hive.service';
import { HiveSchema } from './schemas/hive.schema';
import { HiveController } from './hive.controller';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Hive', schema: HiveSchema }])],
  providers: [HiveService],
  exports: [HiveService],
  controllers: [HiveController],
})
export class HiveModule {}
