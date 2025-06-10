import { Jogos } from "../model/Jogos";
import { JogosRepository } from "../repository/JogosRepository";

export class JogosController implements JogosRepository {
    private listaJogos: Array<Jogos> = new Array<Jogos>();

    numero: number = 0;

    buscarJogoPorId(id: number): void {
        let buscaJogo = this.buscarNoArray(id);
        if (buscaJogo != null){
            buscaJogo.visualizarJogo();
        } else {
            console.log(`Jogo com ID ${id} não encontrado.`);
        }
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
        let buscaJogo = this.buscarNoArray(jogo.id);
        if (buscaJogo != null) {
            this.listaJogos[this.listaJogos.indexOf(buscaJogo)] = jogo;
            console.log(`Jogo ${jogo.titulo} atualizado com sucesso!`);
        } else {
            console.log(`Jogo com ID ${jogo.id} não encontrado para atualização.`);
        }
    }
    apagarJogo(id: number): void {
        let buscaJogo = this.buscarNoArray(id);
        if (buscaJogo != null) {
            this.listaJogos.splice(this.listaJogos.indexOf(buscaJogo), 1);
            console.log(`Jogo com ID ${id} apagado com sucesso!`);
        } else {
            console.log(`Jogo com ID ${id} não encontrado para apagar.`);
        }
    }

    gerarId(): number {
        this.numero++;
        return this.numero;
    }

    public buscarNoArray(id: number): Jogos | null {
        for (let jogo of this.listaJogos) {
            if (jogo.id === id) {
                return jogo;
            }
        }
        return null;
    }

}