import { Contato } from "./Contato"

export class Agenda {
    contatos: Contato[]

    constructor(){
        this.contatos = []
    }

    adicionarContato(contato: Contato){
        this.contatos.push(contato)
    }

    removerContato(nome: string){
        for(let contato of this.contatos){
            if (contato.getNome() == nome){
                this.contatos.splice(this.contatos.indexOf(contato), 1)
            }
        }
    }

    listarContatos(){
        console.clear()
        if (this.contatos.length > 0){
            console.log("\x1b[34mLista de contatos:")
            for(let contato of this.contatos){
                contato.mostrarContato()
            }
        } else {
            console.log("\x1b[31mNenhum contato cadastrado.")
        }
    }

    buscarContato(nome: string){
        console.clear()
        let totalResultados = 0
        for(let contato of this.contatos){
            if (contato.getNome() == nome){
                contato.mostrarContato()
                totalResultados += 1
            }
        }
        if (totalResultados == 0){
            console.log("\x1b[31mNenhum contato encontrado.")
        }
    }

    editarContato(nome: string, novoContato: Contato){
        for(let contato of this.contatos){
            if (contato.getNome() == nome){
                contato.editarContato(novoContato.getNome(), novoContato.getTelefone(), novoContato.getEmail())
            }
        }
    }
}