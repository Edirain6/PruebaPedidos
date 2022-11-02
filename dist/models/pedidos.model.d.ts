import { Entity } from '@loopback/repository';
import { Producto } from './producto.model';
import { Persona } from './persona.model';
export declare class Pedidos extends Entity {
    id?: string;
    cantidad: number;
    total: number;
    estado: string;
    personaId?: string;
    productos: Producto[];
    persona: Persona;
    constructor(data?: Partial<Pedidos>);
}
export interface PedidosRelations {
}
export declare type PedidosWithRelations = Pedidos & PedidosRelations;
