import { Entity } from '@loopback/repository';
export declare class Producto extends Entity {
    id?: string;
    nombre: string;
    precio: string;
    imagen: string;
    pedidosId?: string;
    constructor(data?: Partial<Producto>);
}
export interface ProductoRelations {
}
export declare type ProductoWithRelations = Producto & ProductoRelations;
