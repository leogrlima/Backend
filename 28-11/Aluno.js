"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Aluno = void 0;
var Aluno = /** @class */ (function () {
    function Aluno(nome, idade, nacionalidade, classeMagica) {
        this.nome = nome;
        this.idade = idade;
        this.nacionalidade = nacionalidade;
        this.classeMagica = classeMagica;
    }
    Aluno.prototype.getNome = function () {
        return this.nome;
    };
    Aluno.prototype.setNome = function (nome) {
        this.nome = nome;
    };
    Aluno.prototype.getIdade = function () {
        return this.idade;
    };
    Aluno.prototype.setIdade = function (idade) {
        this.idade = idade;
    };
    Aluno.prototype.getNacionalidade = function () {
        return this.nacionalidade;
    };
    Aluno.prototype.setNacionalidade = function (nacionalidade) {
        this.nacionalidade = nacionalidade;
    };
    Aluno.prototype.getCasa = function () {
        return this.casa;
    };
    Aluno.prototype.setCasa = function (casa) {
        this.casa = casa;
    };
    Aluno.prototype.getClasseMagica = function () {
        return this.classeMagica;
    };
    Aluno.prototype.setClasseMagica = function (classeMagica) {
        this.classeMagica = classeMagica;
    };
    Aluno.prototype.sortearCasa = function () {
        var casas = ["Grifinória", "Sonserina", "Lufa-Lufa", "Corvinal"];
        this.casa = casas[Math.floor(Math.random() * casas.length)];
    };
    Aluno.prototype.exibirInformacoes = function () {
        console.log("\u001B[34m---------------------\nInforma\u00E7\u00F5es do Aluno:\n---------------------\nNome: ".concat(this.nome, "\nIdade: ").concat(this.idade, " anos\nNacionalidade: ").concat(this.nacionalidade, "\nCasa: ").concat(this.casa, "\nClasse M\u00E1gica: ").concat(this.classeMagica));
    };
    return Aluno;
}());
exports.Aluno = Aluno;
