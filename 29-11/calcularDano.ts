import { Personagem } from "./Personagem"

export function calcularDano(golpe: string, inimigo: Personagem){
    let min = 0
    let max = 0
    switch(golpe){
        case "leve":
            min = 10
            max = 15
            break
        case "pesado":
            min = 5
            max = 30
            break
        case "especial":
            min = 30
            max = 50
            break
        default:
            console.log("Golpe não identificado.")
    }
    inimigo.setVida(inimigo.getVida() - (Math.floor(Math.random() * (max - min + 1)) + min))
}

export function mensagemAtaque(mensagem: string){
    console.log(`\x1b[35m${mensagem}\x1b[0m`)
}