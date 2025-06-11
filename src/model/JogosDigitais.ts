import { Jogos } from "./Jogos";

export class JogosDigitais extends Jogos {

    private _cartao_presente: number;

    constructor(id: number, titulo: string, preco: number,
        genero: string, plataforma: string, 
        anodelancamento: number, pagamento: number, cartao_presente: number, tipo: number) {
        super(id, titulo, preco, genero, plataforma, anodelancamento, pagamento, tipo);
        this._cartao_presente = cartao_presente;
        }

    public get cartao_presente() {
        return this._cartao_presente;
    }

    public set cartao_presente(cartao_presente: number) {
        this._cartao_presente = cartao_presente;
    }

    public visualizarJogo(): void{
        super.visualizarJogo();
        console.log(`Cartão Presente: R$${this._cartao_presente}`);
    }
}