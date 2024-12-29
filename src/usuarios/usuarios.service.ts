import { Injectable, OnModuleInit, UnauthorizedException } from '@nestjs/common';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';
import { PrismaClient } from '@prisma/client';
import { LoginUsuarioDto } from './dto/login-usuario.dto';

@Injectable()
export class UsuariosService extends PrismaClient implements OnModuleInit {
  async onModuleInit() {
    await this.$connect();
  }

  // Crear validador de usuario existe

  async create(createUsuarioDto: CreateUsuarioDto) {
    // console.log(createUsuarioDto);

    return await this.uSUARIO.create({ data: createUsuarioDto });
  }

  findAll() {
    return this.uSUARIO.findMany();
  }

  async findOne(id: number) {
    return await this.uSUARIO.findMany({ where: { IdUsuario: id } });
  }

  async update(id: number, updateUsuarioDto: UpdateUsuarioDto) {
    return await this.uSUARIO.update({
      data: updateUsuarioDto,
      where: { IdUsuario: id },
    });
  }

  async remove(id: number) {
    return await this.uSUARIO.update({
      data: { activo: false },
      where: { IdUsuario: id },
    });
  }

  async login(loginusuario: LoginUsuarioDto) {
    const { nombreUsuario, contraUsuario } = loginusuario;

    const user = await this.uSUARIO.findFirst({
      where: { NombreUsuario: nombreUsuario, ContraUsuario: contraUsuario },
      select:{IdUsuario:true,NombreUsuario:true,Nombres:true,ApellidoPaterno:true,ApellidoMaterno:true,Correo:true,ContraUsuario:false,AREA:{select:{IdArea:true,Descripcion:true}},ROLESUSUARIO:{select:{IdRol:true,Descripcion:true}}}
    });
// añadir incriptacion de pássword
    if (!user) throw new UnauthorizedException("Credenciales no son validas !!")

    
    return user;
    // return await this.uSUARIO.findMany({where:{IdUsuario:id}})
  }
}
