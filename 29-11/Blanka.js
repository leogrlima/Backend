"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Blanka = void 0;
var calcularDano_1 = require("./calcularDano");
var Blanka = /** @class */ (function () {
    function Blanka() {
        this.nome = "Blanka";
        this.vida = 100;
    }
    Blanka.prototype.getNome = function () {
        return this.nome;
    };
    Blanka.prototype.setNome = function (nome) {
        this.nome = nome;
    };
    Blanka.prototype.getVida = function () {
        return this.vida;
    };
    Blanka.prototype.setVida = function (vida) {
        this.vida = vida;
    };
    Blanka.prototype.getNacionalidade = function () {
        return this.nacionalidade;
    };
    Blanka.prototype.setNacionalidade = function (nacionalidade) {
        this.nacionalidade = nacionalidade;
    };
    Blanka.prototype.getEstiloLuta = function () {
        return this.estiloLuta;
    };
    Blanka.prototype.setEstiloLuta = function (estiloLuta) {
        this.estiloLuta = estiloLuta;
    };
    Blanka.prototype.golpeLeve = function (inimigo) {
        (0, calcularDano_1.calcularDano)("leve", inimigo);
        (0, calcularDano_1.mensagemAtaque)("".concat(this.nome, " usa Electric Thunder!"));
    };
    Blanka.prototype.golpePesado = function (inimigo) {
        (0, calcularDano_1.calcularDano)("pesado", inimigo);
        (0, calcularDano_1.mensagemAtaque)("".concat(this.nome, " usa Rolling Attack!"));
    };
    Blanka.prototype.golpeEspecial = function (inimigo) {
        (0, calcularDano_1.calcularDano)("especial", inimigo);
        (0, calcularDano_1.mensagemAtaque)("".concat(this.nome, " usa Super Electric Thunder!"));
    };
    return Blanka;
}());
exports.Blanka = Blanka;
