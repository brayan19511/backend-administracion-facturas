import { IsInt, IsString, MinLength } from "class-validator";


export class CreateUsuarioDto {

    @IsString( )
    @MinLength(3)
    NombreUsuario: string;

    
    @IsString( )
    @MinLength(3)
    Correo :string;

    
    @IsString( )
    @MinLength(3)
    ContraUsuario:string ;
    
    @IsString( )
    @MinLength(8)
    Identificacion:string;
    
    @IsString( )
    @MinLength(3) 
    Nombres:string ;
    
    @IsString( )
    @MinLength(3)
    ApellidoPaterno:string ;
    
    @IsString( )
    @MinLength(3)
    ApellidoMaterno:string ;
    
    @IsInt( )
    IdRol:number ;
    
    @IsInt( )
    IdArea:number;

}
