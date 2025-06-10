import { Jogos } from "../model/Jogos";

export interface JogosRepository {
    // Crud
    buscarJogoPorId(id: number): void;
    listarJogos(): void;
    adicionarJogo(jogo: Jogos): void;
    atualizarJogo(jogo: Jogos): void;
    apagarJogo(id: number): void;
}