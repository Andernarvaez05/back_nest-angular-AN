import { Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Categoria } from "../../categoria/entities/categoria.entity";
import { PedidoProducto } from "../../pedido/entities/pedido.producto.entity";


@Entity('productos')

export class Producto {
    @PrimaryGeneratedColumn()
    id: number;

    nombre: string;

    precio: number;

    stock: number;

    imagen: string;

    descripcion: string;

    estado: boolean;


    @ManyToOne(() =>Categoria, (cat) => cat.productos)
    categoria: Categoria;

    @OneToMany(() => PedidoProducto, pedprod => pedprod.producto)
    pedidoProducto: PedidoProducto[];

}
