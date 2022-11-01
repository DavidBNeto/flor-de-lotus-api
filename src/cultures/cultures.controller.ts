import {Get,
        Controller,
        Post,
        Body,
        Res,
        Param,
        Put,
        Delete} from '@nestjs/common';
import { CulturesService } from './cultures.service';
import { CulturesModel } from './models/cultures.model';

@Controller('culture')
export class CulturesController {
  constructor(private readonly service: CulturesService) {}

  @Post()
  async create(@Body() body, @Res() res) {
    const model: CulturesModel = body;
    try {
      if (!model) {
        console.log(body);
        return res.status(400).json({ message: 'Cultura inválida!' });
      }

      const cultures = await this.service.create(model);
      return res.status(201).json(cultures);
    } catch (error) {
      return res
        .status(400)
        .json({ message: 'Ops! Ocorreu um erro ao criar a cultura', error });
    }
  }

  @Get()
  async findAll(@Res() res): Promise<CulturesModel[]> {
    try {
      const cultures = await this.service.findAll();
      return res.status(200).json(cultures);
    } catch (error) {
      return res
        .status(400)
        .json({ message: 'Ops! Ocorreu um erro ao buscar as culturas', error });
    }
  }

  @Get(':id')
  async findByID(@Param() params, @Res() res): Promise<CulturesModel[]> {
    try {
      const cultures = await this.service.findById(params.id);
      return res.status(200).json(cultures);
    } catch (error) {
      return res
        .status(400)
        .json({ message: 'Ops! Ocorreu um erro ao buscar as culturas', error });
    }
  }

  @Put(':id')
  async update(
    @Param('id') id: string,
    @Res() res,
    @Body() body,
  ): Promise<CulturesModel> {
    try {
      return res.status(200).json({ message: 'Alterado com sucesso!' });
    } catch (error) {
      return res.status(400).json({
        message: 'Ops! Ocorreu um erro ao alterar as culturas',
        error,
      });
    }
  }

  @Delete(':id')
  async delete(@Param('id') id: string, @Res() res): Promise<CulturesModel> {
    try {
      return res.status(200).json({ message: 'Removido com sucesso!' });
    } catch (error) {
      return res
        .status(400)
        .json({ message: 'Ops! Ocorreu um erro ao buscar as culturas', error });
    }
  }
}
