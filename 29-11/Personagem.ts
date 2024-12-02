export interface Personagem{
    getNome(): string
    setNome(nome: string): void

    getVida(): number
    setVida(vida: number): void

    getNacionalidade(): string
    setNacionalidade(nacionalidade: string): void

    getEstiloLuta(): string
    setEstiloLuta(estiloLuta: string): void

    golpeLeve(inimigo: Personagem): void
    golpePesado(inimigo: Personagem): void
    golpeEspecial(inimigo: Personagem): void
}