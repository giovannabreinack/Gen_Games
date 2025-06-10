import readlinesync = require("readline-sync");
import { Jogos } from "./src/model/Jogos";
import { read } from "fs";

export function main() {

    let opcao: number;

    while (true) {
        console.log("::::::::::::::::::::::::::::::::::::::::::::::::::::::::")
        console.log("                      GEN GAMES                         ")
        console.log("::::::::::::::::::::::::::::::::::::::::::::::::::::::::")
        console.log("                1 - Adicionar Jogo                      ");
        console.log("                2 - Listar Jogos                        ");
        console.log("                3 - Buscar Jogo por ID                  ");
        console.log("                4 - Atualizar Jogo                      ");
        console.log("                5 - Apagar Jogo                         ");
        console.log("                6 - Sair                                ");
        console.log("::::::::::::::::::::::::::::::::::::::::::::::::::::::::");
        console.log("Entre com a opção desejada: ");
        opcao = readlinesync.questionInt("");

        if (opcao == 6) {
            console.log("\nGen Games - O mundo dos jogos");
            sobre();
            process.exit(0);
        }

        switch(opcao) {
            case 1:
                console.log("\n\nComprar Jogo\n\n");
                break;
            case 2:
                console.log("\n\nListar Jogos\n\n");
                break;
            case 3:
                console.log("\n\nBuscar Jogo por ID\n\n");
                break;
            case 4:
                console.log("\n\nAtualizar Jogo\n\n");
                break;
            case 5:
                console.log("\n\nApagar Jogo\n\n");
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