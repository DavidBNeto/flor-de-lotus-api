import { Injectable } from '@nestjs/common';
import { UserService } from '../user/user.service';
import { JwtService } from '@nestjs/jwt';
import { JwtPayload } from './interfaces/jwt-payload.interface';
import * as crypto from 'crypto';
import { UserModel } from '../user/models/user.model';

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UserService,
    private readonly jwtService: JwtService,
  ) {}

  async login(model: UserModel) {
    const payload = { sub: model._id };

    const user = await this.validateUser(model);

    if (!user) {
      return null;
    }

    return {
      access_token: this.jwtService.sign(payload),
    };
  }

  async validateUser(payload: JwtPayload): Promise<UserModel> {
    try {
      const hash = crypto
        .createHmac('sha256', payload.pin)
        .update('The cake is a lie')
        .digest('hex');
      payload.pin = hash;
      const user = await this.userService.findByPIN(payload.pin.trim());
      if (user.pin.trim() == payload.pin.trim()) {
        return user;
      } else {
        return null;
      }
    } catch (error) {
      return null;
    }
  }
}
