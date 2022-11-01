import { Get, Controller, Post, Body, Res, Param, Put } from '@nestjs/common';
import { PlantationService } from './plantation.service';
import { PlantationModel } from './models/plantation.model';

@Controller('plantation')
export class PlantationController {
  constructor(private readonly service: PlantationService) {}

  @Post()
  async create(@Body() body, @Res() res) {
    const model: PlantationModel = body;
    try {
      if (!model) {
        console.log(body);
        return res.status(400).json({ message: 'Plantação inválida!' });
      }
      const plantation = await this.service.create(model);

      return res.status(201).json(plantation);
    } catch (error) {
      return res
        .status(400)
        .json({ message: 'Ops! Ocorreu um erro ao criar a plantação', error });
    }
  }

  @Put(':id')
  async update(@Param('id') id: number, @Body() body, @Res() res) {
    const model: PlantationModel = body;
    try {
      if (!model) {
        console.log(body);
        return res.status(400).json({ message: 'Plantação inválida!' });
      }

      const plantation = await this.service.update(id, model);
      return res.status(201).json(plantation);
    } catch (error) {
      return res.status(400).json({
        message: 'Ops! Ocorreu um erro ao atualizar a plantação',
        error,
      });
    }
  }

  @Get()
  async findAll(@Res() res): Promise<PlantationModel[]> {
    try {
      const plantation = await this.service.findAll();
      return res.status(200).json(plantation);
    } catch (error) {
      return res.status(400).json({
        message: 'Ops! Ocorreu um erro ao buscar as plantações da colméias',
        error,
      });
    }
  }

  @Get(':id')
  async findByID(@Param() params, @Res() res): Promise<PlantationModel[]> {
    try {
      const plantation = await this.service.findById(params.id);
      return res.status(200).json(plantation);
    } catch (error) {
      return res.status(400).json({
        message: 'Ops! Ocorreu um erro ao buscar as plantações',
        error,
      });
    }
  }
}
