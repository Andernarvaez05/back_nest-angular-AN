import { PartialType } from "@nestjs/mapped-types";
import { LoginAuthDto } from "./login-auth.dto";
import { IsEmail, IsNotEmpty, MaxLength, MinLength } from "class-validator";






export class RegisterAuthDto extends PartialType(LoginAuthDto){
        id?: number;
        @IsNotEmpty()
        name: string;
        @IsEmail()
        email:string;
        @MinLength(6)
        @MaxLength(25)
        @IsNotEmpty()
        password:string;
        

}