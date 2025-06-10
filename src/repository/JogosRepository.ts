import { Jogos } from "../model/Jogos";

export interface JogosRepository {
    // Crud
    buscarJogoPorTitulo(titulo: string): void;
    listarJogos(): void;
    adicionarJogo(jogo: Jogos): void;
    atualizarJogo(jogo: Jogos): void;
    apagarJogo(id: number): void;
}