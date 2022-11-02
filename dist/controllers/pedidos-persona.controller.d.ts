import { Count, Filter, Where } from '@loopback/repository';
import { Pedidos, Persona } from '../models';
import { PedidosRepository } from '../repositories';
export declare class PedidosPersonaController {
    protected pedidosRepository: PedidosRepository;
    constructor(pedidosRepository: PedidosRepository);
    get(id: string, filter?: Filter<Persona>): Promise<Persona>;
    create(id: typeof Pedidos.prototype.id, persona: Omit<Persona, 'id'>): Promise<Persona>;
    patch(id: string, persona: Partial<Persona>, where?: Where<Persona>): Promise<Count>;
    delete(id: string, where?: Where<Persona>): Promise<Count>;
}
