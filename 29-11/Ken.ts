import { Personagem } from "./Personagem";
import { calcularDano, mensagemAtaque } from "./calcularDano";

export class Ken implements Personagem{
    private nome = "Ken"
    private vida = 100
    private nacionalidade: string
    private estiloLuta: string

    public getNome(): string{
        return this.nome
    }

    public setNome(nome: string){
        this.nome = nome
    }

    public getVida(): number{
        return this.vida
    }

    public setVida(vida: number){
        this.vida = vida
    }

    public getNacionalidade(): string{
        return this.nacionalidade
    }

    public setNacionalidade(nacionalidade: string){
        this.nacionalidade = nacionalidade
    }

    public getEstiloLuta(): string{
        return this.estiloLuta
    }

    public setEstiloLuta(estiloLuta: string){
        this.estiloLuta = estiloLuta
    }

    public golpeLeve(inimigo: Personagem): void{
        calcularDano("leve", inimigo)
        mensagemAtaque(`${this.nome} usa Hadouken!`)
    }

    public golpePesado(inimigo: Personagem): void{
        calcularDano("pesado", inimigo)
        mensagemAtaque(`${this.nome} usa Shoryuken!`)
    }

    public golpeEspecial(inimigo: Personagem): void{
        calcularDano("especial", inimigo)
        mensagemAtaque(`${this.nome} usa Shinryuken!`)
    }
}