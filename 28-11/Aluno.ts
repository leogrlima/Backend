export class Aluno {
    private nome: string 
    private idade: number
    private nacionalidade: string
    private casa: string | null
    private classeMagica: string

    constructor(nome: string, idade: number, nacionalidade: string, classeMagica: string){
        this.nome = nome
        this.idade = idade
        this.nacionalidade = nacionalidade
        const classesMagicas = ["Feitiçaria e Encantamentos", "Poções", "Transfiguração", "Defesa Contra as Artes das Trevas", "Herbologia", "Astronomia", "História da Magia", "Cuidado de Criaturas Mágicas", "Voo", "Magia Experimental", "Divinação", "Runas Antigas"]
        this.classeMagica = classeMagica
    }

    public getNome(): string{
        return this.nome
    }

    public setNome(nome: string): void{
        this.nome = nome
    }

    public getIdade(): number{
        return this.idade
    }

    public setIdade(idade: number): void{
        this.idade = idade
    }

    public getNacionalidade(): string{
        return this.nacionalidade
    }

    public setNacionalidade(nacionalidade: string): void{
        this.nacionalidade = nacionalidade
    }

    public getCasa(): string | null{
        return this.casa
    }

    public setCasa(casa: string): void{
        this.casa = casa
    }

    public getClasseMagica(): string | null{
        return this.classeMagica
    }

    public setClasseMagica(classeMagica: string): void{
        this.classeMagica = classeMagica
    }

    sortearCasa(){
        const casas = ["Grifinória", "Sonserina", "Lufa-Lufa", "Corvinal"]
        this.casa = casas[Math.floor(Math.random() * casas.length)]
    }

    exibirInformacoes(){
        console.log(
`\x1b[34m---------------------
Informações do Aluno:
---------------------
Nome: ${this.nome}
Idade: ${this.idade} anos
Nacionalidade: ${this.nacionalidade}
Casa: ${this.casa}
Classe Mágica: ${this.classeMagica}`)
    }
}