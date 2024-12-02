"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Ryu_1 = require("./Ryu");
var Ken_1 = require("./Ken");
var Blanka_1 = require("./Blanka");
var Zangief_1 = require("./Zangief");
var Honda_1 = require("./Honda");
var Bison_1 = require("./Bison");
var Cammy_1 = require("./Cammy");
var DeeJay_1 = require("./DeeJay");
var ask = require("readline-sync");
var programaAtivo = true;
var jogador1;
var jogador2;
var especialJogador1 = true;
var especialJogador2 = true;
// Cores
function cor(cor, string) {
    var cores = ["preto", "vermelho", "verde", "amarelo", "azul", "roxo", "ciano", "branco"];
    return "\u001B[".concat(30 + cores.indexOf(cor.toLowerCase()), "m").concat(string, "\u001B[0m");
}
function selecionarPersonagem(numeroJogador) {
    console.clear();
    console.log(cor("azul", "Selecione o personagem do Jogador ".concat(numeroJogador, "\n\n[1] - Ryu       [5] - Honda\n[2] - Ken       [6] - Bison\n[3] - Blanka    [7] - Cammy\n[4] - Zangief   [8] - Dee Jay")));
    var opcaoPersonagem = Number(ask.question(cor("ciano", "-<>===> ")));
    var arrayPersonagens = [Ryu_1.Ryu, Ken_1.Ken, Blanka_1.Blanka, Zangief_1.Zangief, Honda_1.Honda, Bison_1.Bison, Cammy_1.Cammy, DeeJay_1.DeeJay];
    return new arrayPersonagens[opcaoPersonagem - 1];
}
function mostrarHP() {
    console.clear();
    console.log(cor("azul", "Jogador 1 HP: ".concat(jogador1.getVida(), "\nJogador 2 HP: ").concat(jogador2.getVida(), "\n")));
}
function turno(jogador, inimigo, especial, num) {
    console.log(cor("amarelo", "Turno de Jogador ".concat(num, ":\n\n[1] - Golpe leve\n[2] - Golpe pesado")));
    if (especial) {
        console.log(cor("amarelo", "[3] - Golpe especial"));
    }
    var opcaoAtaque = Number(ask.question(cor("ciano", "-<>===> ")));
    switch (opcaoAtaque) {
        case 1:
            jogador.golpeLeve(inimigo);
            break;
        case 2:
            jogador.golpePesado(inimigo);
            break;
        case 3:
            if (especial) {
                jogador.golpeEspecial(inimigo);
                if (num == 1) {
                    especialJogador1 = false;
                }
                else if (num == 2) {
                    especialJogador2 = false;
                }
            }
            else {
                console.log(cor("vermelho", "Golpe não encontrado."));
            }
            break;
        default:
            console.log(cor("vermelho", "Golpe não encontrado."));
            break;
    }
    ask.question(cor("amarelo", "Pressione ENTER para continuar..."));
}
function Main() {
    while (programaAtivo) {
        console.clear();
        console.log(cor("verde", "Sistema de simula\u00E7\u00E3o baseado em Street Fighter\nDigite o n\u00FAmero de uma op\u00E7\u00E3o:\n\n[1] - Novo jogo\n[0] - Sair"));
        var opcaoMenu = Number(ask.question(cor("ciano", "-<>===> ")));
        switch (opcaoMenu) {
            case 1:
                jogador1 = selecionarPersonagem(1);
                jogador2 = selecionarPersonagem(2);
                especialJogador1 = true;
                especialJogador2 = true;
                while (jogador1.getVida() > 0 && jogador2.getVida() > 0) {
                    mostrarHP();
                    turno(jogador1, jogador2, especialJogador1, 1);
                    if (jogador2.getVida() > 0) {
                        mostrarHP();
                        turno(jogador2, jogador1, especialJogador2, 2);
                    }
                }
                console.clear();
                if (jogador1.getVida() <= 0) {
                    console.log(cor("verde", "Jogador 2 venceu!"));
                }
                else if (jogador2.getVida() <= 0) {
                    console.log(cor("verde", "Jogador 1 venceu!"));
                }
                break;
            case 0:
                programaAtivo = false;
                console.log(cor("vermelho", "Encerrando..."));
        }
        if (programaAtivo) {
            ask.question(cor("amarelo", "Pressione ENTER para continuar..."));
        }
    }
}
Main();
