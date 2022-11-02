import {Entity, model, property, hasMany, hasOne} from '@loopback/repository';
import {Producto} from './producto.model';
import {Persona} from './persona.model';

@model()
export class Pedidos extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: true,
  })
  id?: string;

  @property({
    type: 'number',
    required: true,
  })
  cantidad: number;

  @property({
    type: 'number',
    required: true,
  })
  total: number;

  @property({
    type: 'string',
    required: true,
  })
  estado: string;

  @property({
    type: 'string',
  })
  personaId?: string;

  @hasMany(() => Producto)
  productos: Producto[];

  @hasOne(() => Persona)
  persona: Persona;

  constructor(data?: Partial<Pedidos>) {
    super(data);
  }
}

export interface PedidosRelations {
  // describe navigational properties here
}

export type PedidosWithRelations = Pedidos & PedidosRelations;
