import {inject, Getter} from '@loopback/core';
import {DefaultCrudRepository, repository, HasManyRepositoryFactory, HasOneRepositoryFactory} from '@loopback/repository';
import {MonogdbDataSource} from '../datasources';
import {Pedidos, PedidosRelations, Producto, Persona} from '../models';
import {ProductoRepository} from './producto.repository';
import {PersonaRepository} from './persona.repository';

export class PedidosRepository extends DefaultCrudRepository<
  Pedidos,
  typeof Pedidos.prototype.id,
  PedidosRelations
> {

  public readonly productos: HasManyRepositoryFactory<Producto, typeof Pedidos.prototype.id>;

  public readonly persona: HasOneRepositoryFactory<Persona, typeof Pedidos.prototype.id>;

  constructor(
    @inject('datasources.monogdb') dataSource: MonogdbDataSource, @repository.getter('ProductoRepository') protected productoRepositoryGetter: Getter<ProductoRepository>, @repository.getter('PersonaRepository') protected personaRepositoryGetter: Getter<PersonaRepository>,
  ) {
    super(Pedidos, dataSource);
    this.persona = this.createHasOneRepositoryFactoryFor('persona', personaRepositoryGetter);
    this.registerInclusionResolver('persona', this.persona.inclusionResolver);
    this.productos = this.createHasManyRepositoryFactoryFor('productos', productoRepositoryGetter,);
    this.registerInclusionResolver('productos', this.productos.inclusionResolver);
  }
}
