"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Ken = void 0;
var calcularDano_1 = require("./calcularDano");
var Ken = /** @class */ (function () {
    function Ken() {
        this.nome = "Ken";
        this.vida = 100;
    }
    Ken.prototype.getNome = function () {
        return this.nome;
    };
    Ken.prototype.setNome = function (nome) {
        this.nome = nome;
    };
    Ken.prototype.getVida = function () {
        return this.vida;
    };
    Ken.prototype.setVida = function (vida) {
        this.vida = vida;
    };
    Ken.prototype.getNacionalidade = function () {
        return this.nacionalidade;
    };
    Ken.prototype.setNacionalidade = function (nacionalidade) {
        this.nacionalidade = nacionalidade;
    };
    Ken.prototype.getEstiloLuta = function () {
        return this.estiloLuta;
    };
    Ken.prototype.setEstiloLuta = function (estiloLuta) {
        this.estiloLuta = estiloLuta;
    };
    Ken.prototype.golpeLeve = function (inimigo) {
        (0, calcularDano_1.calcularDano)("leve", inimigo);
        (0, calcularDano_1.mensagemAtaque)("".concat(this.nome, " usa Hadouken!"));
    };
    Ken.prototype.golpePesado = function (inimigo) {
        (0, calcularDano_1.calcularDano)("pesado", inimigo);
        (0, calcularDano_1.mensagemAtaque)("".concat(this.nome, " usa Shoryuken!"));
    };
    Ken.prototype.golpeEspecial = function (inimigo) {
        (0, calcularDano_1.calcularDano)("especial", inimigo);
        (0, calcularDano_1.mensagemAtaque)("".concat(this.nome, " usa Shinryuken!"));
    };
    return Ken;
}());
exports.Ken = Ken;
