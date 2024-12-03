"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Contato = void 0;
var Contato = /** @class */ (function () {
    function Contato(nome, telefone, email) {
        this.nome = nome;
        this.telefone = telefone;
        this.email = email;
    }
    Contato.prototype.getNome = function () {
        return this.nome;
    };
    Contato.prototype.setNome = function (nome) {
        this.nome = nome;
    };
    Contato.prototype.getTelefone = function () {
        return this.telefone;
    };
    Contato.prototype.setTelefone = function (telefone) {
        this.telefone = telefone;
    };
    Contato.prototype.getEmail = function () {
        return this.email;
    };
    Contato.prototype.setEmail = function (email) {
        this.email = email;
    };
    Contato.prototype.editarContato = function (nome, telefone, email) {
        this.setNome(nome);
        this.setTelefone(telefone);
        this.setEmail(email);
    };
    Contato.prototype.mostrarContato = function () {
        console.log("\u001B[34m---------------------\nInforma\u00E7\u00F5es do Contato:\n---------------------\nNome: ".concat(this.nome, "\nTelefone: ").concat(this.telefone, "\nEmail: ").concat(this.email));
    };
    return Contato;
}());
exports.Contato = Contato;
