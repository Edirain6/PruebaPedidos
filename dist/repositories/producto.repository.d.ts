import { DefaultCrudRepository } from '@loopback/repository';
import { MonogdbDataSource } from '../datasources';
import { Producto, ProductoRelations } from '../models';
export declare class ProductoRepository extends DefaultCrudRepository<Producto, typeof Producto.prototype.id, ProductoRelations> {
    constructor(dataSource: MonogdbDataSource);
}
