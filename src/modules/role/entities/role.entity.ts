import { Entity, Column, JoinTable, PrimaryGeneratedColumn, ManyToMany } from "typeorm";
import { User } from "../../users/entities/user.entity";

@Entity('roles')
export class Role {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    nombre: string;

    @Column()
    detalle: string;

    @ManyToMany(() => User)
    @JoinTable({name:'role_user'})
    users: User[]
}
