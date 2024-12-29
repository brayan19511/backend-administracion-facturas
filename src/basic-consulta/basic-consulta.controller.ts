import { Controller, Get } from '@nestjs/common';
import { BasicConsultaService } from './basic-consulta.service';

@Controller('basic-consulta')
export class BasicConsultaController {
  constructor(private readonly basicConsultaService: BasicConsultaService) {}


  @Get('hello')
  async hellow(){
    return this.basicConsultaService.hellow();
  }



}
