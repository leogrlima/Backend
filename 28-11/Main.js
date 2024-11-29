"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Aluno_1 = require("./Aluno");
var ask = require("readline-sync");
var programaAtivo = true;
var alunos;
// Cores
function cor(cor, string) {
    var cores = ["preto", "vermelho", "verde", "amarelo", "azul", "roxo", "ciano", "branco"];
    return "\u001B[".concat(30 + cores.indexOf(cor.toLowerCase()), "m").concat(string, "\u001B[0m");
}
function cadastrarAluno() {
    console.clear();
    var nomeAluno = ask.question(cor("amarelo", "Digite o nome do aluno: "));
    var idadeAluno = Number(ask.question(cor("amarelo", "Digite a idade do aluno: ")));
    var nacionalidadeAluno = ask.question(cor("amarelo", "Digite a nacionalidade do aluno: "));
    var classeMagicaAluno = ask.question(cor("amarelo", "Digite a classe magica do aluno: "));
    console.clear();
    if (typeof nomeAluno === "string" && typeof idadeAluno === "number" && typeof nacionalidadeAluno === "string" && typeof classeMagicaAluno === "string") {
        var alunoNovo = new Aluno_1.Aluno(nomeAluno, idadeAluno, nacionalidadeAluno, classeMagicaAluno);
        alunoNovo.sortearCasa();
        alunos.push(alunoNovo);
        console.log(cor("verde", "\uD83C\uDF93 Aluno(a) ".concat(nomeAluno, " cadastrado(a)!")));
    }
    else {
        console.log(cor("vermelho", "Não foi possível cadastrar o usuário: Dados inválidos."));
    }
}
function verAlunos() {
    console.clear();
    if (alunos.length > 0) {
        console.log(cor("azul", "📝 Alunos cadastrados:"));
    }
    else {
        console.log(cor("vermelho", "📝 Nenhum aluno cadastrado."));
    }
    for (var _i = 0, alunos_1 = alunos; _i < alunos_1.length; _i++) {
        var aluno = alunos_1[_i];
        aluno.exibirInformacoes();
    }
}
function editarAluno() {
    console.clear();
    var nomeAluno = ask.question("Insira o nome do aluno: ");
    for (var _i = 0, alunos_2 = alunos; _i < alunos_2.length; _i++) {
        var aluno = alunos_2[_i];
        if (aluno.getNome() == nomeAluno) {
            console.log(cor("azul", "Como deseja editar ".concat(aluno.getNome(), "?\n[1] - Alterar nome\n[2] - Alterar idade\n[3] - Alterar nacionalidade\n[4] - Alterar casa\n[5] - Alterar classe m\u00E1gica\n\nDigite o n\u00FAmero da op\u00E7\u00E3o:")));
            var opcao = Number(ask.question(cor("ciano", "----> ")));
            switch (opcao) {
                case 1:
                    var novoNome = ask.question(cor("amarelo", "Insira o novo nome: "));
                    aluno.setNome(novoNome);
                    break;
                case 2:
                    var novaIdade = ask.question(cor("amarelo", "Insira a nova idade: "));
                    aluno.setIdade(novaIdade);
                    break;
                case 3:
                    var novaNacionalidade = ask.question(cor("amarelo", "Insira a nova nacionalidade: "));
                    aluno.setNacionalidade(novaNacionalidade);
                    break;
                case 4:
                    var novaCasa = ask.question(cor("amarelo", "Insira a nova casa: "));
                    aluno.setCasa(novaCasa);
                    break;
                case 5:
                    var novaClasseMagica = ask.question(cor("amarelo", "Insira a nova classe magica: "));
                    aluno.setClasseMagica(novaClasseMagica);
                    break;
            }
            console.clear();
            console.log(cor("verde", "\u270F\uFE0F Aluno(a) ".concat(aluno.getNome(), " editado com sucesso!")));
        }
    }
}
function deletarAluno() {
    console.clear();
    var nomeAluno = ask.question(cor("amarelo", "Digite o nome do aluno que deseja deletar: "));
    var alunoDeletado;
    alunoDeletado = null;
    for (var _i = 0, alunos_3 = alunos; _i < alunos_3.length; _i++) {
        var aluno = alunos_3[_i];
        if (aluno.getNome().toLowerCase() == nomeAluno.toLowerCase()) {
            alunoDeletado = aluno.getNome();
            alunos.splice(alunos.indexOf(aluno), 1);
            break;
        }
    }
    console.clear();
    if (alunoDeletado) {
        console.log(cor("verde", "\uD83E\uDDE8 Aluno(a) ".concat(alunoDeletado, " deletado(a)!")));
    }
    else {
        console.log(cor("vermelho", "Aluno não encontrado."));
    }
}
function Main() {
    alunos = [];
    while (programaAtivo) {
        console.clear();
        console.log(cor("roxo", "Bem vindo a Hogwarts, o que deseja fazer?\n\n[1] - Cadastrar novo aluno \uD83C\uDF93\n[2] - Ver alunos cadastrados \uD83D\uDCDD\n[3] - Editar dados de um aluno \u270F\uFE0F\n[4] - Deletar um aluno \uD83E\uDDE8\n[0] - Sair \uD83D\uDEAA\n\nDigite o n\u00FAmero da op\u00E7\u00E3o:"));
        var opcaoMenu = Number(ask.question(cor("ciano", "----> ")));
        switch (opcaoMenu) {
            case 1:
                cadastrarAluno();
                break;
            case 2:
                verAlunos();
                break;
            case 3:
                editarAluno();
                break;
            case 4:
                deletarAluno();
                break;
            case 0:
                programaAtivo = false;
                console.log(cor("vermelho", "Encerrando..."));
        }
        if (programaAtivo) {
            ask.question(cor("amarelo", "Pressione ENTER para continuar."));
        }
    }
}
Main();
