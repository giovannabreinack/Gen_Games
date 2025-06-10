import { Jogos } from "../model/Jogos";
import { JogosRepository } from "../repository/JogosRepository";

export class JogosController implements JogosRepository {
    private listaJogos: Array<Jogos> = new Array<Jogos>();

    numero: number = 0;

    buscarJogoPorId(id: number): Jogos | null {
        for (let jogo of this.listaJogos) {
            if (jogo.id === id) 
                return jogo;
        }
                return null;
        }
        
    listarJogos(): void {
        for (let jogo of this.listaJogos) {
            jogo.visualizarJogo();
    }
}
    adicionarJogo(jogo: Jogos): void {
        this.listaJogos.push(jogo);
        console.log(`Jogo ${jogo.titulo} adicionado com sucesso!`);
    }
    atualizarJogo(jogo: Jogos): void {
        throw new Error("Method not implemented.");
    }
    apagarJogo(id: number): void {
        throw new Error("Method not implemented.");
    }

    gerarId(): number {
        this.numero++;
        return this.numero;
    }

}