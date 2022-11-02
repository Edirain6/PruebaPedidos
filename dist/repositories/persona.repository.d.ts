import { Getter } from '@loopback/core';
import { DefaultCrudRepository, HasManyRepositoryFactory } from '@loopback/repository';
import { MonogdbDataSource } from '../datasources';
import { Persona, PersonaRelations, Pedidos } from '../models';
import { PedidosRepository } from './pedidos.repository';
export declare class PersonaRepository extends DefaultCrudRepository<Persona, typeof Persona.prototype.id, PersonaRelations> {
    protected pedidosRepositoryGetter: Getter<PedidosRepository>;
    readonly pedidos: HasManyRepositoryFactory<Pedidos, typeof Persona.prototype.id>;
    constructor(dataSource: MonogdbDataSource, pedidosRepositoryGetter: Getter<PedidosRepository>);
}
