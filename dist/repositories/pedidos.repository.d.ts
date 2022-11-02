import { Getter } from '@loopback/core';
import { DefaultCrudRepository, HasManyRepositoryFactory, HasOneRepositoryFactory } from '@loopback/repository';
import { MonogdbDataSource } from '../datasources';
import { Pedidos, PedidosRelations, Producto, Persona } from '../models';
import { ProductoRepository } from './producto.repository';
import { PersonaRepository } from './persona.repository';
export declare class PedidosRepository extends DefaultCrudRepository<Pedidos, typeof Pedidos.prototype.id, PedidosRelations> {
    protected productoRepositoryGetter: Getter<ProductoRepository>;
    protected personaRepositoryGetter: Getter<PersonaRepository>;
    readonly productos: HasManyRepositoryFactory<Producto, typeof Pedidos.prototype.id>;
    readonly persona: HasOneRepositoryFactory<Persona, typeof Pedidos.prototype.id>;
    constructor(dataSource: MonogdbDataSource, productoRepositoryGetter: Getter<ProductoRepository>, personaRepositoryGetter: Getter<PersonaRepository>);
}
