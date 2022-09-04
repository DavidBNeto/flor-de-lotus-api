import { Controller, Request, Post, UseGuards, Body, Res } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post()
  async login(@Body() body, @Res() res) {
    try {
      const { user } = body;

      // if (!user.id) {
      //   return res.status(400).json({ message: 'Informe o ID!' });
      // }

      if (!user.pin) {
        return res.status(400).json({ message: 'Informe o PIN!' });
      }

      const model = await this.authService.login(user);

      if (!model) {
        return res.status(400).json({ message: 'PIN inválido!' });
      }
      return res.status(200).json(model);
    } catch (error) {
      return res.status(400).json({ message: 'Ops! Ocorreu um erro', error });
    }
  }
}
