import {Column, Entity, OneToOne, PrimaryGeneratedColumn} from "typeorm";
import { Persona } from "../../persona/entities/persona.entity";

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id:number

    @Column()
    mail:string;

    @Column()
    password:string;    

    @OneToOne(() => Persona, persona => persona.user, {cascade:true})
    persona: Persona

}