import { Module, Logger } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Seeder } from './seeder';
import { UserModule } from '../user/user.module';
import { HiveModule } from '../hive/hive.module';
import ENV from '../env';

@Module({
  imports: [
    MongooseModule.forRoot(ENV.db_url, { useNewUrlParser: true }),
    UserModule, 
    HiveModule
  ],
  providers: [Logger, Seeder],
})
export class SeederModule {}