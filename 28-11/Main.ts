import { Aluno } from "./Aluno";

const ask = require("readline-sync")
let programaAtivo = true
let alunos: Array<Aluno>

// Cores
function cor(cor: string, string: string): string {
    let cores = ["preto", "vermelho", "verde", "amarelo", "azul", "roxo", "ciano", "branco"]
    return `\x1b[${30 + cores.indexOf(cor.toLowerCase())}m${string}\x1b[0m`
}

function cadastrarAluno(){
    console.clear()

    let nomeAluno = ask.question(cor("amarelo", "Digite o nome do aluno: "))
    let idadeAluno = Number(ask.question(cor("amarelo", "Digite a idade do aluno: ")))
    let nacionalidadeAluno = ask.question(cor("amarelo", "Digite a nacionalidade do aluno: "))
    let classeMagicaAluno = ""
    function classeMagica() {
        console.log(cor("azul",
`Digite o número da opção da classe mágica:

[1] - Feitiçaria e Encantamentos        [7] - História da Magia
[2] - Poções                            [8] - Cuidado de Criaturas Mágicas
[3] - Transfiguração                    [9] - Voo
[4] - Defesa Contra as Artes das Trevas [10] - Magia Experimental
[5] - Herbologia                        [11] - Divinação
[6] - Astronomia                        [12] - Runas Antigas.`))
        let arrayClasseMagica = ["Feitiçaria e Encantamentos", "Poções", "Transfiguração", "Defesa Contra as Artes das Trevas", "Herbologia", "Astronomia", "História da Magia", "Cuidado de Criaturas Mágicas", "Voo", "Magia Experimental", "Divinação", "Runas Antigas"]
        let opcaoClasseMagica = Number(ask.question(cor("ciano", "----> ")))
        if (opcaoClasseMagica > 0 && opcaoClasseMagica < 13) {
            classeMagicaAluno = arrayClasseMagica[opcaoClasseMagica - 1]
        } else {
            console.log(cor("vermelho", "Opção não encontrada."))
            ask.question(cor("amarelo", "Pressione ENTER para continuar."))
        }
    }

    while(classeMagicaAluno == ""){
        classeMagica()
    }

    console.clear()

    if(typeof nomeAluno === "string" && typeof idadeAluno === "number" && typeof nacionalidadeAluno === "string" && typeof classeMagicaAluno === "string"){
        let alunoNovo = new Aluno(nomeAluno, idadeAluno, nacionalidadeAluno, classeMagicaAluno)
        alunoNovo.sortearCasa()
        alunos.push(alunoNovo)

        console.log(cor("verde", `🎓 Aluno(a) ${nomeAluno} cadastrado(a)!`))
    } else {
        console.log(cor("vermelho", "Não foi possível cadastrar o usuário: Dados inválidos."))
    }
}

function verAlunos(){
    console.clear()
    if(alunos.length > 0){
        console.log(cor("azul", "📝 Alunos cadastrados:"))
    } else {
        console.log(cor("vermelho", "📝 Nenhum aluno cadastrado."))
    }
    for(let aluno of alunos){
        aluno.exibirInformacoes()
    }
}

function editarAluno(){
    console.clear()
    let nomeAluno = ask.question("Insira o nome do aluno: ")

    for(let aluno of alunos){
        if (aluno.getNome() == nomeAluno){
            console.log(cor("azul",
`Como deseja editar ${aluno.getNome()}?
[1] - Alterar nome
[2] - Alterar idade
[3] - Alterar nacionalidade
[4] - Alterar casa
[5] - Alterar classe mágica

Digite o número da opção:`))

            let opcao = Number(ask.question(cor("ciano", "----> ")))
            let opcaoSelecionada = true

            switch(opcao){
                case 1:
                    let novoNome = ask.question(cor("amarelo", "Insira o novo nome: "))
                    aluno.setNome(novoNome)
                    break
                case 2:
                    let novaIdade = ask.question(cor("amarelo", "Insira a nova idade: "))
                    aluno.setIdade(novaIdade)
                    break
                case 3:
                    let novaNacionalidade = ask.question(cor("amarelo", "Insira a nova nacionalidade: "))
                    aluno.setNacionalidade(novaNacionalidade)
                    break
                case 4:
                    let novaCasa = ask.question(cor("amarelo", "Insira a nova casa: "))
                    aluno.setCasa(novaCasa)
                    break
                case 5:
                    let novaClasseMagica = ask.question(cor("amarelo", "Insira a nova classe magica: "))
                    aluno.setClasseMagica(novaClasseMagica)
                    break
                default:
                    console.log(cor("vermelho", "Opção não encontrada."))
                    opcaoSelecionada = false
                    break
            }
            if (opcaoSelecionada){
                console.clear()
                console.log(cor("verde", `✏️ Aluno(a) ${aluno.getNome()} editado com sucesso!`))
            }
        } else {
            console.log(cor("vermelho", "Aluno não encontrado."))
        }
    }
}

function deletarAluno(){
    console.clear()
    let nomeAluno = ask.question(cor("amarelo", "Digite o nome do aluno que deseja deletar: "))
    let alunoDeletado: string | null

    alunoDeletado = null
    for(let aluno of alunos){
        if (aluno.getNome().toLowerCase() == nomeAluno.toLowerCase()){
            alunoDeletado = aluno.getNome()
            alunos.splice(alunos.indexOf(aluno), 1)
            break
        }
    }

    console.clear()
    if(alunoDeletado){
        console.log(cor("verde", `🧨 Aluno(a) ${alunoDeletado} deletado(a)!`))
    } else {
        console.log(cor("vermelho", "Aluno não encontrado."))
    }
}

function Main(){
    alunos = []

    while(programaAtivo){
        console.clear()
        console.log(cor("roxo",
`Bem vindo a Hogwarts, o que deseja fazer?

[1] - Cadastrar novo aluno 🎓
[2] - Ver alunos cadastrados 📝
[3] - Editar dados de um aluno ✏️
[4] - Deletar um aluno 🧨
[0] - Sair 🚪

Digite o número da opção:`))
    
        let opcaoMenu = Number(ask.question(cor("ciano", "----> ")))
    
        switch (opcaoMenu){
            case 1:
                cadastrarAluno()
                break
            case 2:
                verAlunos()
                break
            case 3:
                editarAluno()
                break
            case 4:
                deletarAluno()
                break
            case 0:
                programaAtivo = false
                console.log(cor("vermelho", "Encerrando..."))
        }
        if (programaAtivo){
            ask.question(cor("amarelo", "Pressione ENTER para continuar."))
        }
    }
}

Main()