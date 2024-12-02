"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Bison = void 0;
var calcularDano_1 = require("./calcularDano");
var Bison = /** @class */ (function () {
    function Bison() {
        this.nome = "Bison";
        this.vida = 100;
    }
    Bison.prototype.getNome = function () {
        return this.nome;
    };
    Bison.prototype.setNome = function (nome) {
        this.nome = nome;
    };
    Bison.prototype.getVida = function () {
        return this.vida;
    };
    Bison.prototype.setVida = function (vida) {
        this.vida = vida;
    };
    Bison.prototype.getNacionalidade = function () {
        return this.nacionalidade;
    };
    Bison.prototype.setNacionalidade = function (nacionalidade) {
        this.nacionalidade = nacionalidade;
    };
    Bison.prototype.getEstiloLuta = function () {
        return this.estiloLuta;
    };
    Bison.prototype.setEstiloLuta = function (estiloLuta) {
        this.estiloLuta = estiloLuta;
    };
    Bison.prototype.golpeLeve = function (inimigo) {
        (0, calcularDano_1.calcularDano)("leve", inimigo);
        (0, calcularDano_1.mensagemAtaque)("".concat(this.nome, " usa Psycho Crusher!"));
    };
    Bison.prototype.golpePesado = function (inimigo) {
        (0, calcularDano_1.calcularDano)("pesado", inimigo);
        (0, calcularDano_1.mensagemAtaque)("".concat(this.nome, " usa Scissor Kick!"));
    };
    Bison.prototype.golpeEspecial = function (inimigo) {
        (0, calcularDano_1.calcularDano)("especial", inimigo);
        (0, calcularDano_1.mensagemAtaque)("".concat(this.nome, " usa Psycho Impact!"));
    };
    return Bison;
}());
exports.Bison = Bison;
