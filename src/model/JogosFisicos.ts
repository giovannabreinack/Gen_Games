import { Jogos } from "./Jogos";

export class JogosFisicos extends Jogos {
    private _quantidade_discos: number;

    constructor(id: number, titulo: string, preco: number,
        genero: string, plataforma: string, descricao: string,
        anodelancamento: number, tipo:number, pagamento: number, quantidade_discos: number){
    super(id, titulo, preco, genero, plataforma, descricao, anodelancamento, pagamento, tipo);
    this._quantidade_discos = quantidade_discos;
}
    public get quantidade_discos(){
        return this._quantidade_discos;
    }

    public set quantidade_discos(quantidade_discos: number){
        this._quantidade_discos = this.quantidade_discos;
    }

    public visualizarJogoFisico(): void{
        super.visualizarJogo();
        console.log(`Quantidade de discos: R$${this._quantidade_discos}`);
}
}
