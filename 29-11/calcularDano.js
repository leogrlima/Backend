"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.calcularDano = calcularDano;
exports.mensagemAtaque = mensagemAtaque;
function calcularDano(golpe, inimigo) {
    var min = 0;
    var max = 0;
    switch (golpe) {
        case "leve":
            min = 10;
            max = 15;
            break;
        case "pesado":
            min = 5;
            max = 30;
            break;
        case "especial":
            min = 30;
            max = 50;
            break;
        default:
            console.log("Golpe não identificado.");
    }
    inimigo.setVida(inimigo.getVida() - (Math.floor(Math.random() * (max - min + 1)) + min));
}
function mensagemAtaque(mensagem) {
    console.log("\u001B[35m".concat(mensagem, "\u001B[0m"));
}
