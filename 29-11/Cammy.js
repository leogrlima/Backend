"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cammy = void 0;
var calcularDano_1 = require("./calcularDano");
var Cammy = /** @class */ (function () {
    function Cammy() {
        this.nome = "Cammy";
        this.vida = 100;
    }
    Cammy.prototype.getNome = function () {
        return this.nome;
    };
    Cammy.prototype.setNome = function (nome) {
        this.nome = nome;
    };
    Cammy.prototype.getVida = function () {
        return this.vida;
    };
    Cammy.prototype.setVida = function (vida) {
        this.vida = vida;
    };
    Cammy.prototype.getNacionalidade = function () {
        return this.nacionalidade;
    };
    Cammy.prototype.setNacionalidade = function (nacionalidade) {
        this.nacionalidade = nacionalidade;
    };
    Cammy.prototype.getEstiloLuta = function () {
        return this.estiloLuta;
    };
    Cammy.prototype.setEstiloLuta = function (estiloLuta) {
        this.estiloLuta = estiloLuta;
    };
    Cammy.prototype.golpeLeve = function (inimigo) {
        (0, calcularDano_1.calcularDano)("leve", inimigo);
        (0, calcularDano_1.mensagemAtaque)("".concat(this.nome, " usa Spiral Arrow!"));
    };
    Cammy.prototype.golpePesado = function (inimigo) {
        (0, calcularDano_1.calcularDano)("pesado", inimigo);
        (0, calcularDano_1.mensagemAtaque)("".concat(this.nome, " usa Cannon Spike!"));
    };
    Cammy.prototype.golpeEspecial = function (inimigo) {
        (0, calcularDano_1.calcularDano)("especial", inimigo);
        (0, calcularDano_1.mensagemAtaque)("".concat(this.nome, " usa Hooligan Combination!"));
    };
    return Cammy;
}());
exports.Cammy = Cammy;
