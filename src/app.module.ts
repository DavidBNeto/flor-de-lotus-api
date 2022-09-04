import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { PlantModule } from './plants/plant.module';
import { HiveModule } from './hive/hive.module';
import { MapModule } from './map/map.module';
import { CulturesModule } from './cultures/cultures.module';
import { PlantationModule } from './plantation/plantation.module';
import ENV from './env';

@Module({
  imports: [
    MongooseModule.forRoot(ENV.db_url, { useNewUrlParser: true }),
    AuthModule,
    UserModule,
    PlantModule,
    HiveModule,
    MapModule,
    CulturesModule,
    PlantationModule,
  ],
})
export class AppModule {}
