export class Contato {
    private nome: string
    private telefone: string
    private email: string

    constructor(nome: string, telefone: string, email: string){
        this.nome = nome
        this.telefone = telefone
        this.email = email
    }

    public getNome(): string {
        return this.nome
    }

    public setNome(nome: string): void {
        this.nome = nome
    }

    public getTelefone(): string {
        return this.telefone
    }

    public setTelefone(telefone: string): void {
        this.telefone = telefone
    }

    public getEmail(): string {
        return this.email
    }

    public setEmail(email: string): void {
        this.email = email
    }

    editarContato(nome: string, telefone: string, email: string){
        this.setNome(nome)
        this.setTelefone(telefone)
        this.setEmail(email)
    }

    mostrarContato(){
        console.log(
            `\x1b[34m---------------------
Informações do Contato:
---------------------
Nome: ${this.nome}
Telefone: ${this.telefone}
Email: ${this.email}`)
    }
}
