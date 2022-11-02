"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Pedidos = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const producto_model_1 = require("./producto.model");
const persona_model_1 = require("./persona.model");
let Pedidos = class Pedidos extends repository_1.Entity {
    constructor(data) {
        super(data);
    }
};
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'string',
        id: true,
        generated: true,
    }),
    tslib_1.__metadata("design:type", String)
], Pedidos.prototype, "id", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'number',
        required: true,
    }),
    tslib_1.__metadata("design:type", Number)
], Pedidos.prototype, "cantidad", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'number',
        required: true,
    }),
    tslib_1.__metadata("design:type", Number)
], Pedidos.prototype, "total", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'string',
        required: true,
    }),
    tslib_1.__metadata("design:type", String)
], Pedidos.prototype, "estado", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'string',
    }),
    tslib_1.__metadata("design:type", String)
], Pedidos.prototype, "personaId", void 0);
tslib_1.__decorate([
    (0, repository_1.hasMany)(() => producto_model_1.Producto),
    tslib_1.__metadata("design:type", Array)
], Pedidos.prototype, "productos", void 0);
tslib_1.__decorate([
    (0, repository_1.hasOne)(() => persona_model_1.Persona),
    tslib_1.__metadata("design:type", persona_model_1.Persona)
], Pedidos.prototype, "persona", void 0);
Pedidos = tslib_1.__decorate([
    (0, repository_1.model)(),
    tslib_1.__metadata("design:paramtypes", [Object])
], Pedidos);
exports.Pedidos = Pedidos;
//# sourceMappingURL=pedidos.model.js.map