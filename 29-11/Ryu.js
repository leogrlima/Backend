"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Ryu = void 0;
var calcularDano_1 = require("./calcularDano");
var Ryu = /** @class */ (function () {
    function Ryu() {
        this.nome = "Ryu";
        this.vida = 100;
    }
    Ryu.prototype.getNome = function () {
        return this.nome;
    };
    Ryu.prototype.setNome = function (nome) {
        this.nome = nome;
    };
    Ryu.prototype.getVida = function () {
        return this.vida;
    };
    Ryu.prototype.setVida = function (vida) {
        this.vida = vida;
    };
    Ryu.prototype.getNacionalidade = function () {
        return this.nacionalidade;
    };
    Ryu.prototype.setNacionalidade = function (nacionalidade) {
        this.nacionalidade = nacionalidade;
    };
    Ryu.prototype.getEstiloLuta = function () {
        return this.estiloLuta;
    };
    Ryu.prototype.setEstiloLuta = function (estiloLuta) {
        this.estiloLuta = estiloLuta;
    };
    Ryu.prototype.golpeLeve = function (inimigo) {
        (0, calcularDano_1.calcularDano)("leve", inimigo);
        (0, calcularDano_1.mensagemAtaque)("".concat(this.nome, " usa Hadouken!"));
    };
    Ryu.prototype.golpePesado = function (inimigo) {
        (0, calcularDano_1.calcularDano)("pesado", inimigo);
        (0, calcularDano_1.mensagemAtaque)("".concat(this.nome, " usa Shoryuken!"));
    };
    Ryu.prototype.golpeEspecial = function (inimigo) {
        (0, calcularDano_1.calcularDano)("especial", inimigo);
        (0, calcularDano_1.mensagemAtaque)("".concat(this.nome, " usa Metsu Hadouken!"));
    };
    return Ryu;
}());
exports.Ryu = Ryu;
