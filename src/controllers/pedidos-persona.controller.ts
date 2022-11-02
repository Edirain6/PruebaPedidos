import {
  Count,
  CountSchema,
  Filter,
  repository,
  Where,
} from '@loopback/repository';
import {
  del,
  get,
  getModelSchemaRef,
  getWhereSchemaFor,
  param,
  patch,
  post,
  requestBody,
} from '@loopback/rest';
import {
  Pedidos,
  Persona,
} from '../models';
import {PedidosRepository} from '../repositories';

export class PedidosPersonaController {
  constructor(
    @repository(PedidosRepository) protected pedidosRepository: PedidosRepository,
  ) { }

  @get('/pedidos/{id}/persona', {
    responses: {
      '200': {
        description: 'Pedidos has one Persona',
        content: {
          'application/json': {
            schema: getModelSchemaRef(Persona),
          },
        },
      },
    },
  })
  async get(
    @param.path.string('id') id: string,
    @param.query.object('filter') filter?: Filter<Persona>,
  ): Promise<Persona> {
    return this.pedidosRepository.persona(id).get(filter);
  }

  @post('/pedidos/{id}/persona', {
    responses: {
      '200': {
        description: 'Pedidos model instance',
        content: {'application/json': {schema: getModelSchemaRef(Persona)}},
      },
    },
  })
  async create(
    @param.path.string('id') id: typeof Pedidos.prototype.id,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Persona, {
            title: 'NewPersonaInPedidos',
            exclude: ['id'],
            optional: ['pedidosId']
          }),
        },
      },
    }) persona: Omit<Persona, 'id'>,
  ): Promise<Persona> {
    return this.pedidosRepository.persona(id).create(persona);
  }

  @patch('/pedidos/{id}/persona', {
    responses: {
      '200': {
        description: 'Pedidos.Persona PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async patch(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Persona, {partial: true}),
        },
      },
    })
    persona: Partial<Persona>,
    @param.query.object('where', getWhereSchemaFor(Persona)) where?: Where<Persona>,
  ): Promise<Count> {
    return this.pedidosRepository.persona(id).patch(persona, where);
  }

  @del('/pedidos/{id}/persona', {
    responses: {
      '200': {
        description: 'Pedidos.Persona DELETE success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async delete(
    @param.path.string('id') id: string,
    @param.query.object('where', getWhereSchemaFor(Persona)) where?: Where<Persona>,
  ): Promise<Count> {
    return this.pedidosRepository.persona(id).delete(where);
  }
}
