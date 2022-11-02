import { Entity } from '@loopback/repository';
import { Pedidos } from './pedidos.model';
export declare class Persona extends Entity {
    id?: string;
    nombre: string;
    apellidos: string;
    correo: string;
    celular: string;
    clave: string;
    pedidos: Pedidos[];
    pedidosId?: string;
    constructor(data?: Partial<Persona>);
}
export interface PersonaRelations {
}
export declare type PersonaWithRelations = Persona & PersonaRelations;
