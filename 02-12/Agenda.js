"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Agenda = void 0;
var Agenda = /** @class */ (function () {
    function Agenda() {
        this.contatos = [];
    }
    Agenda.prototype.adicionarContato = function (contato) {
        this.contatos.push(contato);
    };
    Agenda.prototype.removerContato = function (nome) {
        for (var _i = 0, _a = this.contatos; _i < _a.length; _i++) {
            var contato = _a[_i];
            if (contato.getNome() == nome) {
                this.contatos.splice(this.contatos.indexOf(contato), 1);
            }
        }
    };
    Agenda.prototype.listarContatos = function () {
        console.clear();
        if (this.contatos.length > 0) {
            console.log("\x1b[34mLista de contatos:");
            for (var _i = 0, _a = this.contatos; _i < _a.length; _i++) {
                var contato = _a[_i];
                contato.mostrarContato();
            }
        }
        else {
            console.log("\x1b[31mNenhum contato cadastrado.");
        }
    };
    Agenda.prototype.buscarContato = function (nome) {
        console.clear();
        var totalResultados = 0;
        for (var _i = 0, _a = this.contatos; _i < _a.length; _i++) {
            var contato = _a[_i];
            if (contato.getNome() == nome) {
                contato.mostrarContato();
                totalResultados += 1;
            }
        }
        if (totalResultados == 0) {
            console.log("\x1b[31mNenhum contato encontrado.");
        }
    };
    Agenda.prototype.editarContato = function (nome, novoContato) {
        for (var _i = 0, _a = this.contatos; _i < _a.length; _i++) {
            var contato = _a[_i];
            if (contato.getNome() == nome) {
                contato.editarContato(novoContato.getNome(), novoContato.getTelefone(), novoContato.getEmail());
            }
        }
    };
    return Agenda;
}());
exports.Agenda = Agenda;
