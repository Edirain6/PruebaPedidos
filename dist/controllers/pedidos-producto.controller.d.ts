import { Count, Filter, Where } from '@loopback/repository';
import { Pedidos, Producto } from '../models';
import { PedidosRepository } from '../repositories';
export declare class PedidosProductoController {
    protected pedidosRepository: PedidosRepository;
    constructor(pedidosRepository: PedidosRepository);
    find(id: string, filter?: Filter<Producto>): Promise<Producto[]>;
    create(id: typeof Pedidos.prototype.id, producto: Omit<Producto, 'id'>): Promise<Producto>;
    patch(id: string, producto: Partial<Producto>, where?: Where<Producto>): Promise<Count>;
    delete(id: string, where?: Where<Producto>): Promise<Count>;
}
