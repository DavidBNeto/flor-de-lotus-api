import { Get, Controller, Post, Body, Res} from '@nestjs/common';
import { UserService } from './user.service';
import { UserModel } from './models/user.model';
import { typesRole } from './schemas/user.schema';

@Controller('user')
export class UserController {
  constructor(private readonly service: UserService) {}

  @Post()
  async create(@Body() body, @Res() res) {
    const model: UserModel = body.user;
    try {

      if (!model) {
        return res.status(400).json({ message: 'Usuário inválido!' });
      }

      const { access_lvl, pin } = model;

      if (access_lvl && typesRole.indexOf(access_lvl) < 0) {
        return res.status(400).json({ message: 'Nível de acesso inválido!' });
      }

      if (!pin) {
        return res.status(400).json({ message: 'O PIN é obrigatório!' });
      }

      if (pin.length !== 4 || !pin.match(/\d+/g)) {
        return res
          .status(400)
          .json({ message: 'O PIN deve ter 4 caracteres númericos!' });
      }

      const user = await this.service.create(model);
      return res.status(201).json(user);
    } catch (error) {
      return res
        .status(400)
        .json({ message: 'Ops! Ocorreu um erro ao criar o usuário', error });
    }
  }

  @Get()
  async findAll(@Res() res): Promise<UserModel[]> {
    try {
      const users = await this.service.findAll();
      return res.status(200).json(users);
    } catch (error) {
      return res
        .status(400)
        .json({ message: 'Ops! Ocorreu um erro ao buscar os usuários', error });
    }
  }

  @Get()
  async find(user_id: string, @Res() res): Promise<UserModel[]> {
    try {
      const user = await this.service.findById(user_id);
      return res.status(200).json(user);
    } catch (error) {
      return res
        .status(400)
        .json({ message: 'Ops! Ocorreu um erro ao buscar o usuário', error });
    }
  }
}
