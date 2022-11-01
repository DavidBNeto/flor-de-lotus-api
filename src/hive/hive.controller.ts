import { Get, Controller, Post, Body, Res, Param, Put } from '@nestjs/common';
import { HiveService } from './hive.service';
import { HiveModel } from './models/hive.model';

@Controller('hive')
export class HiveController {
  constructor(private readonly service: HiveService) {}

  @Post()
  async create(@Body() body, @Res() res) {
    const model: HiveModel = body;
    try {
      if (!model) {
        console.log(body);
        return res.status(400).json({ message: 'Colméia inválida!' });
      }

      const hive = await this.service.create(model);
      return res.status(201).json(hive);
    } catch (error) {
      return res
        .status(400)
        .json({ message: 'Ops! Ocorreu um erro ao criar a colméia', error });
    }
  }

  @Put(':id')
  async update(@Param('id') id: number, @Body() body, @Res() res) {
    const model: HiveModel = body;
    try {
      if (!model) {
        console.log(body);
        return res.status(400).json({ message: 'Colméia inválida!' });
      }

      const hive = await this.service.update(id, model);
      return res.status(201).json(hive);
    } catch (error) {
      return res.status(400).json({
        message: 'Ops! Ocorreu um erro ao atualizar a colméia',
        error,
      });
    }
  }

  @Get()
  async findAll(@Res() res): Promise<HiveModel[]> {
    try {
      const hive = await this.service.findAll();
      return res.status(200).json(hive);
    } catch (error) {
      return res
        .status(400)
        .json({ message: 'Ops! Ocorreu um erro ao buscar as colmeias', error });
    }
  }

  @Get(':id')
  async findByID(@Param() params, @Res() res): Promise<HiveModel[]> {
    try {
      const hive = await this.service.findById(params.id);
      return res.status(200).json(hive);
    } catch (error) {
      return res
        .status(400)
        .json({ message: 'Ops! Ocorreu um erro ao buscar as colmeias', error });
    }
  }
}
