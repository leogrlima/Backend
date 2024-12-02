import { Personagem } from "./Personagem"
import { Ryu } from "./Ryu"
import { Ken } from "./Ken"
import { Blanka } from "./Blanka"
import { Zangief } from "./Zangief"
import { Honda } from "./Honda"
import { Bison } from "./Bison"
import { Cammy } from "./Cammy"
import { DeeJay } from "./DeeJay"
import { calcularDano } from "./calcularDano"

const ask = require("readline-sync")
let programaAtivo = true
let jogador1: Personagem
let jogador2: Personagem
let especialJogador1 = true
let especialJogador2 = true

// Cores
function cor(cor: string, string: string): string {
    let cores = ["preto", "vermelho", "verde", "amarelo", "azul", "roxo", "ciano", "branco"]
    return `\x1b[${30 + cores.indexOf(cor.toLowerCase())}m${string}\x1b[0m`
}

function selecionarPersonagem(numeroJogador: number){
    console.clear()
    console.log(cor("azul", 
`Selecione o personagem do Jogador ${numeroJogador}

[1] - Ryu       [5] - Honda
[2] - Ken       [6] - Bison
[3] - Blanka    [7] - Cammy
[4] - Zangief   [8] - Dee Jay`))

    let opcaoPersonagem = ask.question(cor("ciano", "-<>===> "))
    if (opcaoPersonagem != ""){
        Number(opcaoPersonagem)
    }
    let arrayPersonagens = [Ryu, Ken, Blanka, Zangief, Honda, Bison, Cammy, DeeJay]
    return new arrayPersonagens[opcaoPersonagem - 1]
    
}

function mostrarHP(){
    console.clear()
    console.log(cor("azul", 
`Jogador 1 HP: ${jogador1.getVida()}
Jogador 2 HP: ${jogador2.getVida()}
`))
}

function turno(jogador: Personagem, inimigo: Personagem, especial: boolean, num: number){
    console.log(cor("amarelo", 
`Turno de Jogador ${num}:

[1] - Golpe leve
[2] - Golpe pesado`))
    if(especial){
        console.log(cor("amarelo", "[3] - Golpe especial"))
    }

    let opcaoAtaque = Number(ask.question(cor("ciano", "-<>===> ")))

    switch(opcaoAtaque){
        case 1:
            jogador.golpeLeve(inimigo)
            break
        case 2:
            jogador.golpePesado(inimigo)
            break
        case 3:
            if(especial){
                jogador.golpeEspecial(inimigo)
                if(num == 1){
                    especialJogador1 = false
                } else if(num == 2){
                    especialJogador2 = false
                }
            } else {
                console.log(cor("vermelho", "Golpe não encontrado."))
            }
            break
        default:
            console.log(cor("vermelho", "Golpe não encontrado."))
            break
    }

    ask.question(cor("amarelo", "Pressione ENTER para continuar..."))
}

function Main(){
    while(programaAtivo){
        console.clear()
        console.log(cor("verde", 
`Sistema de simulação baseado em Street Fighter
Digite o número de uma opção:

[1] - Novo jogo
[0] - Sair`))

        let opcaoMenu = ask.question(cor("ciano", "-<>===> "))
        if (opcaoMenu != ""){
            Number(opcaoMenu)
        }
    
        switch(opcaoMenu){
            case 1:
                jogador1 = selecionarPersonagem(1)
                jogador2 = selecionarPersonagem(2)
                especialJogador1 = true
                especialJogador2 = true

                while(jogador1.getVida() > 0 && jogador2.getVida() > 0){
                    mostrarHP()
                    turno(jogador1, jogador2, especialJogador1, 1)
                    if(jogador2.getVida() > 0){
                        mostrarHP()
                        turno(jogador2, jogador1, especialJogador2, 2)
                    }
                }

                console.clear()
                if(jogador1.getVida() <= 0){
                    console.log(cor("verde", "Jogador 2 venceu!"))
                } else if(jogador2.getVida() <= 0){
                    console.log(cor("verde", "Jogador 1 venceu!"))
                }
                break
            case 0:
                programaAtivo = false
                console.log(cor("vermelho", "Encerrando..."))
                break
            default:
                console.log(cor("vermelho", "Opção não encontrada."))
                break
        }
        if(programaAtivo){
            ask.question(cor("amarelo", "Pressione ENTER para continuar..."))
        }
    }
}

Main()