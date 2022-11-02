"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PedidosProductoController = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
let PedidosProductoController = class PedidosProductoController {
    constructor(pedidosRepository) {
        this.pedidosRepository = pedidosRepository;
    }
    async find(id, filter) {
        return this.pedidosRepository.productos(id).find(filter);
    }
    async create(id, producto) {
        return this.pedidosRepository.productos(id).create(producto);
    }
    async patch(id, producto, where) {
        return this.pedidosRepository.productos(id).patch(producto, where);
    }
    async delete(id, where) {
        return this.pedidosRepository.productos(id).delete(where);
    }
};
tslib_1.__decorate([
    (0, rest_1.get)('/pedidos/{id}/productos', {
        responses: {
            '200': {
                description: 'Array of Pedidos has many Producto',
                content: {
                    'application/json': {
                        schema: { type: 'array', items: (0, rest_1.getModelSchemaRef)(models_1.Producto) },
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
], PedidosProductoController.prototype, "find", null);
tslib_1.__decorate([
    (0, rest_1.post)('/pedidos/{id}/productos', {
        responses: {
            '200': {
                description: 'Pedidos model instance',
                content: { 'application/json': { schema: (0, rest_1.getModelSchemaRef)(models_1.Producto) } },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__param(1, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Producto, {
                    title: 'NewProductoInPedidos',
                    exclude: ['id'],
                    optional: ['pedidosId']
                }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], PedidosProductoController.prototype, "create", null);
tslib_1.__decorate([
    (0, rest_1.patch)('/pedidos/{id}/productos', {
        responses: {
            '200': {
                description: 'Pedidos.Producto PATCH success count',
                content: { 'application/json': { schema: repository_1.CountSchema } },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__param(1, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Producto, { partial: true }),
            },
        },
    })),
    tslib_1.__param(2, rest_1.param.query.object('where', (0, rest_1.getWhereSchemaFor)(models_1.Producto))),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, Object, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], PedidosProductoController.prototype, "patch", null);
tslib_1.__decorate([
    (0, rest_1.del)('/pedidos/{id}/productos', {
        responses: {
            '200': {
                description: 'Pedidos.Producto DELETE success count',
                content: { 'application/json': { schema: repository_1.CountSchema } },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__param(1, rest_1.param.query.object('where', (0, rest_1.getWhereSchemaFor)(models_1.Producto))),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], PedidosProductoController.prototype, "delete", null);
PedidosProductoController = tslib_1.__decorate([
    tslib_1.__param(0, (0, repository_1.repository)(repositories_1.PedidosRepository)),
    tslib_1.__metadata("design:paramtypes", [repositories_1.PedidosRepository])
], PedidosProductoController);
exports.PedidosProductoController = PedidosProductoController;
//# sourceMappingURL=pedidos-producto.controller.js.map