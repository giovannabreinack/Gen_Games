import { Jogos } from "./Jogos";

export class JogosFisicos extends Jogos {
    private _diponibilidade: boolean;
    private _quantidade_discos: number;

    constructor(id: number, titulo: string, preco: number,
        genero: string, plataforma: string, descricao: string,
        anodelancamento: number, tipo:number, pagamento: number, disponibilidade: boolean, quantidade_discos: number){
    super(id, titulo, preco, genero, plataforma, descricao, anodelancamento, pagamento, tipo);
    this._diponibilidade = disponibilidade;
    this._quantidade_discos = quantidade_discos;
}
    public get disponibilidade(){
        return this._diponibilidade;
    }

    public set disponibilidade(disponibilidade: boolean){
        this._diponibilidade = disponibilidade;
    }

    public get quantidade_discos(){
        return this._quantidade_discos;
    }

    public set quantidade_discos(quantidade_discos: number){
        this._quantidade_discos = this.quantidade_discos;
    }

    verificarDisponibilidade(): boolean {
        if (this._diponibilidade && this._quantidade_discos > 0) {
            console.log("Jogo disponível para compra.");
            return true;
        } else {
            console.log("Jogo indisponível.");
            return false;
        }
    }
}
