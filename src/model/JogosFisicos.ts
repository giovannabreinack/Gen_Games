import { Jogos } from "./Jogos";

export class JogosFisicos extends Jogos {
    private _quantidade_discos: number;

    constructor(id: number, titulo: string, preco: number,
        genero: string, plataforma: string, 
        anodelancamento: number, tipo:number, pagamento: number, quantidade_discos: number){
    super(id, titulo, preco, genero, plataforma, anodelancamento, pagamento, tipo);
    this._quantidade_discos = quantidade_discos;
}
    public get quantidade_discos(){
        return this._quantidade_discos;
    }

    public set quantidade_discos(quantidade_discos: number){
        this._quantidade_discos = this.quantidade_discos;
    }

    public visualizarJogo(): void{
        super.visualizarJogo();
        console.log(`Quantidade: ${this._quantidade_discos}`);
}
}

