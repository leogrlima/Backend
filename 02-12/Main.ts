import { Contato } from "./Contato"
import { Agenda } from "./Agenda"

const ask = require('readline-sync')
const agenda = new Agenda()
let sustentaMenu = true

// Cores
function cor(cor: string, string: string): string {
    let cores = ["preto", "vermelho", "verde", "amarelo", "azul", "roxo", "ciano", "branco"]
    return `\x1b[${30 + cores.indexOf(cor.toLowerCase())}m${string}\x1b[0m`
}

function Main() {
    while (sustentaMenu) {
        console.clear()
        console.log(cor("azul", `-- Sistema de agenda --
 1 - Adicionar contato
 2 - Remover contato
 3 - Listar todos os contatos
 4 - Buscar contato
 5 - Editar contato
 6 - Sair
Digite a opção desejada:`))
      
    const opcao = ask.question(cor("azul", ">>> "))
      
    switch (opcao) {
        case "1":
            console.clear()
            let nomeContato = ask.question(cor("amarelo", "Digite o nome do contato: "))
            let telefoneContato = ask.question(cor("amarelo", "Digite o telefone do contato: "))
            let emailContato = ask.question(cor("amarelo", "Digite o email do contato: "))

            agenda.adicionarContato(new Contato(nomeContato, telefoneContato, emailContato))

            console.clear()
            console.log(cor("verde", `Contato ${nomeContato} adicionado com sucesso!`))
            break
        case "2":
            console.clear()
            let contatoRemover = ask.question(cor("amarelo", "Digite o nome do contato: "))
            let contatoEncontrado = false

            for(let contato of agenda.contatos){
                if (contato.getNome() == contatoRemover){
                    contatoEncontrado = true
                }
            }

            if(contatoEncontrado){
                agenda.removerContato(contatoRemover)

                console.clear()
                console.log(cor("verde", `Contato ${contatoRemover} removido com sucesso!`))
            } else {
                console.log(cor("vermelho", `Contato ${contatoRemover} não encontrado.`))
            }
            break
        case "3":
            agenda.listarContatos()
            break
        case "4":
            console.clear()
            let contatoBuscar = ask.question(cor("amarelo", "Digite o nome do contato: "))

            agenda.buscarContato(contatoBuscar)
            break
        case "5":
            console.clear()
            let nomeAntigo = ask.question(cor("amarelo", "Digite o nome do contato que deseja editar: "))
            let contatoLocalizado = false

            for(let contato of agenda.contatos){
                if (contato.getNome() == nomeAntigo){
                    contatoLocalizado = true
                }
            }

            if (contatoLocalizado){
                agenda.buscarContato(nomeAntigo)
                let nomeNovo = ask.question(cor("amarelo", "Digite o novo nome do contato: "))
                let telefoneNovo = ask.question(cor("amarelo", "Digite o novo telefone do contato: "))
                let emailNovo = ask.question(cor("amarelo", "Digite o novo email do contato: "))

                agenda.editarContato(nomeAntigo, new Contato(nomeNovo, telefoneNovo, emailNovo))

                console.clear()
                console.log(cor("verde", `Contato ${nomeAntigo} editado com sucesso!`))
            } else {
                console.log(cor("vermelho", `Contato ${nomeAntigo} não encontrado.`))
            }
            break
        case "6":
            sustentaMenu = false
            console.log(cor("vermelho", "Saindo do sistema..."))
            break
        default:
            console.log(cor("vermelho", "Opção inválida. Tente novamente."))
            break
        }
        if(sustentaMenu){
            ask.question(cor("amarelo", "Pressione ENTER para continuar..."))
        }
    }
}

Main()