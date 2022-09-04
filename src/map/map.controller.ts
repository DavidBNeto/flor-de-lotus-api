import { Get, Controller, Post, Body, Res, Param, Put } from '@nestjs/common';
import { MapService } from './map.service';
import { MapModel } from './models/map.model';

@Controller('map')
export class MapController {
  constructor(private readonly service: MapService) {}

  @Post()
  async create(@Body() body, @Res() res) {
    const model: MapModel = body;
    try {
      if (!model) {
        console.log(body);
        return res.status(400).json({ message: 'Mapa inválido!' });
      }
      const map = await this.service.create(model);

      return res.status(201).json(map);
    } catch (error) {
      return res
        .status(400)
        .json({ message: 'Ops! Ocorreu um erro ao criar o mapa', error });
    }
  }

  @Get()
  async findAll(@Res() res): Promise<MapModel[]> {
    try {
      const map = await this.service.findAll();
      return res.status(200).json(map);
    } catch (error) {
      return res.status(400).json({
        message: 'Ops! Ocorreu um erro ao buscar os mapas da colméias',
        error,
      });
    }
  }

  @Get(':id')
  async findByID(@Param() params, @Res() res): Promise<MapModel[]> {
    try {
      const map = await this.service.findById(params.id);
      return res.status(200).json(map);
    } catch (error) {
      return res
        .status(400)
        .json({ message: 'Ops! Ocorreu um erro ao buscar os mapas', error });
    }
  }
}
