"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Honda = void 0;
var calcularDano_1 = require("./calcularDano");
var Honda = /** @class */ (function () {
    function Honda() {
        this.nome = "Honda";
        this.vida = 100;
    }
    Honda.prototype.getNome = function () {
        return this.nome;
    };
    Honda.prototype.setNome = function (nome) {
        this.nome = nome;
    };
    Honda.prototype.getVida = function () {
        return this.vida;
    };
    Honda.prototype.setVida = function (vida) {
        this.vida = vida;
    };
    Honda.prototype.getNacionalidade = function () {
        return this.nacionalidade;
    };
    Honda.prototype.setNacionalidade = function (nacionalidade) {
        this.nacionalidade = nacionalidade;
    };
    Honda.prototype.getEstiloLuta = function () {
        return this.estiloLuta;
    };
    Honda.prototype.setEstiloLuta = function (estiloLuta) {
        this.estiloLuta = estiloLuta;
    };
    Honda.prototype.golpeLeve = function (inimigo) {
        (0, calcularDano_1.calcularDano)("leve", inimigo);
        (0, calcularDano_1.mensagemAtaque)("".concat(this.nome, " usa Hyakuretsu Harite!"));
    };
    Honda.prototype.golpePesado = function (inimigo) {
        (0, calcularDano_1.calcularDano)("pesado", inimigo);
        (0, calcularDano_1.mensagemAtaque)("".concat(this.nome, " usa Sumo Headbutt!"));
    };
    Honda.prototype.golpeEspecial = function (inimigo) {
        (0, calcularDano_1.calcularDano)("especial", inimigo);
        (0, calcularDano_1.mensagemAtaque)("".concat(this.nome, " usa Oicho Throw!"));
    };
    return Honda;
}());
exports.Honda = Honda;
