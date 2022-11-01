import { Injectable, Logger } from '@nestjs/common';
import { UserService } from '../user/user.service';
import { HiveService } from '../hive/hive.service';
import { users, hives } from './data';

@Injectable()
export class Seeder {
  constructor(
    private readonly logger: Logger,
    private readonly userService: UserService,
    private readonly hiveService: HiveService,
  ) {}

  async seed() {
    try {
      await this.users();
      this.logger.debug('Successfuly completed seeding users...');
    } catch (error) {
      this.logger.error(`Failed seeding users: ${error.message}`);
    }

    try {
      await this.hives();
      this.logger.debug('Successfuly completed seeding hives...');
    } catch (error) {
      this.logger.error(`Failed seeding hives: ${error.message}`);
    }
  }

  async users() {
    for (const model of users) {
      try {
        const alreadySeeded = await this.userService.findById(model._id);
        if (!alreadySeeded) {
          const user = await this.userService.create(model);
          this.logger.debug(`Successfuly completed seeding user: ${user._id}`);
        } else {
          this.logger.debug(
            `User ${alreadySeeded._id} already in the database!`,
          );
        }
      } catch (error) {
        this.logger.error(`Failed seeding user: ${error.message}`);
      }
    }
  }

  async hives() {
    for (const model of hives) {
      try {
        const alreadySeeded = await this.hiveService.findById(model._id);
        if (!alreadySeeded) {
          const hive = await this.hiveService.create(model);
          this.logger.debug(`Successfuly completed seeding hive: ${hive.ip}`);
        } else {
          this.logger.debug(
            `Hive ${alreadySeeded.ip} already in the database!`,
          );
        }
      } catch (error) {
        this.logger.error(`Failed seeding hive: ${error.message}`);
      }
    }
  }
}
