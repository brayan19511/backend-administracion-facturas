import { Module } from '@nestjs/common';
import { BasicConsultaModule } from './basic-consulta/basic-consulta.module';
import { UsuariosModule } from './usuarios/usuarios.module';

@Module({
  imports: [BasicConsultaModule, UsuariosModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
