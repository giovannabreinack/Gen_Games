import { Jogos } from "../model/Jogos";
import { JogosRepository } from "../repository/JogosRepository";

export class JogosController implements JogosRepository {
    private listaJogos: Array<Jogos> = new Array<Jogos>();

    numero: number = 0;

    buscarJogoPorTitulo(titulo: string): void {
        throw new Error("Method not implemented.");
    }
    listarJogos(): void {
        for (let jogo of this.listaJogos) {
            jogo.visualizarJogo();
    }
}
    adicionarJogo(jogo: Jogos): void {
        throw new Error("Method not implemented.");
    }
    atualizarJogo(jogo: Jogos): void {
        throw new Error("Method not implemented.");
    }
    apagarJogo(id: number): void {
        throw new Error("Method not implemented.");
    }

}