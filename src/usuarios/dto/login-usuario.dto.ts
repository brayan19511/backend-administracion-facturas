import { IsInt, IsString, MinLength } from "class-validator";


export class LoginUsuarioDto {

    @IsString( )
    @MinLength(3)
    nombreUsuario :string;

    
    @IsString( )
    @MinLength(3)
    contraUsuario:string ;
    
 

}
