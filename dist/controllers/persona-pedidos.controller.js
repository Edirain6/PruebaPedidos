"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PersonaPedidosController = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
let PersonaPedidosController = class PersonaPedidosController {
    constructor(personaRepository) {
        this.personaRepository = personaRepository;
    }
    async find(id, filter) {
        return this.personaRepository.pedidos(id).find(filter);
    }
    async create(id, pedidos) {
        return this.personaRepository.pedidos(id).create(pedidos);
    }
    async patch(id, pedidos, where) {
        return this.personaRepository.pedidos(id).patch(pedidos, where);
    }
    async delete(id, where) {
        return this.personaRepository.pedidos(id).delete(where);
    }
};
tslib_1.__decorate([
    (0, rest_1.get)('/personas/{id}/pedidos', {
        responses: {
            '200': {
                description: 'Array of Persona has many Pedidos',
                content: {
                    'application/json': {
                        schema: { type: 'array', items: (0, rest_1.getModelSchemaRef)(models_1.Pedidos) },
                    },
                },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__param(1, rest_1.param.query.object('filter')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], PersonaPedidosController.prototype, "find", null);
tslib_1.__decorate([
    (0, rest_1.post)('/personas/{id}/pedidos', {
        responses: {
            '200': {
                description: 'Persona model instance',
                content: { 'application/json': { schema: (0, rest_1.getModelSchemaRef)(models_1.Pedidos) } },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__param(1, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Pedidos, {
                    title: 'NewPedidosInPersona',
                    exclude: ['id'],
                    optional: ['personaId']
                }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], PersonaPedidosController.prototype, "create", null);
tslib_1.__decorate([
    (0, rest_1.patch)('/personas/{id}/pedidos', {
        responses: {
            '200': {
                description: 'Persona.Pedidos PATCH success count',
                content: { 'application/json': { schema: repository_1.CountSchema } },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__param(1, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Pedidos, { partial: true }),
            },
        },
    })),
    tslib_1.__param(2, rest_1.param.query.object('where', (0, rest_1.getWhereSchemaFor)(models_1.Pedidos))),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, Object, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], PersonaPedidosController.prototype, "patch", null);
tslib_1.__decorate([
    (0, rest_1.del)('/personas/{id}/pedidos', {
        responses: {
            '200': {
                description: 'Persona.Pedidos DELETE success count',
                content: { 'application/json': { schema: repository_1.CountSchema } },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__param(1, rest_1.param.query.object('where', (0, rest_1.getWhereSchemaFor)(models_1.Pedidos))),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], PersonaPedidosController.prototype, "delete", null);
PersonaPedidosController = tslib_1.__decorate([
    tslib_1.__param(0, (0, repository_1.repository)(repositories_1.PersonaRepository)),
    tslib_1.__metadata("design:paramtypes", [repositories_1.PersonaRepository])
], PersonaPedidosController);
exports.PersonaPedidosController = PersonaPedidosController;
//# sourceMappingURL=persona-pedidos.controller.js.map