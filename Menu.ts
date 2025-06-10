import readlinesync = require("readline-sync");
import { Jogos } from "./src/model/Jogos";
import { read } from "fs";
import { JogosController } from "./src/controller/JogosController";
import { JogosFisicos } from "./src/model/JogosFisicos";
import { JogosDigitais } from "./src/model/JogosDigitais";

export function main() {

    let jogos: JogosController = new JogosController();

    let opcao, pagamento, tipo, cartao_presente, anodelancamento, preco, quantidade_discos: number;
    let titulo, genero, plataforma, descricao: string;
    const tipos_pagamento = ["Cartao de Credito", "Dinheiro"];
    

    while (true) {
        console.log("\n         Bem-vindo ao Gen Games - O mundo dos jogos!    ");
        console.log("\n::::::::::::::::::::::::::::::::::::::::::::::::::::::::");
        console.log("                      GEN GAMES                         ");
        console.log("::::::::::::::::::::::::::::::::::::::::::::::::::::::::");
        console.log("                1 - Adicionar Jogo                      ");
        console.log("                2 - Listar Jogos                        ");
        console.log("                3 - Buscar Jogo por ID                  ");
        console.log("                4 - Atualizar Jogo                      ");
        console.log("                5 - Apagar Jogo                         ");
        console.log("                6 - Usar Cartão Presente                ");                 
        console.log("                7 - Sair                                ");
        console.log("::::::::::::::::::::::::::::::::::::::::::::::::::::::::");
        console.log("Entre com a opção desejada: ");
        opcao = readlinesync.questionInt("");

        if (opcao == 7) {
            console.log("::::::::::::::::::::::::::::::::::::::::::::::::::::::::");
            console.log("\nVolte sempre ao Gen Games!\n");
            sobre();
            process.exit(0);
        }

        switch(opcao) {
            case 1:
                console.log("\n\nOpção Selecionada: Comprar Jogo\n\n");
                console.log("Digite o Titulo do Jogo: ");
                titulo = readlinesync.question("");
                console.log("Digite o Preço do Jogo: ");
                preco = readlinesync.questionFloat(""); 
                console.log("Digite o Genero do Jogo: ");
                genero = readlinesync.question("");
                console.log("Digite a Plataforma do Jogo: ");
                plataforma = readlinesync.question("");
                console.log("Digite a Descrição do Jogo: ");
                descricao = readlinesync.question("");
                console.log("Digite o Ano de Lançamento do Jogo: ");
                anodelancamento = readlinesync.questionInt("");
                console.log("Digite a Quantidade de Discos: ");
                quantidade_discos = readlinesync.questionInt("");
                console.log("\nSelecione o método de pagamento: ");
                pagamento = readlinesync.keyInSelect(tipos_pagamento, "", {cancel: false}) + 1;
                jogos.adicionarJogo
                (new JogosFisicos(jogos.gerarId(), titulo, preco, genero, plataforma, descricao, anodelancamento, 1, pagamento, quantidade_discos));
                keyPress();
                break;
            case 2:
                console.log("\n\nOpção Selecionada: Listar Jogos\n\n");
                jogos.listarJogos();
                keyPress();
                break;
            case 3:
                console.log("\n\nOpção Selecionada: Buscar Jogo por ID\n\n");
                console.log("Digite o ID do Jogo: ");
                let id = readlinesync.questionInt("");
                jogos.buscarJogoPorId(id);
                break;
            case 4:
                console.log("\n\nOpção Selecionada: Atualizar Jogo\n\n");
                console.log("Digite o ID do Jogo que deseja atualizar: ");
                let idAtualizar = readlinesync.questionInt("");
                let jogoAtualizar = jogos.buscarNoArray(idAtualizar);
                if (jogoAtualizar != null) {
                    console.log("Digite o novo Titulo do Jogo: ");
                    titulo = readlinesync.question("");
                    console.log("Digite o novo Preço do Jogo: ");
                    preco = readlinesync.questionFloat("");
                    console.log("Digite o novo Genero do Jogo: ");
                    genero = readlinesync.question("");
                    console.log("Digite a nova Plataforma do Jogo: ");
                    plataforma = readlinesync.question("");
                    console.log("Digite a nova Descrição do Jogo: ");
                    descricao = readlinesync.question("");
                    console.log("Digite o novo Ano de Lançamento do Jogo: ");
                    anodelancamento = readlinesync.questionInt("");
                    console.log("Digite a nova Quantidade de Discos: ");
                    quantidade_discos = readlinesync.questionInt("");
                    console.log("Digite o novo método de pagamento: ");
                    pagamento = readlinesync.keyInSelect(tipos_pagamento, "", {cancel: false}) + 1;
                    jogos.atualizarJogo(new JogosFisicos(idAtualizar, titulo, preco, genero, plataforma, descricao, anodelancamento, quantidade_discos, pagamento, 1));
                } else {
                    console.log("Jogo com ID " + idAtualizar + " não encontrado.");
                }
                console.log("\nJogo atualizado com sucesso!\n");
                keyPress();
                break;
            case 5:
                console.log("\n\nOpção Selecionada: Apagar Jogo\n\n");
                console.log("Digite o ID do Jogo que deseja apagar: ");
                let idApagar = readlinesync.questionInt("");
                jogos.apagarJogo(idApagar);
                keyPress();
                break;
            case 6:
                console.log("\n\nOpção Selecionada: Usar Cartão Presente\n\n");
                console.log("Digite o ID do jogo:");
                const idJogo = readlinesync.questionInt("");
                const jogo = jogos.buscarNoArray(idJogo);
                if (jogo && jogo instanceof JogosDigitais) {
                    try {
                        jogo.usarCartao();
                    } catch (error) {
                        console.log("Erro ao usar cartão: " + (error as Error).message);
                    }
                } else {
                    console.log("Jogo não encontrado ou ID inválido.");
                }
                keyPress();
                break;
            default:
                console.log("\nOpção Invalida!\n");
                break;    
        }
    }
}

    export function sobre() : void {
        console.log("\n::::::::::::::::::::::::::::::::::::::::::::::::::::::::");
        console.log("Projeto Desenvolvido por: Giovanna Breinack");
        console.log("github.com/giovannabreinack");
        console.log("::::::::::::::::::::::::::::::::::::::::::::::::::::::::");
    }
    
    function keyPress(): void{
        console.log("\nPressione enter para continuar...");
        readlinesync.prompt();
    }

    main();