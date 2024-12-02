"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Zangief = void 0;
var calcularDano_1 = require("./calcularDano");
var Zangief = /** @class */ (function () {
    function Zangief() {
        this.nome = "Zangief";
        this.vida = 100;
    }
    Zangief.prototype.getNome = function () {
        return this.nome;
    };
    Zangief.prototype.setNome = function (nome) {
        this.nome = nome;
    };
    Zangief.prototype.getVida = function () {
        return this.vida;
    };
    Zangief.prototype.setVida = function (vida) {
        this.vida = vida;
    };
    Zangief.prototype.getNacionalidade = function () {
        return this.nacionalidade;
    };
    Zangief.prototype.setNacionalidade = function (nacionalidade) {
        this.nacionalidade = nacionalidade;
    };
    Zangief.prototype.getEstiloLuta = function () {
        return this.estiloLuta;
    };
    Zangief.prototype.setEstiloLuta = function (estiloLuta) {
        this.estiloLuta = estiloLuta;
    };
    Zangief.prototype.golpeLeve = function (inimigo) {
        (0, calcularDano_1.calcularDano)("leve", inimigo);
        (0, calcularDano_1.mensagemAtaque)("".concat(this.nome, " usa Lariat!"));
    };
    Zangief.prototype.golpePesado = function (inimigo) {
        (0, calcularDano_1.calcularDano)("pesado", inimigo);
        (0, calcularDano_1.mensagemAtaque)("".concat(this.nome, " usa Spinning Piledriver!"));
    };
    Zangief.prototype.golpeEspecial = function (inimigo) {
        (0, calcularDano_1.calcularDano)("especial", inimigo);
        (0, calcularDano_1.mensagemAtaque)("".concat(this.nome, " usa Final Atomic Buster!"));
    };
    return Zangief;
}());
exports.Zangief = Zangief;
