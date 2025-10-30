import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Cliente } from "../../cliente/entities/cliente.entity";
import { PedidoProducto } from "./pedido.producto.entity";

@Entity('pedidos')
export class Pedido {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    fecha: String;

    @Column()
    estado: number;

    @Column()
    observaciones: string;

    @ManyToOne(() => Cliente)
    cliente: Cliente;

    @OneToMany(() => PedidoProducto,pedprod=>pedprod.pedido )
    pedidoProducto: PedidoProducto[];


}
