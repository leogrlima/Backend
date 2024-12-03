"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Contato_1 = require("./Contato");
var Agenda_1 = require("./Agenda");
var ask = require('readline-sync');
var agenda = new Agenda_1.Agenda();
var sustentaMenu = true;
// Cores
function cor(cor, string) {
    var cores = ["preto", "vermelho", "verde", "amarelo", "azul", "roxo", "ciano", "branco"];
    return "\u001B[".concat(30 + cores.indexOf(cor.toLowerCase()), "m").concat(string, "\u001B[0m");
}
function Main() {
    while (sustentaMenu) {
        console.clear();
        console.log(cor("azul", "Escolha uma op\u00E7\u00E3o:\n 1 - Adicionar contato\n 2 - Remover contato\n 3 - Listar todos os contatos\n 4 - Buscar contato\n 5 - Editar contato\n 6 - Sair\n\nDigite a opcao desejada:"));
        var opcao = ask.question(cor("azul", ">>> "));
        switch (opcao) {
            case "1":
                console.clear();
                var nomeContato = ask.question(cor("amarelo", "Digite o nome do contato: "));
                var telefoneContato = ask.question(cor("amarelo", "Digite o telefone do contato: "));
                var emailContato = ask.question(cor("amarelo", "Digite o email do contato: "));
                agenda.adicionarContato(new Contato_1.Contato(nomeContato, telefoneContato, emailContato));
                console.clear();
                console.log(cor("verde", "Contato ".concat(nomeContato, " adicionado com sucesso!")));
                break;
            case "2":
                console.clear();
                var contatoRemover = ask.question(cor("amarelo", "Digite o nome do contato: "));
                var contatoEncontrado = false;
                for (var _i = 0, _a = agenda.contatos; _i < _a.length; _i++) {
                    var contato = _a[_i];
                    if (contato.getNome() == contatoRemover) {
                        contatoEncontrado = true;
                    }
                }
                if (contatoEncontrado) {
                    agenda.removerContato(contatoRemover);
                    console.clear();
                    console.log(cor("verde", "Contato ".concat(contatoRemover, " removido com sucesso!")));
                }
                else {
                    console.log(cor("vermelho", "Contato ".concat(contatoRemover, " n\u00E3o encontrado.")));
                }
                break;
            case "3":
                agenda.listarContatos();
                break;
            case "4":
                console.clear();
                var contatoBuscar = ask.question(cor("amarelo", "Digite o nome do contato: "));
                agenda.buscarContato(contatoBuscar);
                break;
            case "5":
                console.clear();
                var nomeAntigo = ask.question(cor("amarelo", "Digite o nome do contato que deseja editar: "));
                var contatoLocalizado = false;
                for (var _b = 0, _c = agenda.contatos; _b < _c.length; _b++) {
                    var contato = _c[_b];
                    if (contato.getNome() == nomeAntigo) {
                        contatoLocalizado = true;
                    }
                }
                if (contatoLocalizado) {
                    var nomeNovo = ask.question(cor("amarelo", "Digite o nome do contato: "));
                    var telefoneNovo = ask.question(cor("amarelo", "Digite o telefone do contato: "));
                    var emailNovo = ask.question(cor("amarelo", "Digite o email do contato: "));
                    agenda.editarContato(nomeAntigo, new Contato_1.Contato(nomeNovo, telefoneNovo, emailNovo));
                    console.clear();
                    console.log(cor("verde", "Contato ".concat(nomeAntigo, " editado com sucesso!")));
                }
                else {
                    console.log(cor("vermelho", "Contato ".concat(nomeAntigo, " n\u00E3o encontrado.")));
                }
                break;
            case "6":
                sustentaMenu = false;
                console.log(cor("vermelho", "Saindo do sistema..."));
                break;
            default:
                console.log(cor("vermelho", "Opção inválida. Tente novamente."));
                break;
        }
        if (sustentaMenu) {
            ask.question(cor("amarelo", "Pressione ENTER para continuar..."));
        }
    }
}
Main();
