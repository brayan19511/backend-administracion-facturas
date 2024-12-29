import { Module } from '@nestjs/common';
import { BasicConsultaService } from './basic-consulta.service';
import { BasicConsultaController } from './basic-consulta.controller';

@Module({
  controllers: [BasicConsultaController],
  providers: [BasicConsultaService],
})
export class BasicConsultaModule {}
