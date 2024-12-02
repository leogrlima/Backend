"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeeJay = void 0;
var calcularDano_1 = require("./calcularDano");
var DeeJay = /** @class */ (function () {
    function DeeJay() {
        this.nome = "DeeJay";
        this.vida = 100;
    }
    DeeJay.prototype.getNome = function () {
        return this.nome;
    };
    DeeJay.prototype.setNome = function (nome) {
        this.nome = nome;
    };
    DeeJay.prototype.getVida = function () {
        return this.vida;
    };
    DeeJay.prototype.setVida = function (vida) {
        this.vida = vida;
    };
    DeeJay.prototype.getNacionalidade = function () {
        return this.nacionalidade;
    };
    DeeJay.prototype.setNacionalidade = function (nacionalidade) {
        this.nacionalidade = nacionalidade;
    };
    DeeJay.prototype.getEstiloLuta = function () {
        return this.estiloLuta;
    };
    DeeJay.prototype.setEstiloLuta = function (estiloLuta) {
        this.estiloLuta = estiloLuta;
    };
    DeeJay.prototype.golpeLeve = function (inimigo) {
        (0, calcularDano_1.calcularDano)("leve", inimigo);
        (0, calcularDano_1.mensagemAtaque)("".concat(this.nome, " usa Air Slasher!"));
    };
    DeeJay.prototype.golpePesado = function (inimigo) {
        (0, calcularDano_1.calcularDano)("pesado", inimigo);
        (0, calcularDano_1.mensagemAtaque)("".concat(this.nome, " usa Machine Gun Upper!"));
    };
    DeeJay.prototype.golpeEspecial = function (inimigo) {
        (0, calcularDano_1.calcularDano)("especial", inimigo);
        (0, calcularDano_1.mensagemAtaque)("".concat(this.nome, " usa Jackknife Maximum!"));
    };
    return DeeJay;
}());
exports.DeeJay = DeeJay;
