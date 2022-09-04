import {Get, Controller, Post, Body, Res, Param, Put, Catch, Delete} from '@nestjs/common';
import {PlantService} from './plant.service';
import {Plantmodel} from './model/plants.model';


@Controller('plant')
export class PlantController{
    constructor(private readonly service: PlantService) {}

    @Post()
    async Create(@Body() body, @Res() res){
        const model: Plantmodel = body;

        try{
            if(!model) {
                return res.status(400).json({message: 'Planta inválida!'});
            }

            const plant = await this.service.create(model);
            return res.status(201).json(plant)
        } catch (error){
            return res.status(400).json({message: 'Ocorreu um erro ao criar sua planta'});
        }                
    }

    @Get()
    async findAll(@Res() res): Promise<Plantmodel[]>{
        try{            
            const plants = await this.service.findAll();
            return res.status(200).json(plants);
        } catch (error){
            return res.status(400).json({message: 'Ocorreu um erro ao buscar a plantas', error});
        }
    }
    
    @Get(":id")
    async findOne(@Res() res, @Param("id") id: string,): Promise<Plantmodel>{
        try{
            const plant = await this.service.findById(id);
            return res.status(200).json(plant);
        } catch (error){
            return res.status(400).json({message: 'Ocorreu um erro ao buscar a planta', error});
        }        
    }

     @Put(":id/edit") 
     async update(@Param("id") id: string, @Res() res): Promise<Plantmodel>{         
         return this.service.updatePlant(id);                                                
    }  

    @Delete(":id/delete")
    async delete( @Param("id") id: string): Promise<any>{        
       return this.service.delete(id);
    }
}
